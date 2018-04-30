import { StackNavigator } from 'react-navigation';
import App from './App';

const RootNavigator = StackNavigator({
  Home: {
    screen: App,
    navigationOptions: {
      headerTitle: 'Home',
    },
  }
});

export default RootNavigator;
