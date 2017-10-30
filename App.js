import {
  StackNavigator,
} from 'react-navigation';

import SplashScreen from './src/components/SplashScreen/SplashScreen';
import HomeScreen from './src/components/HomeScreen/HomeScreen';
import NewsDetails from './src/components/NewsTile/NewsDetails';

const App = StackNavigator({
  SplashScreen: { screen: SplashScreen },
  HomeScreen: { screen: HomeScreen },
  NewsDetails: { screen: NewsDetails },
});

export default App;
