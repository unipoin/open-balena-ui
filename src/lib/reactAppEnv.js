export default {
  REACT_APP_OPEN_BALENA_POSTGREST_URL : process?.env?.REACT_APP_OPEN_BALENA_POSTGREST_URL || window.env?.REACT_APP_OPEN_BALENA_POSTGREST_URL,
  REACT_APP_OPEN_BALENA_REMOTE_URL : process?.env?.REACT_APP_OPEN_BALENA_REMOTE_URL || window.env?.REACT_APP_OPEN_BALENA_REMOTE_URL,
  REACT_APP_OPEN_BALENA_API_URL : process?.env?.REACT_APP_OPEN_BALENA_API_URL || window.env?.REACT_APP_OPEN_BALENA_API_URL,
  REACT_APP_OPEN_BALENA_API_VERSION : process?.env?.REACT_APP_OPEN_BALENA_API_VERSION || window.env?.REACT_APP_OPEN_BALENA_API_VERSION,
  REACT_APP_BANNER_IMAGE : process?.env?.REACT_APP_BANNER_IMAGE || window.env?.REACT_APP_BANNER_IMAGE,
  REACT_APP_OPEN_BALENA_UI_URL : process?.env?.REACT_APP_OPEN_BALENA_UI_URL || window.env?.REACT_APP_OPEN_BALENA_UI_URL,
}