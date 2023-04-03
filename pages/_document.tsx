import React from 'react'
import Document, { Head, Html, Main, NextScript } from 'next/document'

export default class MyDocument extends Document {
  public static async getInitialProps(ctx: any) {
    const initialProps = await Document.getInitialProps(ctx)

    return { ...initialProps }
  }

  public render() {
    return (
      <Html>
        <Head>
          <meta charSet="utf-8" />
          <meta property="og:type" content="website" />
          <meta content="summary_large_image" name="twitter:card" />
          <link rel="icon" type="image/x-icon" href="/static/favicon.ico" />
          <meta content="https://athenna.io/static/og.jpg" property="og:image"/>
          <meta content="João Lenon &amp;" name="author" />
        </Head>
        <body className="drac-scrollbar-grey">
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}
