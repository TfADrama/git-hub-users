import {configureAxios} from './api/configuration';
import {createAppContainer} from 'react-navigation';
import {UserRoutes} from './config/routes';

configureAxios();

export default createAppContainer(UserRoutes);
