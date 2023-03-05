import {SvgEye} from '@/assets/svg/svgEye';
import {SvgEyeOff} from '@/assets/svg/svgEyeOff';
import React, {useMemo, useState} from 'react';
import {
  TextInput,
  View,
  StyleSheet,
  ViewStyle,
  KeyboardType,
  Text,
  ReturnKeyTypeOptions,
  TouchableOpacity,
} from 'react-native';
import {COLORS, FONTS} from '../../../theme';

interface TextFieldProps {
  label: string;
  customStyles?: ViewStyle;
  keyboardType?: KeyboardType;
  autoFocus?: boolean;
  value: string;
  error?: string;
  onChange: (value: string) => void;
  rightChildren?: JSX.Element;
  handleSubmit?: () => void;
  returnKeyType?: ReturnKeyTypeOptions;
  secureTextEntry?: boolean;
}

export const TextField = ({
  label,
  customStyles = {},
  keyboardType,
  autoFocus = false,
  value,
  onChange,
  error = '',
  rightChildren,
  handleSubmit,
  returnKeyType,
  secureTextEntry = false,
}: TextFieldProps) => {
  const [showPassword, setShowPassword] = useState(secureTextEntry);

  const isError = useMemo(() => !!error.trim(), [error]);

  return (
    <>
      <View
        style={[
          styles.containerInput,
          customStyles,
          isError ? styles.error : {},
        ]}>
        <TextInput
          autoFocus={autoFocus}
          placeholder={label}
          selectionColor={COLORS.primary}
          style={styles.input}
          cursorColor={COLORS.primary}
          placeholderTextColor={COLORS.placeholder}
          keyboardType={keyboardType}
          onChangeText={onChange}
          value={value}
          onSubmitEditing={handleSubmit}
          keyboardAppearance={'dark'}
          returnKeyType={returnKeyType}
          secureTextEntry={showPassword}
        />
        {isError ? <Text style={styles.textError}>{error}</Text> : null}
        <View style={styles.rightChildren}>
          {secureTextEntry ? (
            <TouchableOpacity
              style={styles.eyeButton}
              onPress={() => setShowPassword(prev => !prev)}>
              {showPassword ? <SvgEye /> : <SvgEyeOff />}
            </TouchableOpacity>
          ) : (
            rightChildren
          )}
        </View>
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  containerInput: {
    height: 56,
    backgroundColor: COLORS.secondary,
    borderRadius: 8,
    position: 'relative',
  },
  input: {
    height: 56,
    paddingHorizontal: 20,
    color: COLORS.white,
  },
  error: {
    borderWidth: 1,
    borderColor: COLORS.error,
  },
  textError: {
    ...FONTS.style.regular(COLORS.error, FONTS.size.h6, 'right'),
  },
  rightChildren: {
    position: 'absolute',
    right: 10,
    top: 9,
  },
  eyeButton: {
    height: 38,
    justifyContent: 'center',
  },
});
