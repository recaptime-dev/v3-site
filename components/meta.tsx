import Head from 'next/head'
import theme from '@hackclub/theme' // or '../lib/theme'

// HACK: https://github.com/hackclub/theme/blob/b2cca9bc8dd58cf7dd5fcb40a8ebccf5a00a30c5/packages/meta/src/index.js#L3
const makeTitle = (name: string, title?: string) =>
  title === name ? title : `${title} - ${name}`

const Meta = ({ name = 'Recap Time Squad', title = '', description = '', image = 'https://yourproject.vercel.app/card.png', url = 'https://recaptime.dev' }) => (
  <Head>
    <title key="title">{title ? `${title} - ${name}` : name}</title>
    <meta property="og:title" content={title} />
    <meta name="twitter:title" content={title} />
    <meta name="og:url" content={url} />
    <meta property="og:type" content="website" />
    <meta property="og:site_name" content={name} />
    <meta name="description" content={description} />
    <meta property="og:description" content={description} />
    <meta name="twitter:description" content={description} />
    <meta property="og:image" content={image} />
    <meta name="twitter:card" content="summary_large_image" />
    <meta name="twitter:image" content={image} />
    <meta name="msapplication-TileColor" content={theme.colors.primary} />
    <meta name="theme-color" content={theme.colors.primary} />
  </Head>
)

export default Meta