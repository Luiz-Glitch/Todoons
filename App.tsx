import { registerRootComponent } from 'expo';
import * as Font from 'expo-font';
import * as SplashScreen from 'expo-splash-screen';
import React, { useCallback, useEffect, useState } from 'react';
import { StatusBar, View } from 'react-native';
import { ThemeProvider } from 'styled-components';

import { Routes } from './src/navigators';
import theme from './src/style/theme';

export default function App() {
  const [appIsReady, setAppIsReady] = useState(false);

  useEffect(() => {
    async function prepare() {
      try {
        await SplashScreen.preventAutoHideAsync();

        await Font.loadAsync({
          antoutline: require('@ant-design/icons-react-native/fonts/antoutline.ttf'),
        });
      } catch (e) {
        console.warn(e);
      } finally {
        setAppIsReady(true);
      }
    }

    prepare();
  }, []);

  const onLayoutRootView = useCallback(async () => {
    if (appIsReady) {
      await SplashScreen.hideAsync();
    }
  }, [appIsReady]);

  if (!appIsReady) {
    return null;
  }

  return (
    <View onLayout={onLayoutRootView} style={{ flex: 1 }}>
      <ThemeProvider theme={theme}>
        <StatusBar hidden={false} backgroundColor="#736CED" translucent={false} />
        <Routes />
      </ThemeProvider>
    </View>
  );
}

registerRootComponent(App);
