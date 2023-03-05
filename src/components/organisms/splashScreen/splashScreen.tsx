import React from 'react';
import {StyleSheet, View} from 'react-native';
import Lottie from 'lottie-react-native';

import {Container} from '@/components/organisms/container';

import {METRICS} from '@/theme';

interface SplashScreenProps {
  onFinisher: () => void;
}

const SIZE = METRICS.screenWidth * 0.4;

export const SplashScreen = ({onFinisher}: SplashScreenProps) => {
  return (
    <Container>
      <View style={styles.container}>
        <Lottie
          source={require('../../../assets/animations/splash.json')}
          autoPlay
          style={styles.lottie}
          onAnimationFinish={onFinisher}
          loop={false}
        />
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
  lottie: {
    width: SIZE,
    height: SIZE,
  },
});
