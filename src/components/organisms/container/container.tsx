import React from 'react';
import {SafeAreaView, StatusBar, StyleSheet, View} from 'react-native';
import {COLORS} from '../../../theme';

export const Container = ({
  children,
}: {
  children: JSX.Element | JSX.Element[];
}) => {
  return (
    <View style={styles.container}>
      <StatusBar
        backgroundColor={COLORS.primary}
        animated
        barStyle={'light-content'}
      />
      <SafeAreaView style={styles.container}>{children}</SafeAreaView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.primary,
    paddingTop: 5,
  },
});
