import {
  createStackNavigator, createAppContainer
} from 'react-navigation';
import Home from './Home';
import Profile from './Profile'


const MainNavigator = createStackNavigator({
  Home: {screen: Home},
  Profile: {screen: Profile},
});

const MN = createAppContainer(MainNavigator);

export default MN;
