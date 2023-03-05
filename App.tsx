import React, {useState} from 'react';
import {Provider} from 'react-redux';
import {PersistGate} from 'redux-persist/integration/react';
import {persistStore} from 'redux-persist';
import {store} from './src/core';
import {StackNavigator} from './src/navigation';
import {SplashScreen} from './src/components/organisms/splashScreen';

const persistor = persistStore(store);

export default function App() {
  const [loader, setLoader] = useState(true);
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        {loader ? (
          <SplashScreen onFinisher={() => setLoader(false)} />
        ) : (
          <StackNavigator />
        )}
      </PersistGate>
    </Provider>
  );
}
