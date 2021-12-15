import React from 'react'
import Document, { Html, Head, Main, NextScript } from 'next/document'
// import { ServerStyleSheet } from 'styled-components'
import { ServerStyleSheet } from 'styled-components'
import { ServerStyleSheets } from '@material-ui/styles'

class MyDocument extends Document {
  static async getInitialProps (ctx) {
    const styledComponentsSheet = new ServerStyleSheet()
    const materialSheets = new ServerStyleSheets()
    const originalRenderPage = ctx.renderPage;
    try {
      ctx.renderPage = () =>
        originalRenderPage({
          enhanceApp: App => props =>
            materialSheets.collect(
              styledComponentsSheet.collectStyles(<App {...props} />)
            ),
            // styledComponentsSheet.collectStyles(
            //   materialSheets.collect(<App {...props} />),
            // ),
        })
      const initialProps = await Document.getInitialProps(ctx)
      return {
        ...initialProps,
        styles: [
          <React.Fragment key="styles">
            {initialProps.styles}
            {materialSheets.getStyleElement()}
            {styledComponentsSheet.getStyleElement()}
          </React.Fragment>,
        ],
      }
    } finally {
      styledComponentsSheet.seal()
    }
  }
  // static async getInitialProps(ctx) {
  //   const initialProps = await Document.getInitialProps(ctx)
  //   return { ...initialProps }
  // }
  // static async getInitialProps(ctx) {
  //   const sheet = new ServerStyleSheet()
  //   const originalRenderPage = ctx.renderPage

  //   try {
  //     ctx.renderPage = () =>
  //       originalRenderPage({
  //         enhanceApp: (App) => (props) =>
  //           sheet.collectStyles(<App {...props} />),
  //       })

  //     const initialProps = await Document.getInitialProps(ctx)
  //     return {
  //       ...initialProps,
  //       styles: (
  //         <>
  //           {initialProps.styles}
  //           {sheet.getStyleElement()}
  //         </>
  //       ),
  //     }
  //   } finally {
  //     sheet.seal()
  //   }
  // }

  render() {
    return (
      <Html>
        <Head />
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}

export default MyDocument