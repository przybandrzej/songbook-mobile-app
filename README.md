# songbook-mobile-app

**React Native** mobile client of the [Songbook APP](https://github.com/przybandrzej/Songbook_Manager-API).

## Getting started

### Prerequisites  
 * node, npm and npx
 * java, android studio and android emulator

### API client  
The project uses [Swagger Codegen CLI](https://github.com/swagger-api/swagger-codegen) to generate boilerplate code responsible to connect to the API.  To generate api client run the `./swagger-codegen-cli/swagger-generate.sh` file.

### Environment variables  
The project comes with one environment cofig file `./config/env/dev.json`. Inside you can find (and add) configuration variables. (To build prod/staging/test/other versions of application simply add new file e.g. `prod.json`).

Switching between environments is achieved by running `npm run env:dev` (or env:prod/test etc). This command runs `node config/set-environment.js dev` under the hood which switches between config files and generates `env.json` file in the root directory of the project. The `env.json` file contains the env variables currently used by the application.

### Running the application  
To run the app run `npm run android:dev` (or ios:dev). This will switch the env to dev mode and run the android version of the application just like running `react-native run-android` command.

**Running local dev API** - set `API_URL` in `dev.json` file to local IPv4 of the API.

### Building the application  
`npm run build:android:dev` (or ios) will switch env mode to dev and run `react-native bundle --platform android ...` under the hood. 
