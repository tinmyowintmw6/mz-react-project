import React from 'react'
import dynamic from 'next/dynamic'
// import Layout from '../layouts/layout'
import { DefaultSeo } from 'next-seo'
import SEO from 'next-seo.config'
import { Provider } from 'react-redux'
import { useStore } from 'store/reducer'
import { AuthProvider } from "../components/auth-provider/auth-provider"
import { AuthGuard } from '../components/auth-provider/auth-guard'
import { CacheProvider } from '@emotion/react';
import createCache from '@emotion/cache';
import { StylesProvider } from '@material-ui/styles';
import { CssBaseline } from '@material-ui/core'
import Components from "src/components"
// const Layout = dynamic(() => import('../layouts/layout'))
// import { GlobalStyle } from 'src/styles/components'
const LayoutComponent = dynamic(() => import('../layouts/layout'), { loading: () => <Components.Loading />, });
// Client-side cache, shared for the whole session of the user in the browser.
const clientSideEmotionCache = createCache({ key: 'css' });
// const clientSideEmotionCache = () => {
//   const cache = createCache({ key: 'css'});
//   cache.compat = true;
//   return cache;
// }

function MyApp({ Component, pageProps }) {
  const store = useStore(pageProps.initialReduxState)
  React.useEffect(() => {
    // Remove the server-side injected CSS.
    const jssStyles = document.querySelector('#jss-server-side');
    if (jssStyles) {
      jssStyles.parentElement.removeChild(jssStyles);
    }
  }, []);

  return (
    <Provider store={store}>
      <CacheProvider value={clientSideEmotionCache}>
        <StylesProvider injectFirst>
          <AuthProvider>
            {
              // if requireAuth property is present - protect the page 
              Component.requireAuth ? (                
                <AuthGuard>
                  <LayoutComponent>
                    <DefaultSeo {...SEO} />
                    <CssBaseline />
                    {/* <GlobalStyle /> */}
                    <Component {...pageProps} />
                  </LayoutComponent>
                </AuthGuard>                
              ) : (
                // public page
                <LayoutComponent>
                  <DefaultSeo {...SEO} />
                  <CssBaseline />
                  {/* <GlobalStyle /> */}
                  <Component {...pageProps} />
                </LayoutComponent>
              )
            }
          </AuthProvider>
        </StylesProvider>
      </CacheProvider>
    </Provider>
  )
}

export default MyApp
