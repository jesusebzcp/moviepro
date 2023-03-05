import React from 'react';
import {StyleSheet, TouchableOpacity, View} from 'react-native';

import {ListMoviePopular} from '@/components/organisms/listMoviePopular';

import {Container} from '@/components/organisms/container';
import {TextField} from '@/components/atoms/textField';
import {Header} from '@/components/molecules/header';
import {Button} from '@/components/atoms/button';
import {SvgSearch} from '@/assets/svg/svgSearch';
import {Title} from '@/components/atoms/title';

import {useMoviePopular} from '@/features/useMoviePopular';
import {useSearch} from '@/features/useSearch';

import {useAuthentication} from '@/features/useAuthentication';

import {METRICS} from '@/theme';
import {SvgSingOut} from '@/assets/svg';

export const HomeScreen = () => {
  const {searchValue, setSearchValue, handleSearch} = useSearch();
  const {moviePopular, handlePagination} = useMoviePopular();
  const {handleSingOut} = useAuthentication();

  return (
    <Container>
      <View style={styles.content}>
        <Header title={'Movie PRO'}>
          <TouchableOpacity onPress={handleSingOut}>
            <SvgSingOut />
          </TouchableOpacity>
        </Header>
        <TextField
          returnKeyType={'search'}
          customStyles={styles.search}
          label={'Buscar películas'}
          value={searchValue}
          onChange={setSearchValue}
          rightChildren={
            <Button
              customsStyles={styles.buttonSearch}
              title="Buscar"
              onPress={handleSearch}>
              <SvgSearch />
            </Button>
          }
          handleSubmit={handleSearch}
        />
      </View>
      <Title title="Populares" />
      <ListMoviePopular
        onRefreshPagination={handlePagination}
        data={moviePopular}
      />
    </Container>
  );
};

const styles = StyleSheet.create({
  content: {
    paddingHorizontal: METRICS.spacingHorizontal,
  },
  buttonSearch: {
    height: 36,
  },
  search: {
    marginTop: 15,
  },
});
