/**
 * @format
 */

import { AppRegistry } from 'react-native';
import App from './App';
import { name as appName } from './app.json';
import ApiClient from './src/songbook-client/src/ApiClient';

ApiClient.setBasePath('https://stk-uep.pl');
AppRegistry.registerComponent(appName, () => App);
