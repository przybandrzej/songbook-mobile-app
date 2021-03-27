/**
 * @format
 */

import { AppRegistry } from 'react-native';
import App from './App';
import { name as appName } from './app.json';
import { ApiClient } from './src/songbook-client/src/ApiClient';
import { API_URL } from './env.json';
import { AuthService } from './src/auth-service';
import { SongService } from './src/service/song-service';

ApiClient.setBasePath(API_URL);
const auth = AuthService.Instance;
auth.loggedIn$.subscribe(is => console.log('Is logged in: ' + is));
auth.login({ login: 'superuser', password: 'superuser' });
const songsrvce = SongService.getInstance();
songsrvce.getSong(3).subscribe(song => console.log(song), err => console.log(JSON.stringify(err.message, null, 2)));
AppRegistry.registerComponent(appName, () => App);
