import {AxiosResponse} from 'axios';
import {instanceMovieAxios} from '@/config/axios';

import {RequestType} from './request.type';
import type {
  MoviePopulateArgs,
  MovieSearch,
  MovieSimilarArgs,
  ResponseMoviePopulate,
} from './types';

export const getMoviePopular = ({page}: MoviePopulateArgs) =>
  instanceMovieAxios.post<
    ResponseMoviePopulate,
    AxiosResponse<ResponseMoviePopulate, MoviePopulateArgs>,
    MoviePopulateArgs
  >(RequestType.MOVIE_POPULAR + `?page=${page}`);

export const getMovieSimilar = ({id}: MovieSimilarArgs) =>
  instanceMovieAxios.get<
    ResponseMoviePopulate,
    AxiosResponse<ResponseMoviePopulate, MoviePopulateArgs>,
    MoviePopulateArgs
  >(RequestType.MOVIE_SIMILAR.replace(':id', String(id)));

export const getSearchMovie = ({search}: MovieSearch) =>
  instanceMovieAxios.get<
    ResponseMoviePopulate,
    AxiosResponse<ResponseMoviePopulate, any>,
    any
  >(`${RequestType.MOVIE_SEARCH}?query=${search}`);
