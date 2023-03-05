import {StarSvg, SvgCalendar} from '@/assets/svg';
import {CONSTANTS, TOKEN_AUTH_MOVIE} from '@/constants';
import {Movie} from '@/core/slices/movies/types';
import {NavigationProps, SCREEN_NAMES} from '@/navigation/screenNames';
import {COLORS, FONTS, METRICS} from '@/theme';
import {useNavigation} from '@react-navigation/native';
import React, {useCallback, useMemo} from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import FastImage from 'react-native-fast-image';

const WIDTH = METRICS.screenHeight * 0.3;
const HEIGHT = METRICS.screenWidth * 0.8;

interface CardHorizontalMovieProps extends Movie {}

export const CardHorizontalMovie = (props: CardHorizontalMovieProps) => {
  const {poster_path, title, release_date, overview, vote_average} = props;
  const navigation = useNavigation<NavigationProps>();

  const toDetail = useCallback(
    () =>
      navigation.navigate(SCREEN_NAMES.DETAIL_SCREEN, {
        movie: props,
      }),
    [navigation, props],
  );

  const url = useMemo(
    () => `${CONSTANTS.URL_IMAGES_MOVIE}${poster_path}`,
    [poster_path],
  );

  return (
    <TouchableOpacity style={styles.card} onPress={toDetail}>
      <FastImage
        source={{
          uri: url,
          headers: {Authorization: TOKEN_AUTH_MOVIE},
        }}
        resizeMode={FastImage.resizeMode.cover}
        style={styles.img}
      />
      <View style={styles.start}>
        <StarSvg />
        <Text style={styles.vote_average}>{vote_average}</Text>
      </View>
      <View style={styles.contentInformation}>
        <Text style={styles.title}>{title}</Text>

        <View style={styles.item}>
          <SvgCalendar />
          <Text style={styles.date}>{release_date}</Text>
        </View>

        <Text numberOfLines={1} style={styles.overview}>
          {' '}
          {overview}
        </Text>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  img: {
    height: HEIGHT,
    width: WIDTH,
    borderRadius: 8,
  },
  position: {
    ...FONTS.style.bold(COLORS.white, FONTS.size.title, 'center'),
    position: 'absolute',
    borderColor: COLORS.blue,
    left: -WIDTH * 0.1,
    bottom: -HEIGHT * 0.35,
  },
  card: {
    maxHeight: WIDTH,
  },
  contentInformation: {
    alignSelf: 'center',
    marginTop: 10,
    maxWidth: WIDTH,
  },
  title: {
    ...FONTS.style.bold(COLORS.white, FONTS.size.h2, 'left'),
  },
  date: {
    ...FONTS.style.bold(COLORS.white, FONTS.size.h5, 'left'),
    marginHorizontal: 5,
    marginVertical: 5,
  },
  overview: {
    ...FONTS.style.regular(COLORS.white, FONTS.size.h6, 'left'),
  },
  vote_average: {
    ...FONTS.style.regular(COLORS.start, FONTS.size.h6, 'left'),
    marginLeft: 5,
  },
  start: {
    flexDirection: 'row',
    position: 'absolute',
    right: 10,
    top: 10,
    backgroundColor: COLORS.primary,
    padding: 10,
    borderRadius: 6,
  },
  item: {
    flexDirection: 'row',
    alignItems: 'center',
  },
});
