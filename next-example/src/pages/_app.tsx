import initMocks from '@mocks/initMocks';
import type { AppProps } from 'next/app';
import React from 'react';

if (process.env.NODE_ENV === 'development') {
  initMocks();
}

export default function MyApp({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />;
}
