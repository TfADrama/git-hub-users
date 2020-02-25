import Reactotron from 'reactotron-react-native';
import AsyncStorage from '@react-native-community/async-storage';

Reactotron.setAsyncStorageHandler(AsyncStorage) // <- here!
  .configure() // controls connection & communication settings
  .useReactNative() // add all built-in react native plugins
  .connect(); // let's connect!
