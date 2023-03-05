import React from 'react';
import {FlatList, StyleSheet, View} from 'react-native';

import {CardHorizontalMovie} from '@/components/molecules/cardHorizontalMovie';
import type {Movie} from '@/core/slices/movies/types';
import {COLORS, METRICS} from '@/theme';

const WIDTH = METRICS.screenHeight * 0.3;
const HEIGHT = METRICS.screenWidth * 0.8;

interface ListMoviePopularProps {
  data: [] | Movie[];
  onRefreshPagination: () => void;
}

export const ListMoviePopular = ({
  data,
  onRefreshPagination,
}: ListMoviePopularProps) => {
  const _getItemLayoutImage = (_, index: number) => ({
    length: WIDTH,
    offset: WIDTH * index,
    index,
  });

  return (
    <FlatList
      horizontal
      data={data}
      // eslint-disable-next-line react/no-unstable-nested-components
      ItemSeparatorComponent={() => <View style={styles.separator} />}
      showsHorizontalScrollIndicator={false}
      style={styles.container}
      bounces
      alwaysBounceHorizontal={false}
      bouncesZoom={false}
      snapToAlignment={'start'}
      decelerationRate={'fast'}
      onEndReachedThreshold={1.5}
      onEndReached={onRefreshPagination}
      keyExtractor={item => String(item.id)}
      getItemLayout={_getItemLayoutImage}
      // eslint-disable-next-line react/no-unstable-nested-components
      ListFooterComponent={() => (
        <View style={styles.contentLoader}>
          {[1, 2, 3].map(id => {
            return <View key={id} style={styles.load} />;
          })}
        </View>
      )}
      renderItem={({item}) => {
        return <CardHorizontalMovie {...item} />;
      }}
    />
  );
};

const styles = StyleSheet.create({
  separator: {
    marginHorizontal: METRICS.separatorHorizontal,
  },
  container: {
    paddingLeft: METRICS.separatorHorizontal,
  },
  contentLoader: {
    flexDirection: 'row',
    alignItems: 'center',
    marginHorizontal: 20,
  },
  load: {
    height: HEIGHT,
    width: WIDTH,
    backgroundColor: COLORS.secondary,
    marginRight: 10,
    borderRadius: 8,
  },
});
