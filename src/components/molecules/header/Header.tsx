import React, {PropsWithChildren} from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import {useNavigation} from '@react-navigation/native';

import {COLORS, FONTS} from '@/theme';
import {SvgBack} from '@/assets/svg/svgBack';
import {NavigationProps} from '@/navigation/screenNames';

interface HeaderProps extends PropsWithChildren {
  title: string;
  isBack?: boolean;
}

export const Header = ({title, isBack = false, children}: HeaderProps) => {
  const navigation = useNavigation<NavigationProps>();
  return (
    <View style={styles.container}>
      <TouchableOpacity
        onPress={() => navigation.goBack()}
        style={styles.back}
        disabled={!isBack}>
        {isBack ? (
          <>
            <SvgBack />
            <Text style={styles.textBack}>{'Volver'}</Text>
          </>
        ) : null}
      </TouchableOpacity>

      <View style={styles.center}>
        <Text style={styles.title}>{title}</Text>
      </View>
      <View style={styles.rightContent}>{children}</View>
    </View>
  );
};

const styles = StyleSheet.create({
  header: {},
  title: {
    ...FONTS.style.bold(COLORS.white, FONTS.size.h3, 'center'),
  },
  center: {
    flex: 2,
  },
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    minHeight: 50,
  },
  back: {
    flexDirection: 'row',
    alignItems: 'center',
    flex: 1,
    minHeight: 46,
  },
  textBack: {
    ...FONTS.style.regular(COLORS.white, FONTS.size.h6, 'center'),
  },
  rightContent: {
    flex: 1,
    alignItems: 'flex-end',
  },
});
