import React from 'react';
import {FlatList, StyleSheet, Text, TouchableOpacity, View} from 'react-native';

import {useNavigation} from '@react-navigation/native';
import FastImage from 'react-native-fast-image';

import {NavigationProps, SCREEN_NAMES} from '@/navigation/screenNames';
import {COLORS, FONTS, METRICS} from '@/theme';
import {Movie} from '@/core/slices/movies/types';
import {CONSTANTS} from '@/constants';

interface ListMovieSimilarProps {
  movies: Movie[] | [];
}

const SIZE = METRICS.screenWidth * 0.25;
export const ListMovieSimilar = ({movies}: ListMovieSimilarProps) => {
  const navigation = useNavigation<NavigationProps>();

  return (
    <FlatList
      style={styles.container}
      horizontal
      data={movies}
      keyExtractor={item => String(item.id)}
      renderItem={({item}) => (
        <TouchableOpacity
          style={styles.similarMovie}
          onPress={() =>
            navigation.navigate(SCREEN_NAMES.DETAIL_SCREEN, {
              movie: item,
            })
          }>
          <FastImage
            source={{
              uri: `${CONSTANTS.URL_IMAGES_MOVIE}${item.backdrop_path}`,
            }}
            resizeMode={FastImage.resizeMode.cover}
            style={styles.img}
          />
          <Text numberOfLines={2} style={styles.title}>
            {item.title}
          </Text>
        </TouchableOpacity>
      )}
      // eslint-disable-next-line react/no-unstable-nested-components
      ItemSeparatorComponent={() => <View style={styles.separator} />}
      showsHorizontalScrollIndicator={false}
    />
  );
};

const styles = StyleSheet.create({
  img: {
    height: SIZE,
    width: SIZE,
    borderRadius: 8,
  },
  container: {
    paddingHorizontal: 20,
  },
  title: {
    ...FONTS.style.regular(COLORS.white, FONTS.size.h6, 'center'),
    marginTop: 5,
  },
  similarMovie: {
    height: SIZE,
    width: SIZE,
    marginBottom: 20,
  },
  separator: {
    marginRight: 10,
  },
});
