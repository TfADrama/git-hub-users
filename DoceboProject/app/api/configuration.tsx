import axios from 'axios';
import {API_SCHEME, BASE_URL} from './constants';

export function configureAxios() {
  axios.defaults.baseURL = `${API_SCHEME}${BASE_URL}`;
  axios.defaults.headers.common['Accept'] = 'application/vnd.github.v3+json';
}
