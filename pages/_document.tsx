// SPDX-License-Identifier: MIT AND MPL-2.0
import Document, { Html, Head, Main, NextScript, DocumentContext } from 'next/document'
import { InitializeColorMode } from 'theme-ui'

const orgSchemaLd = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "Recap Time Squad",
  alternateName: "RecapTime.dev",
  url: "https://recaptime.dev",
  sameAs: [
    "https://github.com/recaptime-dev",
    "https://mastodon.xyz/@RecapTimeSquad"
  ],
  contactPoint: [
    {
      "@type": "ContactPoint",
      email: "squad@crew.recaptime.dev",
      contactType: "customer support"
    },
    {
      "@type": "ContactPoint",
      email: "sponsors@recaptime.dev",
      contactType: "sponsorship"
    }
  ]
}

class MyDocument extends Document {
  static async getInitialProps(ctx: DocumentContext) {
    const initialProps = await Document.getInitialProps(ctx)
    return { ...initialProps }
  }

  render() {
    return (
      <Html lang="en">
        <Head>
          <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{ __html: JSON.stringify(orgSchemaLd) }}
          />
        </Head>
        <body>
          <InitializeColorMode />
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}

export default MyDocument