terraform {
  required_version = "~> 0.14"
  required_providers {
    aws = {
      source  = "hashicorp/aws"
      version = "~> 3.0"
    }
  }
}

locals {
  project_name = "frourio-sample-1"
  suffix       = "${local.project_name}-${terraform.workspace}"
  tags = {
    tf        = "true"
    tf-suffix = local.suffix
    Name      = local.project_name
  }
}

provider "aws" {
  region  = var.region
  profile = var.profile
}

# IAM

## IAM/Lambda

resource "aws_iam_role" "lambda" {
  name               = "service-lambda-${local.suffix}"
  path               = "/service/${local.project_name}/"
  assume_role_policy = data.aws_iam_policy_document.assume_to_lambda.json

  tags = local.tags
}

resource "aws_iam_policy" "lambda" {
  name        = "service-lambda-${local.suffix}"
  description = "Service Lambda Policy"
  policy      = data.aws_iam_policy_document.lambda.json
}

resource "aws_iam_policy_attachment" "lambda" {
  name       = "lambda-attachment-${local.suffix}"
  roles      = [aws_iam_role.lambda.name]
  policy_arn = aws_iam_policy.lambda.arn
}

data "aws_iam_policy_document" "assume_to_lambda" {
  statement {
    actions = [
      "sts:AssumeRole",
    ]

    principals {
      type        = "Service"
      identifiers = ["lambda.amazonaws.com"]
    }

    effect = "Allow"
  }
}

### Reference: arn:aws:iam::aws:policy/service-role/AWSLambdaVPCAccessExecutionRole
data "aws_iam_policy_document" "lambda" {
  statement {
    effect = "Allow"

    actions = [
      "logs:CreateLogGroup",
      "logs:CreateLogStream",
      "logs:PutLogEvents",
      "ec2:DescribeNetworkInterfaces",
      "ec2:CreateNetworkInterface",
      "ec2:DeleteNetworkInterface",
      "ec2:DescribeInstances",
      "ec2:AttachNetworkInterface",
    ]

    resources = ["*"]
  }
  statement {
    sid    = "efs"
    effect = "Allow"

    actions = [
      "elasticfilesystem:ClientMount",
      "elasticfilesystem:ClientRootAccess",
      "elasticfilesystem:ClientWrite",
      "elasticfilesystem:DescribeMountTargets"
    ]

    resources = [
      aws_efs_file_system.this.arn,
      aws_efs_access_point.this.arn,
    ]
  }
}

## IAM/CI

resource "aws_iam_role" "ci" {
  name               = "service-ci-${local.suffix}"
  path               = "/service/${local.project_name}/"
  assume_role_policy = data.aws_iam_policy_document.assume_to_lambda.json

  tags = local.tags
}

resource "aws_iam_user" "ci" {
  name = "service-ci-${local.suffix}"
  path = "/service/${local.project_name}/"

  tags = local.tags
}

resource "aws_iam_policy" "ci" {
  name        = "service-ci-${local.suffix}"
  description = "Service CI Policy"
  policy      = data.aws_iam_policy_document.ci.json
}

resource "aws_iam_policy_attachment" "ci" {
  name       = "ci-attachment-${local.suffix}"
  users      = [aws_iam_user.ci.name]
  policy_arn = aws_iam_policy.ci.arn
}

data "aws_iam_policy_document" "ci" {
  statement {
    sid = "InvokeMigration"
    effect = "Allow"

    actions = [
      "lambda:InvokeFunction",
    ]

    resources = [
      aws_lambda_function.migration.arn,
    ]
  }
  statement {
    sid = "Update"
    effect = "Allow"

    actions = [
      "lambda:UpdateFunctionCode",
    ]

    resources = [
      aws_lambda_function.server.arn,
      aws_lambda_function.migration.arn,
    ]
  }
  statement {
    sid = "S3"
    effect = "Allow"

    actions = [
      "s3:PutObject",
      "s3:PutObjectAcl",
      "s3:GetObject",
      "s3:GetObjectAcl",
    ]

    resources = [
      "arn:aws:s3:::${aws_s3_bucket.this.bucket}/*",
    ]
  }
}

# S3

resource "aws_s3_bucket" "this" {
  acl    = "private"
  force_destroy = true

  tags = local.tags
}

output "bucket_name" {
  value = aws_s3_bucket.this.bucket
}

# VPC

resource "aws_vpc" "this" {
  cidr_block = "10.0.0.0/16"

  tags = local.tags
}

## VPC/Subnet/private

resource "aws_subnet" "private" {
  vpc_id     = aws_vpc.this.id
  cidr_block = "10.0.5.0/24"

  tags = local.tags
}

## VPC/Subnet/internal

resource "aws_subnet" "internal" {
  vpc_id     = aws_vpc.this.id
  cidr_block = "10.0.9.0/24"

  tags = local.tags
}

## VPC/SecurityGroup/private
### Allow ingress to all inernal access
### Allow egress to internet

resource "aws_security_group" "private" {
  name   = "private"
  vpc_id = aws_vpc.this.id

  ingress {
    cidr_blocks = ["10.0.0.0/16"]
    from_port       = 0
    to_port         = 0
    protocol        = "-1"
  }

  egress {
    cidr_blocks = ["0.0.0.0/0"]
    from_port = 0
    to_port   = 0
    protocol  = "-1"
  }

  tags = merge(local.tags, {
    Name = "sg-private-${local.suffix}"
  })
}

## VPC/SecurityGroup/efs
### Allow ingress all inernal access
### Allow egress all internal access

