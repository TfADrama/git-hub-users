import axios from 'axios';
import {USERS_ENDPOINT} from '../constants';
import parse from 'github-parse-link';

/**
 * Fetches a limited number of users from the GIT HUB API.
 * Default limited number = 10.
 *
 * @param {number} limit number of users to retrieve on the first chunk
 * @returns {object} An object with:
 *          - data = Array of GitHub users,
 *          - next = link to next chunk of users.
 * @throws Unexpected errors may occur while fetching users.
 */
export const fetchUsers = async (limit = 10): Promise<Object> => {
  const configure = {
    params: {
      per_page: limit,
    },
  };

  const response = await axios.get(USERS_ENDPOINT, configure);
  const data = response.data;
  const {next} = parse(response.headers.link);

  return {data, next};
};

/**
 * Fetches users from the GIT HUB API given a link.
 * Used to fetch a new chunk of users given a link that represents the next chunk
 * from a previous request.
 *
 * @argument link A link to get the new chunk of users.
 *
 * @returns An object with:
 *          - data = Array of GitHub users,
 *          - next = link to next chunk of users.
 * @throws Unexpected errors may occur while fetching users.
 */
export const fetchUsersWithLink = async (link: string): Promise<Object> => {
  const response = await axios.get(link);
  const data = response.data;
  const {next} = parse(response.headers.link);

  return {data, next};
};
