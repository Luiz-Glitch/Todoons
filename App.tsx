import { ThemeProvider } from 'styled-components';
import theme from './src/style/theme';
import { Routes } from './src/navigators';

export default function App() {
  return (
    <ThemeProvider theme={theme}>
      <Routes/>
    </ThemeProvider>
  );
}