resource "aws_security_group" "internal" {
  name   = "internal"
  vpc_id = aws_vpc.this.id

  ingress {
    cidr_blocks = ["10.0.0.0/16"]
    from_port       = 0
    to_port         = 0
    protocol        = "-1"
  }

  egress {
    cidr_blocks = ["10.0.0.0/16"]
    from_port       = 0
    to_port         = 0
    protocol        = "-1"
  }

  tags = merge(local.tags, {
    Name = "sg-internal-${local.suffix}"
  })
}

# EFS

### Reference: https://registry.terraform.io/providers/hashicorp/aws/latest/docs/resources/lambda_function#lambda-file-systems

resource "aws_efs_file_system" "this" {
  tags = local.tags
}

resource "aws_efs_mount_target" "this" {
  file_system_id  = aws_efs_file_system.this.id
  subnet_id       = aws_subnet.internal.id
  security_groups = [aws_security_group.internal.id]
}

resource "aws_efs_access_point" "this" {
  file_system_id = aws_efs_file_system.this.id

  root_directory {
    path = "/efs0"
    creation_info {
      owner_gid   = 1000
      owner_uid   = 1000
      permissions = "777"
    }
  }

  posix_user {
    gid = 1000
    uid = 1000
  }

  tags = local.tags
}

# Lambda

## Lambda/server
### Triggered by end users via API Gateway.

resource "aws_lambda_function" "server" {
  function_name = "api-proxy-${local.suffix}"
  s3_bucket = aws_s3_bucket.this.bucket
  s3_key = ""
  handler       = "lambda.handler"
  role          = aws_iam_role.lambda.arn
  publish       = var.publish_lambda
  timeout       = 30

  runtime = "nodejs12.x"

  environment {
    variables = {
      foo = "bar"
    }
  }

  file_system_config {
    arn              = aws_efs_access_point.this.arn
    local_mount_path = "/mnt/efs0"
  }

  vpc_config {
    subnet_ids         = [aws_subnet.private.id]
    security_group_ids = [aws_security_group.private.id]
  }

  tags = local.tags

  # Explicitly declare dependency on EFS mount target.
  # When creating or updating Lambda functions, mount target must be in 'available' lifecycle state.
  depends_on = [aws_efs_mount_target.this]
}

resource "aws_lambda_permission" "server_for_apigw" {
  statement_id  = "AllowExecutionFromAPIGateway"
  action        = "lambda:InvokeFunction"
  function_name = aws_lambda_function.server.function_name
  principal     = "apigateway.amazonaws.com"

  # Reference: http://docs.aws.amazon.com/apigateway/latest/developerguide/api-gateway-control-access-using-iam-policies-to-invoke-api.html
  # I'm using ANY, so 2nd from the back is star.
  source_arn = "arn:aws:execute-api:${var.region}:${var.account_id}:${aws_apigatewayv2_api.this.id}/*/*/{proxy+}"
}

output "function_name_server" {
  value = aws_lambda_function.server.function_name
}

## Lambda/migration
### Only triggered by CI.

resource "aws_lambda_function" "migration" {
  function_name = "migration-${local.suffix}"
  s3_bucket = aws_s3_bucket.this.bucket
  s3_key = ""
  handler       = "lambda_migration.handler"
  role          = aws_iam_role.lambda.arn
  publish       = var.publish_lambda
  timeout       = 60

  runtime = "nodejs12.x"

  environment {
    variables = {
      foo = "bar"
    }
  }

  file_system_config {
    arn              = aws_efs_access_point.this.arn
    local_mount_path = "/mnt/efs0"
  }

  vpc_config {
    subnet_ids         = [aws_subnet.private.id]
    security_group_ids = [aws_security_group.private.id]
  }

  tags = local.tags

  depends_on = [aws_efs_mount_target.this]
}

output "function_name_migration" {
  value = aws_lambda_function.migration.function_name
}

# API Gateway

resource "aws_apigatewayv2_api" "this" {
  name          = "api-${local.suffix}"
  protocol_type = "HTTP"
  cors_configuration {
    allow_origins = var.allow_origins
    allow_methods = ["*"]
    max_age = 300
    allow_headers = ["*"]
    allow_credentials = true
  }

  tags = local.tags
}

resource "aws_apigatewayv2_route" "root_proxy" {
  api_id    = aws_apigatewayv2_api.this.id
  route_key = "ANY /{proxy+}"
  target = "integrations/${aws_apigatewayv2_integration.to_lambda_server.id}"
}

resource "aws_apigatewayv2_integration" "to_lambda_server" {
  api_id               = aws_apigatewayv2_api.this.id
  integration_type     = "AWS_PROXY"
  connection_type      = "INTERNET"
  integration_method   = "POST"
  integration_uri      = aws_lambda_function.server.invoke_arn
  timeout_milliseconds = 30000
}

resource "aws_apigatewayv2_stage" "default" {
  api_id = aws_apigatewayv2_api.this.id
  name   = "$default"
  auto_deploy = true

  tags = local.tags
}

output "invoke_url" {
  value = aws_apigatewayv2_stage.default.invoke_url
}

# AWS Resource Groups

resource "aws_resourcegroups_group" "this" {
  name = local.suffix

  resource_query {
    query = jsonencode({
      ResourceTypeFilters = ["AWS::AllSupported"]
      TagFilters = [
        {
          Key    = "tf"
          Values = ["true"]
        },
        {
          Key    = "tf-suffix"
          Values = [local.suffix]
        },
      ]
    })
  }

  tags = local.tags
}
