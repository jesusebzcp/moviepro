import {useAppDispatch, useAppSelector} from '@/core';
import {setLoading, setMoviePopulate} from '@/core/slices/movies';
import {getMoviePopular} from '@/core/slices/movies/actions';
import {useCallback, useEffect, useState} from 'react';
import {Alert} from 'react-native';

export const useMoviePopular = () => {
  const dispatch = useAppDispatch();
  const {loading, moviePopular} = useAppSelector(store => store.movies);

  const [page, setPage] = useState<number>(1);

  const handleFetchMovies = useCallback(async () => {
    try {
      dispatch(setLoading(true));
      const response = await getMoviePopular({page: 1});
      dispatch(setMoviePopulate(response.data.results));
    } catch (error) {
      Alert.alert(
        'Ups...',
        'Ocurrió un error al intentar obtener las películas populares',
      );
    } finally {
      dispatch(setLoading(false));
    }
  }, [dispatch]);

  const handlePagination = useCallback(async () => {
    const newPage = page + 1;

    try {
      dispatch(setLoading(true));
      const response = await getMoviePopular({page: newPage});
      dispatch(setMoviePopulate([...moviePopular, ...response.data.results]));
    } catch (error) {
      Alert.alert(
        'Ups...',
        'Ocurrió un error al intentar obtener las películas populares',
      );
    } finally {
      setPage(newPage);

      dispatch(setLoading(false));
    }
  }, [dispatch, moviePopular, page]);

  useEffect(() => {
    handleFetchMovies();
  }, [handleFetchMovies]);

  return {
    loading,
    moviePopular,
    handlePagination,
  };
};
