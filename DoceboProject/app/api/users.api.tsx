import axios from 'axios';
import {
  LIST_USERS_ENDPOINT,
  SEARCH_USERS_ENDPOINT,
  USERS_LIST_LIMIT,
  USER_REPOSITORY_ENDPOINT,
} from './constants';
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

  const response = await axios.get(LIST_USERS_ENDPOINT, configure);
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
export const fetchMoreWithLink = async (link: string): Promise<Object> => {
  const {data, headers} = await axios.get(link);
  const {next} = parse(headers.link);

  return {data, next};
};

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

/**
 * Fetches the repository list of the user with a given username.
 *
 * @param {string} username username to search
 * @returns {object}
 * @throws Unexpected errors may occur while fetching users.
 */
export const fetchUserRepositories = async (
  username: string,
): Promise<Object> => {
  const getUserEndpoint = `${LIST_USERS_ENDPOINT}/${username}${USER_REPOSITORY_ENDPOINT}`;

  const {data, headers} = await axios.get(getUserEndpoint);
  const {next} = parse(headers.link);
  return {data, next};
};
