import { View } from 'react-native';

import { Home } from './src/screens/Home';

import { ThemeProvider } from 'styled-components';
import theme from './src/style/theme';

export default function App() {
  return (
    <ThemeProvider theme={theme}>
      <Home />
    </ThemeProvider>
  );
}
