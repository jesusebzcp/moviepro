import {Movie} from '@/core/slices/movies/types';

export enum SCREEN_NAMES {
  LOGIN_SCREEN = 'LOGIN_SCREEN',
  HOME_SCREEN = 'HOME_SCREEN',
  DETAIL_SCREEN = 'DETAIL_SCREEN',
  SEARCH_SCREEN = 'SEARCH_SCREEN',
}

export type RootStackParamList = {
  [SCREEN_NAMES.LOGIN_SCREEN]: undefined;
  [SCREEN_NAMES.HOME_SCREEN]: undefined;
  [SCREEN_NAMES.DETAIL_SCREEN]: {movie: Movie};
  [SCREEN_NAMES.SEARCH_SCREEN]: {searchValue?: string};
};

export type NavigationProps = {
  navigate: (value: string, params?: any) => void;
  goBack: () => void;
  dispatch: (value: any) => void;
};
