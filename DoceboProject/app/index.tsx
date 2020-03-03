// import { createAppContainer } from 'react-navigation';
// import { HotelRoutes } from './config/routes';
import ListUsersScreen from './screens/ListUsers/ListUsersScreen';
import {configureAxios} from './api/configuration';
const App = ListUsersScreen;
configureAxios();

export default App;
