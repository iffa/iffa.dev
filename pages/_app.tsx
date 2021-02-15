import React from 'react';
import { AppProps } from 'next/app';
import { ChakraProvider } from '@chakra-ui/react';
import { AppTheme } from '@/styles/app.theme';

function App({ Component, pageProps }: AppProps): JSX.Element {
  return (
    <ChakraProvider theme={AppTheme}>
      <Component {...pageProps} />
    </ChakraProvider>
  );
}

export default App;
