import { AppProps } from 'next/app';
import Head from 'next/head';
import '../styles/styles.css';
import { LayoutUi } from '@tests/layout/ui';

function CustomApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>Welcome to events!</title>
      </Head>
      <LayoutUi>
        <Component {...pageProps} />
      </LayoutUi>
    </>
  );
}

export default CustomApp;
