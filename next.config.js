const withMDX = require('@next/mdx')({ extension: /\.mdx?$/ })
module.exports = withMDX({
  pageExtensions: ['ts', 'tsx', 'mdx'],
  experimental: {
    // Remove or replace the invalid 'turbo' property
    // Add other valid experimental properties if needed
  }
})