import {useCallback, useState} from 'react';
import {useNavigation} from '@react-navigation/native';

import {NavigationProps, SCREEN_NAMES} from '@/navigation/screenNames';

import {useAppDispatch, useAppSelector} from '@/core';
import {setLoading, setMovieSearch} from '@/core/slices/movies';
import {getSearchMovie} from '@/core/slices/movies/actions';
import {Alert} from 'react-native';

export const useSearch = () => {
  const navigation = useNavigation<NavigationProps>();

  const dispatch = useAppDispatch();
  const {loading, movieSearch} = useAppSelector(selector => selector.movies);
  const [searchValue, setSearchValue] = useState('');

  const handleFindMovie = useCallback(async () => {
    try {
      dispatch(setLoading(true));
      const response = await getSearchMovie({
        search: searchValue,
      });
      dispatch(setMovieSearch(response.data.results));
    } catch (error) {
      Alert.alert(
        'Ups...',
        'Ocurrió un error al intentar obtener las películas populares',
      );
    } finally {
      dispatch(setLoading(false));
    }
  }, [dispatch, searchValue]);

  const handleSearch = useCallback(
    () =>
      !!searchValue.trim() &&
      handleFindMovie().then(() => {
        setSearchValue('');
        navigation.navigate(SCREEN_NAMES.SEARCH_SCREEN, {
          searchValue,
        });
      }),

    [handleFindMovie, navigation, searchValue],
  );

  return {
    loading,
    searchValue,
    movieSearch,
    setSearchValue,
    handleSearch,
    handleFindMovie,
  };
};
