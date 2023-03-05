import Config from 'react-native-config';

export const CONSTANTS = {
  API_URL_AUTH: Config.API_URL_AUTH,
  API_URL_MOVIE: Config.API_URL_MOVIE,
  URL_IMAGES_MOVIE: Config.URL_IMAGES_MOVIE,
  KEY_JWT: Config.KEY_JWT,
};

export enum PATHS_AUTH {
  API_URL_AUTH = '/auth/local',
}

export const TOKEN_AUTH_MOVIE = Config.TOKEN_AUTH_MOVIE as string;
