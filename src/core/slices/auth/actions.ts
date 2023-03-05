import {AxiosResponse} from 'axios';
import {PATHS_AUTH} from '@/constants';
import {instanceAuthAxios} from '@/config/axios';

import {AuthResponse, LoginArgs} from './types';

export const loginRequest = (args: LoginArgs) =>
  instanceAuthAxios.post<any, AxiosResponse<AuthResponse, any>, LoginArgs>(
    PATHS_AUTH.API_URL_AUTH,
    args,
  );
