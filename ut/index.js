/**
 * @format
 */

import {AppRegistry} from 'react-native';
import App from './App'; // 1
// import MN from './MainNavigator'; // 2
import {name as appName} from './app.json';


// AppRegistry.registerComponent(appName, () => MN); // 2
AppRegistry.registerComponent(appName, () => App); // 1

