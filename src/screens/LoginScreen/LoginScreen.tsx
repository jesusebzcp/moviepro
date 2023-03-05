import React from 'react';
import {
  Image,
  KeyboardAvoidingView,
  Platform,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  View,
} from 'react-native';

import {Logo} from '@/assets/svg';

import {Button} from '@/components/atoms/button';
import {TextField} from '@/components/atoms/textField';
import {Container} from '@/components/organisms/container';
import {COLORS, FONTS, IMAGES, METRICS} from '@/theme';

import {useAuthentication} from '@/features/useAuthentication';

export const LoginScreen = () => {
  const {values, setValue, handleLogin, errorsForm, loading} =
    useAuthentication();

  return (
    <Container>
      <ScrollView
        style={styles.container}
        scrollEnabled={false}
        showsVerticalScrollIndicator={false}>
        <View style={styles.header}>
          <StatusBar animated barStyle={'light-content'} />
          <Image style={styles.avatarlogin} source={IMAGES.avatarlogin} />
          <Logo />
        </View>
        <KeyboardAvoidingView
          behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
          keyboardVerticalOffset={-50}>
          <Text style={styles.title}>
            {'Hola 👋  Inicia sesión para continuar'}
          </Text>
          <TextField
            value={values.email}
            label="Ingresa tu email"
            keyboardType="email-address"
            onChange={text => setValue('email', text)}
            error={errorsForm.email?.message}
            handleSubmit={handleLogin}
          />
          <TextField
            customStyles={styles.input}
            label="Ingresa tu password"
            onChange={text => setValue('password', text)}
            value={values.password}
            error={errorsForm.password?.message}
            handleSubmit={handleLogin}
            secureTextEntry
          />
          <Button
            loading={loading}
            title="Iniciar sesión"
            onPress={handleLogin}
            customsStyles={styles.button}
          />
        </KeyboardAvoidingView>
      </ScrollView>
    </Container>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: METRICS.spacingHorizontal,
    backgroundColor: COLORS.primary,
    flexGrow: 1,
  },
  avatarlogin: {
    width: METRICS.screenWidth * 0.6,
    height: METRICS.screenWidth * 0.6,
    resizeMode: 'cover',
    marginVertical: 20,
  },
  header: {
    justifyContent: 'center',
    alignItems: 'center',
    flex: 1,
    marginBottom: 10,
  },

  title: {
    ...FONTS.style.bold(COLORS.white, FONTS.size.h1, 'left'),
    marginBottom: 20,
  },
  input: {
    marginVertical: 20,
  },
  button: {
    marginTop: 20,
  },
});
