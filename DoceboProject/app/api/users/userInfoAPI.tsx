import axios from 'axios';
import {LIST_USERS_ENDPOINT} from '../constants';

/**
 * Fetches the details of the user with a given username.
 *
 * @param {string} username username to search
 * @returns {object}
 * @throws Unexpected errors may occur while fetching users.
 */
export const fetchUser = async (username: string): Promise<Object> => {
  const getUserEndpoint = `${LIST_USERS_ENDPOINT}/${username}`;

  const response = await axios.get(getUserEndpoint);
  const data = response.data;

  return data;
};
