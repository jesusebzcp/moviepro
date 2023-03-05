import React from 'react';
import {ActivityIndicator, StyleSheet, View} from 'react-native';
import {COLORS} from '@/theme';

import {Container} from '../container';

export const Loader = () => {
  return (
    <Container>
      <View style={styles.container}>
        <ActivityIndicator color={COLORS.white} />
      </View>
    </Container>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
