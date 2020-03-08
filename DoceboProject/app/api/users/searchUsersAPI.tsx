import axios from 'axios';
import {SEARCH_USERS_ENDPOINT, USERS_LIST_LIMIT} from '../constants';
import parse from 'github-parse-link';

/**
 * Fetches a user with a given keyword.
 * @param {string} keyword keyword to search for
 * @param {number} limit number of users to retrieve on the first chunk
 * @returns {object} An object with:
 *          - data = Array of GitHub users,
 *          - next = link to the next chunk of users.
 * @throws Unexpected errors may occur while fetching users.
 */
export const searchUser = async (
  keyword: string,
  limit = USERS_LIST_LIMIT,
): Promise<Object> => {
  const configure = {
    params: {
      per_page: limit,
      q: keyword,
      page: 1,
    },
  };

  const {data, headers} = await axios.get(SEARCH_USERS_ENDPOINT, configure);
  const {next} = parse(headers.link);

  return {data, next};
};
