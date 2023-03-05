import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import {useAppSelector} from '@/core';

import {LoginScreen} from '@/screens/LoginScreen';
import {HomeScreen} from '@/screens/HomeScreen';
import {DetailScreen} from '@/screens/DetailScreen';

import {SCREEN_NAMES} from '../screenNames';
import {SearchScreen} from '@/screens/SearchScreen';

const Stack = createNativeStackNavigator();

export const StackNavigator = () => {
  const {user} = useAppSelector(state => state.auth);

  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
        }}>
        {user ? (
          <>
            <Stack.Screen
              name={SCREEN_NAMES.HOME_SCREEN}
              component={HomeScreen}
            />
            <Stack.Screen
              name={SCREEN_NAMES.DETAIL_SCREEN}
              component={DetailScreen}
            />
            <Stack.Screen
              name={SCREEN_NAMES.SEARCH_SCREEN}
              component={SearchScreen}
            />
          </>
        ) : (
          <Stack.Screen
            name={SCREEN_NAMES.LOGIN_SCREEN}
            component={LoginScreen}
          />
        )}
      </Stack.Navigator>
    </NavigationContainer>
  );
};
