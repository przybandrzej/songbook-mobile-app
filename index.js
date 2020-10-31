/**
 * @format
 */

import { AppRegistry } from 'react-native';
import App from './App';
import { name as appName } from './app.json';
import { ApiClient } from './src/songbook-client/src/ApiClient';
import { API_URL } from './env.json';
import { AuthService } from './src/auth-service';

ApiClient.setBasePath(API_URL);
const auth = AuthService.Instance;
auth.logout();
auth.loggedIn$.subscribe(is => console.log('Is logged in: ' + is));
auth.login({ login: 'superuser', password: 'superuser' });
AppRegistry.registerComponent(appName, () => App);
