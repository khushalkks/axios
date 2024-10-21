/**
 * @file axiosWrapper.js
 * @brief This module unpacks Axios default exports into named exports, preserving compatibility with ES and CommonJS modules.
 */

/**
 * @namespace axios
 * @brief Axios default export and its static properties.
 */

import axios from './lib/axios.js';

/**
 * @typedef {object} Axios
 * @brief The main Axios class.
 */

/**
 * @typedef {object} AxiosError
 * @brief Axios error object for handling errors.
 */

/**
 * @typedef {object} CanceledError
 * @brief Error thrown when a request is canceled.
 */

/**
 * @typedef {function} isCancel
 * @brief Checks if a request was canceled.
 */

/**
 * @typedef {object} CancelToken
 * @brief Cancel token to cancel Axios requests.
 */

/**
 * @typedef {string} VERSION
 * @brief Axios library version.
 */

/**
 * @typedef {function} all
 * @brief Used to handle multiple requests simultaneously (Promise.all).
 */

/**
 * @typedef {object} Cancel
 * @brief Utility to cancel requests in Axios.
 */

/**
 * @typedef {function} isAxiosError
 * @brief Function to check if an error is an Axios error.
 */

/**
 * @typedef {function} spread
 * @brief Function to spread array arguments as multiple parameters to a function.
 */

/**
 * @typedef {function} toFormData
 * @brief Converts a request payload into FormData.
 */

/**
 * @typedef {object} AxiosHeaders
 * @brief Axios headers for managing request headers.
 */

/**
 * @typedef {object} HttpStatusCode
 * @brief Collection of common HTTP status codes.
 */

/**
 * @typedef {function} formToJSON
 * @brief Converts a FormData instance into a JSON object.
 */

/**
 * @typedef {function} getAdapter
 * @brief Retrieves the adapter used by Axios for requests.
 */

/**
 * @typedef {function} mergeConfig
 * @brief Merges two Axios configuration objects.
 */

const {
  Axios,
  AxiosError,
  CanceledError,
  isCancel,
  CancelToken,
  VERSION,
  all,
  Cancel,
  isAxiosError,
  spread,
  toFormData,
  AxiosHeaders,
  HttpStatusCode,
  formToJSON,
  getAdapter,
  mergeConfig
} = axios;

export {
  axios as default,
  Axios,
  AxiosError,
  CanceledError,
  isCancel,
  CancelToken,
  VERSION,
  all,
  Cancel,
  isAxiosError,
  spread,
  toFormData,
  AxiosHeaders,
  HttpStatusCode,
  formToJSON,
  getAdapter,
  mergeConfig
};
