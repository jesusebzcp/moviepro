import React, {useMemo} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {RouteProp, useRoute} from '@react-navigation/native';
import FastImage from 'react-native-fast-image';

import {RootStackParamList, SCREEN_NAMES} from '@/navigation/screenNames';
import {useMovieSimilar} from '@/features/useMovieSimilar';
import {Container} from '@/components/organisms/container';

import {Header} from '@/components/molecules/header';

import {CONSTANTS} from '@/constants';
import {StarSvg} from '@/assets/svg';
import {COLORS, FONTS, METRICS} from '@/theme';
import {DetailMovieBanner} from '@/components/molecules/detailMovieBanner';
import {ListMovieSimilar} from '@/components/organisms/listMovieSimilar';
import {Title} from '@/components/atoms/title';
import {Loader} from '@/components/organisms/loader';

const HEIGHT_HERO = METRICS.screenHeight * 0.3;
const WIDTH_HERO = METRICS.screenWidth;
const HEIGHT_POSTER = 120;
const WIDTH_POSTER = 95;

export const DetailScreen = ({}) => {
  const route = useRoute<
    RouteProp<
      {
        params: RootStackParamList[SCREEN_NAMES.DETAIL_SCREEN];
      },
      'params'
    >
  >();

  const {movie} = route.params;
  const {movieSimilar, loading} = useMovieSimilar({
    id: movie.id,
  });

  const poster_path = useMemo(
    () => `${CONSTANTS.URL_IMAGES_MOVIE}${movie.poster_path}`,
    [movie.poster_path],
  );
  const backdrop_path = useMemo(
    () => `${CONSTANTS.URL_IMAGES_MOVIE}${movie.backdrop_path}`,
    [movie.backdrop_path],
  );

  if (loading) {
    return <Loader />;
  }

  return (
    <Container>
      <View style={styles.container}>
        <View style={styles.superior}>
          <View style={styles.header}>
            <Header title={'Detalle'} isBack />
          </View>
          <View style={styles.hero}>
            <FastImage
              source={{
                uri: backdrop_path,
              }}
              resizeMode={FastImage.resizeMode.cover}
              style={styles.backdrop_path}
            />
            <FastImage
              source={{
                uri: poster_path,
              }}
              resizeMode={FastImage.resizeMode.cover}
              style={styles.poster_path}
            />
            <View style={styles.vote_average}>
              <StarSvg />
              <Text style={styles.vote_average_text}>{movie.vote_average}</Text>
            </View>
          </View>
          <Text style={styles.title}>{movie.title}</Text>
          <View style={styles.containMeta}>
            <DetailMovieBanner year={movie.release_date} />
            <Text numberOfLines={5} style={styles.overview}>
              {movie.overview}
            </Text>
          </View>
        </View>
        {movieSimilar.length > 0 && (
          <View style={styles.containerSimilarMovie}>
            <Title title="Similares" />
            <ListMovieSimilar movies={movieSimilar} />
          </View>
        )}
      </View>
    </Container>
  );
};

const styles = StyleSheet.create({
  header: {
    paddingHorizontal: METRICS.spacingHorizontal,
  },
  hero: {
    maxHeight: HEIGHT_HERO,
  },
  backdrop_path: {
    width: WIDTH_HERO,
    height: HEIGHT_HERO,
    borderBottomRightRadius: 20,
    borderBottomLeftRadius: 20,
  },
  poster_path: {
    position: 'absolute',
    height: HEIGHT_POSTER,
    width: WIDTH_POSTER,
    left: WIDTH_POSTER * 0.2,
    bottom: -HEIGHT_POSTER / 2,
    borderRadius: 8,
  },
  vote_average: {
    backgroundColor: COLORS.primary,
    position: 'absolute',
    right: 20,
    bottom: 20,
    padding: 10,
    borderRadius: 8,
    flexDirection: 'row',
  },
  vote_average_text: {
    ...FONTS.style.bold(COLORS.start, FONTS.size.h6, 'center'),
    marginLeft: 5,
  },
  title: {
    ...FONTS.style.bold(COLORS.white, FONTS.size.h2, 'left'),
    marginLeft: WIDTH_POSTER * 1.4,
    marginTop: 20,
  },
  containMeta: {
    paddingHorizontal: METRICS.spacingHorizontal,
    marginTop: HEIGHT_POSTER * 0.3,
  },
  overview: {
    ...FONTS.style.regular(COLORS.start, FONTS.size.h6, 'center'),
    marginTop: 20,
    lineHeight: 20,
    maxHeight: '100%',
  },
  container: {
    justifyContent: 'space-between',
    flex: 1,
  },
  superior: {
    flex: 3,
  },
  containerSimilarMovie: {
    flex: 1.2,
    paddingBottom: 20,
  },
});
