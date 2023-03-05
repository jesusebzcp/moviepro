import {useAppDispatch, useAppSelector} from '@/core';
import {setLoading, setMovieSimilar} from '@/core/slices/movies';
import {getMovieSimilar} from '@/core/slices/movies/actions';
import {useCallback, useEffect} from 'react';

interface MovieSimilarProps {
  id?: number;
}

export const useMovieSimilar = ({id}: MovieSimilarProps) => {
  const dispatch = useAppDispatch();
  const {loading, movieSimilar} = useAppSelector(store => store.movies);
  const handleFetchMovies = useCallback(async () => {
    try {
      dispatch(setLoading(true));
      if (id) {
        const response = await getMovieSimilar({id});
        dispatch(setMovieSimilar(response.data.results));
      }
    } catch (error) {
      console.log('error', error);
    } finally {
      dispatch(setLoading(false));
    }
  }, [dispatch, id]);

  useEffect(() => {
    handleFetchMovies();
  }, [handleFetchMovies]);
  return {
    movieSimilar,
    loading,
  };
};
