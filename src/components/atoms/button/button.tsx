import React, {PropsWithChildren} from 'react';
import {
  ActivityIndicator,
  StyleSheet,
  Text,
  TouchableOpacity,
  ViewStyle,
} from 'react-native';
import {COLORS, FONTS} from '@/theme';

interface ButtonProps extends PropsWithChildren {
  title?: string;
  customsStyles?: ViewStyle;
  onPress: () => void;
  loading?: boolean;
}

export const Button = ({
  title,
  customsStyles = {},
  onPress,
  loading = false,
  children,
}: ButtonProps) => {
  return (
    <TouchableOpacity
      disabled={loading}
      style={[styles.button, customsStyles]}
      onPress={onPress}>
      {children ? (
        children
      ) : (
        <>
          {loading ? (
            <ActivityIndicator color={COLORS.primary} />
          ) : (
            <Text
              style={FONTS.style.medium(
                COLORS.primary,
                FONTS.size.h4,
                'center',
              )}>
              {title}
            </Text>
          )}
        </>
      )}
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    height: 56,
    backgroundColor: COLORS.blue,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 8,
    shadowColor: COLORS.white,
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
    paddingHorizontal: 10,
  },
});
