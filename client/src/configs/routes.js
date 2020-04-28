import {API_HOST} from "./hosts";

/**
 * API auth routes
 */

export const authApiRoutes = {
  LOGIN_ROUTE: API_HOST + '/api/users/login',
  REGISTER_ROUTE: API_HOST + '/api/users/register',
};

/**
 * API user routes
 */

export const userApiRoutes = {
  USERS_ROUTE: API_HOST + '/api/users',
  USER_ROUTE: API_HOST + '/api/users',
};
