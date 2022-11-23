import type { AppProps } from 'next/app';
import React from 'react';
import Head from 'next/head';
import { DefaultSeo } from 'next-seo';
import { GlobalStyle } from '../styles/globalStyle';

const DEFAULT_SEO = {
  title: 'GLITCH STUDIO',
  description: '글리치 스튜디오 NFT 페이지입니다.',
  keyword:
    '글리치 스튜디오, Glitch Studio, 블럭체인, blockchain, NFT, P2E, 암호화폐, cryptocurrency, 전자지갑, 암호화폐 지갑, cryptocurrency wallet, 거래소, trading, 암호화폐 거래소, cryptocurrency trading',
  canonical: 'https://nft.glitch.co.kr',
  openGraph: {
    type: 'website',
    locale: 'ko_KR',
    url: 'https://nft.glitch.co.kr',
    title: 'GLITCH STUDIO Co. Ltd',
    site_name: 'GLITCH STUDIO',
    images: [
      {
        url: 'https://nft.glitch.co.kr/images/company_logo.png',
        width: 200,
        height: 40,
        alt: 'company-logo',
      },
    ],
  },
};

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/images/favicon/favicon.png" />
      </Head>
      <GlobalStyle />
      <React.Fragment>
        <DefaultSeo {...DEFAULT_SEO} />
      </React.Fragment>
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
