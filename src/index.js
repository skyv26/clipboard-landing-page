import ReactDOM from 'react-dom/client';
import { ChakraProvider, extendTheme } from '@chakra-ui/react';
import { Helmet, HelmetProvider } from 'react-helmet-async';
import App from './App';

const breakpoints = {
  base: '0px',
  sm: '320px',
  md: '768px',
  lg: '960px',
  xl: '1200px',
  '2xl': '1366px',
  '3xl': '1536px',
};

const theme = extendTheme({
  breakpoints,
  styles: {
    global: {
      body: {
        fontFamily: 'Bai Jamjuree, sans-serif',
      },
    },
  },
  colors: {
    primary: {
      900: 'hsla(210, 10%, 33%, 1)',
    },
    secondary: {
      900: 'hsla(201, 11%, 66%, 1)',
    },
    buttonPrimary: {
      900: 'hsl(171, 66%, 44%)',
    },
    buttonSecondary: {
      900: 'hsl(233, 100%, 69%)',
    },
  },
});

const helmetContext = {};

ReactDOM.createRoot(document.getElementById('root')).render(
  <HelmetProvider context={helmetContext}>
    <ChakraProvider theme={theme}>
      <Helmet>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin />
        <link href="https://fonts.googleapis.com/css2?family=Bai+Jamjuree:wght@400;600&display=swap" rel="stylesheet" />
      </Helmet>
      <App />
    </ChakraProvider>
  </HelmetProvider>,
);
