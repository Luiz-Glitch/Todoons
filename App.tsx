import { StatusBar } from 'react-native';
import { ThemeProvider } from 'styled-components';

import { Routes } from './src/navigators';
import theme from './src/style/theme';

export default function App() {
  return (
    <ThemeProvider theme={theme}>
      <StatusBar hidden={false} backgroundColor="#736CED" translucent={false} />
      <Routes />
    </ThemeProvider>
  );
}
