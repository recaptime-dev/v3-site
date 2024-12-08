// SPDX-License-Identifier: MIT AND MPL-2.0
import * as React from 'react'
import { AppProps } from 'next/app'
import { ThemeUIProvider } from 'theme-ui'
import theme from '@hackclub/theme'
import Meta from '../components/meta'
import Header from '../components/Header'
import Footer from '../components/Footer'
import { Provider as BalancerProvider } from 'react-wrap-balancer'
import Head from 'next/head'
import ColorSwitcher from '../components/color-switcher'

const App = ({ Component, pageProps }: AppProps) => {
  const { frontMatter, ...rest } = pageProps

  return (
    <>
      <Meta
        as={Head}
        title={frontMatter?.title ? `${frontMatter.title}` : undefined}
        description={frontMatter?.description || 'Default Description'}
      />
      <ThemeUIProvider theme={theme} initialColorModeName="system">
        <BalancerProvider>
          <Header />
          <Component {...rest} />
          <Footer />
        </BalancerProvider>
      </ThemeUIProvider>
    </>
  )
}

export default App