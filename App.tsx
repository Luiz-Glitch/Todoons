import { StatusBar } from 'react-native';
import { ThemeProvider } from 'styled-components';
import { Routes } from './src/navigators';
import theme from './src/style/theme';
import MainProvider from './src/contexts/main';

export default function App() {
  return (
      <MainProvider>
          <ThemeProvider theme={theme}>
            <StatusBar hidden={false} backgroundColor="#736CED" translucent={false} />
              <Routes />
          </ThemeProvider>
      </MainProvider>
  );
}
