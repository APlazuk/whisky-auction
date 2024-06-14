# WhiskyAuction

This project is developed using TypeScript and Angular. It uses OpenAPI tools for generating code based on a provided OpenAPI specification. The current version of TypeScript used is 5.4.2 and the Angular version 18.0.3.

## Description

The application is developed to manage whisky products. The application serves as a platform that allows users to check all available whisky auction.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.

## Generating Client Code using OpenAPI Tools

Steps to generate the client code from the provided `whisky-service.yaml` file are as follow:

1. **Install OpenAPI Generator**

   If you have not installed OpenAPI Generator, you can install it using npm:
   `npm add @openapitools/openapi-generator-cli`

2. **Prepare the YAML file**

   Ensure the whisky-service.yaml file is updated with the correct specifications and is located in the expected directory.

3. **Generate the Client Code**

   The package.json file contains a predefined command for generating client code from the whisky-service.yaml. In your terminal, run the following command:
   `npm run generate:api`

**Additional Points**

* Always check the validity of your whisky-service.yaml before generating the client code.
* If you update your whisky-service.yaml specifications, remember to regenerate the client code using the above command.
