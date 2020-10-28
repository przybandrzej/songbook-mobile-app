/**
 * @format
 */

import { AppRegistry } from 'react-native';
import App from './App';
import { name as appName } from './app.json';
import ApiClient from './src/songbook-client/src/ApiClient';
import { API_URL } from './env.json';

ApiClient.setBasePath(API_URL);
AppRegistry.registerComponent(appName, () => App);
