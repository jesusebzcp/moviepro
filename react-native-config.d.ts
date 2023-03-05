type API_URL_AUTH = string;
type API_URL_MOVIE = string;
type URL_IMAGES_MOVIE = string;
type TOKEN_AUTH_MOVIE = string;
type KEY_JWT = string;

declare module 'react-native-config' {
  export const API_URL_AUTH: API_URL_AUTH;
  export const API_URL_MOVIE: API_URL_MOVIE;
  export const URL_IMAGES_MOVIE: URL_IMAGES_MOVIE;
  export const TOKEN_AUTH_MOVIE: TOKEN_AUTH_MOVIE;
  export const KEY_JWT: KEY_JWT;
}
