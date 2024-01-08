import { ThemeProvider } from 'styled-components';
import theme from './src/style/theme';
import { Routes } from './src/navigators';
import { StatusBar } from 'react-native';

export default function App() {
  return (
    <ThemeProvider theme={theme}>
      <StatusBar
            hidden = {false}
            backgroundColor = "#736CED"
            translucent = {false}
      />
      <Routes/>
    </ThemeProvider>
  );
}
