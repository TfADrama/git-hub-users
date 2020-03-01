import axios from 'axios';
import {USERS_ENDPOINT} from '../constants';
import parse from 'github-parse-link';

/**
 * Fetches a limited number of users from the GIT HUB API.
 * Default limited number = 10.
 *
 * @returns An object with:
 *          - data = Array of GitHub users,
 *          - next = link to next chunk of users.
 * @throws Unexpected errors may occur while fetching users.
 */
export const fetchUsers = async (offset = 0, limit = 10): Promise<Object> => {
  const configure = {
    params: {
      per_page: limit,
      since: offset,
    },
  };

  const response = await axios.get(USERS_ENDPOINT, configure);
  const data = response.data;
  const {next} = parse(response.headers.link);

  return {data, next};
};

/**
 * Fetches users from the GIT HUB API given a link.
 * Used to fetch a new chunk of users
 *
 * @argument link A link to get a new chunk of users.
 *
 * @returns An object with:
 *          - data = Array of GitHub users,
 *          - next = link to next chunk of users.
 * @throws Unexpected errors may occur while fetching users.
 */
export const fetchUsersWithLink = async (link: string): Promise<Object> => {
  try {
    const response = await axios.get(link);
    const data = response.data;
    const {next} = parse(response.headers.link);

    return {data, next};
  } catch (error) {
    console.log('fetching users with link: ', error);
    throw new Error(error);
  }
};
