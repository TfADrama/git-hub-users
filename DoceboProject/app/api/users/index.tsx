import axios from 'axios';
import {USERS_ENDPOINT} from '../constants';
import parse from 'github-parse-link';

/**
 * Fetches all users from the API using axios.
 *
 * @returns {Array} Array of GitHub users
 */
export const fetchUsers = async (offset = 0, limit = 10): Promise<Object> => {
  const configure = {
    params: {
      per_page: limit,
      since: offset,
    },
  };
  try {
    const response = await axios.get(USERS_ENDPOINT, configure);
    const data = response.data;
    const {next} = parse(response.headers.link);

    return {data, next};
  } catch (error) {
    return {};
  }
};

export const fetchUsersWithLink = async (link: string): Promise<Object> => {
  try {
    const response = await axios.get(link);
    const data = response.data;
    const {next} = parse(response.headers.link);

    return {data, next};
  } catch (error) {
    return {};
  }
};
