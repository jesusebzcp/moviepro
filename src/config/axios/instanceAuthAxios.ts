import axios, {AxiosError} from 'axios';
import {CONSTANTS} from '../../constants';

export const instanceAuthAxios = axios.create({
  baseURL: CONSTANTS.API_URL_AUTH,
});

instanceAuthAxios.interceptors.request.use(async req => {
  return req;
});

instanceAuthAxios.interceptors.response.use(
  res => {
    return res;
  },
  async (error: AxiosError) => {
    console.error('url:error', error.config?.url);
    return error;
  },
);
