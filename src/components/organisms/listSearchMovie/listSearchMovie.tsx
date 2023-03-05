import React, {useCallback} from 'react';
import {FlatList, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import FastImage from 'react-native-fast-image';

import {NavigationProps, SCREEN_NAMES} from '@/navigation/screenNames';
import {Movie} from '@/core/slices/movies/types';

import {CONSTANTS} from '@/constants';
import {COLORS, FONTS} from '@/theme';

interface ListSearchMovieProps {
  movies: Movie[];
}

export const ListSearchMovie = ({movies}: ListSearchMovieProps) => {
  const navigation = useNavigation<NavigationProps>();
  const onSelect = useCallback(
    (movie: Movie) =>
      navigation.navigate(SCREEN_NAMES.DETAIL_SCREEN, {
        movie,
      }),
    [navigation],
  );
  return (
    <FlatList
      data={movies}
      // eslint-disable-next-line react/no-unstable-nested-components
      ItemSeparatorComponent={() => <View style={styles.separator} />}
      keyExtractor={item => String(item.id)}
      renderItem={({item}) => {
        return (
          <TouchableOpacity style={styles.card} onPress={() => onSelect(item)}>
            <FastImage
              source={{
                uri: `${CONSTANTS.URL_IMAGES_MOVIE}${item.poster_path}`,
              }}
              resizeMode={FastImage.resizeMode.cover}
              style={styles.poster_path}
            />
            <View>
              <Text numberOfLines={1} style={styles.title}>
                {item.title}
              </Text>
            </View>
          </TouchableOpacity>
        );
      }}
    />
  );
};

const styles = StyleSheet.create({
  card: {
    flexDirection: 'row',
  },
  poster_path: {
    height: 120,
    width: 95,
    borderRadius: 8,
  },
  title: {
    ...FONTS.style.bold(COLORS.white, FONTS.size.h5, 'left'),
    marginLeft: 10,
    maxWidth: '90%',
  },
  separator: {
    marginVertical: 10,
  },
});
