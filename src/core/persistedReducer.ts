import {combineReducers} from 'redux';
import {persistReducer} from 'redux-persist';
import AsyncStorage from '@react-native-async-storage/async-storage';

import auth from './slices/auth';
import movies from './slices/movies';

const reducers = combineReducers({
  auth,
  movies,
});

const persistConfig = {
  key: 'root',
  storage: AsyncStorage,
};

export const persistedReducer = persistReducer(persistConfig, reducers);
