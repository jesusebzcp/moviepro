import React, {useMemo} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {RouteProp, useRoute} from '@react-navigation/native';

import {ListSearchMovie} from '@/components/organisms/listSearchMovie';
import {RootStackParamList, SCREEN_NAMES} from '@/navigation/screenNames';
import {Container} from '@/components/organisms/container';

import {Header} from '@/components/molecules/header';

import {useSearch} from '@/features/useSearch';

import {COLORS, FONTS, METRICS} from '@/theme';

export const SearchScreen = () => {
  const {movieSearch} = useSearch();
  const route = useRoute<
    RouteProp<
      {
        params: RootStackParamList[SCREEN_NAMES.SEARCH_SCREEN];
      },
      'params'
    >
  >();

  const search = useMemo(
    () => route.params.searchValue,
    [route.params.searchValue],
  );

  return (
    <Container>
      <View style={styles.container}>
        <Header isBack title={`Buscar: ${search}`} />
        <Text
          style={
            styles.result
          }>{`Resultados total: ${movieSearch.length}`}</Text>
        <ListSearchMovie movies={movieSearch} />
      </View>
    </Container>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: METRICS.separatorHorizontal,
    flex: 1,
    marginVertical: 20,
  },
  result: {
    ...FONTS.style.medium(COLORS.secondary, FONTS.size.h2, 'center'),
    marginVertical: 10,
  },
});
