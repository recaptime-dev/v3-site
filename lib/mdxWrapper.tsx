import { promises as fs } from 'fs'
import path from 'path'
import matter from 'gray-matter'
import { serialize } from 'next-mdx-remote/serialize'
import { GetStaticProps } from 'next'

export const withMDXPage = (mdxFilePath: string) => {
  return async function getStaticProps() {
    const source = await fs.readFile(mdxFilePath, 'utf8')
    const { content, data } = matter(source)
    const mdxSource = await serialize(content, { scope: data })

    return {
      props: {
        source: mdxSource,
        frontMatter: data
      }
    }
  }
}