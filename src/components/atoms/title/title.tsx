import {COLORS, FONTS} from '@/theme';
import React from 'react';
import {StyleSheet, Text} from 'react-native';

interface TitleProps {
  title: string;
}

export const Title = ({title}: TitleProps) => {
  return <Text style={styles.title}>{title}</Text>;
};

const styles = StyleSheet.create({
  title: {
    ...FONTS.style.regular(COLORS.white, FONTS.size.h4, 'left'),
    marginVertical: 20,
    marginHorizontal: 20,
  },
});
