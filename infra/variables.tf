variable "profile" {
  type = string
}

variable "account_id" {
  type = string
}

variable "region" {
  type    = string
  default = "us-east-1"
}

variable "publish_lambda" {
  type    = bool
  default = false
}
