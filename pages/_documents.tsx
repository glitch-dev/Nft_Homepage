import * as React from 'react';
import Document, { Html, Head, Main, NextScript } from 'next/document';
import { ServerStyleSheet } from 'styled-components';
// import Favicon from '../component/Favicon';

export default class MyDocument extends Document {
  render() {
    return (
      <Html lang="ko">
        <Head>
          <link rel="shortcut icon" href="/images/favicon/favicon.png" />
          {/* <Favicon /> */}
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

MyDocument.getInitialProps = async ctx => {
  const originalRenderPage = ctx.renderPage;
  const sheet = new ServerStyleSheet();

  ctx.renderPage = () =>
    originalRenderPage({
      enhanceApp: (App: any) =>
        function EnhanceApp(props) {
          //wrap app by sheet.collectStyles because of styledcomponents
          return sheet.collectStyles(<App {...props} />);
        },
    });

  const initialProps = await Document.getInitialProps(ctx);
  const styleElem = sheet.getStyleElement();

  return {
    ...initialProps,
    styleElem,
  };
};
