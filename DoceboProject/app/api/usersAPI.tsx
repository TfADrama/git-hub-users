import axios from 'axios';
import {USERS_ENDPOINT} from './constants';

/**
 * Fetches all users from the API using axios.
 *
 * @returns {Array} Array of GitHub users
 */
export const fetchUsers = async (): Promise<Array<Object>> => {
  try {
    const response = await axios.get(USERS_ENDPOINT);
    const usersArray = response.data;

    return usersArray;
  } catch (error) {
    return [];
  }
};
