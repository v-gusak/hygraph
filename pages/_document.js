import Document, { Html, Head, Main, NextScript } from 'next/document';

class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const initialProps = await Document.getInitialProps(ctx);
    return { ...initialProps };
  }

  render() {
    return (
      <Html>
        <Head>
        </Head>
        <div className='myBase'>
        <body>
          <Main />
          <NextScript />
        </body>
        </div>
      </Html>
    );
  }
}

export default MyDocument;
