.PHONY: fallback
fallback: help

.PHONY: help
help:
	@echo "help:"
	@echo "  make help -- show this help"
	@echo "  make zip  -- make deployment_server.zip"

.PHONY: zip
zip:
	-rm ./deployment_server.zip
	cd ./lambda_initial_server && zip -r ../deployment_server.zip .
