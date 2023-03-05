import {CONSTANTS, TOKEN_AUTH_MOVIE} from '@/constants';
import axios from 'axios';
export const instanceMovieAxios = axios.create({
  baseURL: CONSTANTS.API_URL_MOVIE,
  headers: {
    ['Authorization']: `Bearer ${TOKEN_AUTH_MOVIE}`,
    'Content-Type': 'application/json;charset=utf-8',
  },
});

instanceMovieAxios.interceptors.response.use(res => {
  return res;
});
