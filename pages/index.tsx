// SPDX-License-Identifier: MIT AND MPL-2.0
import {
  Box,
  Button,
  Card,
  Container,
  Divider,
  Flex,
  Grid,
  Heading,
  Image,
  Link,
  Text
} from 'theme-ui'
import Meta from '../components/meta'

export default function Home() {
  return (
    <>
      <Meta
        title="Home"
        description="Home page"
      />
      <Box
        as="main"
        sx={{
          overflowX: 'hidden',
          position: 'relative',
          textAlign: 'center', // Center align content
          py: 4 // Add padding for better spacing
        }}
      >
        <Text
          variant="eyebrow"
          sx={{
            color: 'text',
            pb: 2,
            position: "relative",
            display: "block",
          }}
          as="h1"
        >
          Welcome to Recap Time Squad
        </Text>
      </Box>
    </>
  )
}