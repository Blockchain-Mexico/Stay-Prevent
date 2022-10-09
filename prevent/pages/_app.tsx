import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { Box, ChakraProvider, extendTheme } from "@chakra-ui/react";
import { useEffect, useState } from "react";


function MyApp({ Component, pageProps }: AppProps) {
  const [mounted, setMounted] = useState(false);

  // prevent hydration UI bug: https://blog.saeloun.com/2021/12/16/hydration.html
  useEffect(() => setMounted(true), []);
  if (!mounted) return null;

  return (
      <ChakraProvider theme={theme}>
        <Component {...pageProps} key={router.route} />
      </ChakraProvider>
  );
}

export default MyApp;
