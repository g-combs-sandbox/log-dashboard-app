# log-dashboard-app
Logging dashboard application

## Setup
To run this script you must have node installed before leveraging npm to install the project's dependencies. Once you have this installed, then you may install all dependencies for this project from the project root.
```
npm install
```

## Deploy
To deploy the application locally, you may perform the following terminal command:
```
npm run start:dev
```

NOTE: All endpoints to the exposed AWS Lambda service are currently hardcoded within the `app` component. Future iterations of this would leverage the deployment environment variables to reference the appropriate endpoints for the stage it was deployed to (e.g. `dev` or `prod`). If you are running this sandbox project locally, then you may need to update those endpoints based on your deployment of the `log-micro-service`.

Additionally putting the `log-micro-servicew` behind a custom domain name would prevent deployment specific endpoints.
