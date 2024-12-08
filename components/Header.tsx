// SPDX-License-Identifier: MIT AND MPL-2.0
import { useState } from 'react'
import { Box, Container, Heading, IconButton, useColorMode } from 'theme-ui'
import Link from './Link'
import ColorSwitcher from './color-switcher'

export default function Header() {
  const [colorMode, setColorMode] = useColorMode()
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  return (
    <Box
      as="header"
      sx={{
        bg: colorMode === 'light' ? 'white' : 'black',
        color: colorMode === 'light' ? 'black' : 'white',
        borderBottom: '1px solid',
        borderColor: 'muted',
        height: '64px',
        position: 'sticky',
        top: 0,
        left: 0,
        zIndex: 1000,
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        px: 3
      }}
    >
      <Container
        sx={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          height: '100%'
        }}
      >
        <Heading
          as="h1"
          sx={{
            color: 'inherit',
            fontSize: 3,
            m: 0
          }}
        >
          <Link
            href="/"
            sx={{
              textDecoration: 'none',
              color: 'inherit'
            }}
          >
            Recap Time Squad
          </Link>
        </Heading>
        <Box sx={{ display: ['none', 'flex'], alignItems: 'center' }}>
          <Link href="/about" sx={{ color: 'inherit', mx: 2 }}>
            About
          </Link>
          <Link href="/team" sx={{ color: 'inherit', mx: 2 }}>
            The team
          </Link>
          <Link href="/Projects" sx={{ color: 'inherit', mx: 2 }}>
            Projects
          </Link>
          <Link href="/donate" sx={{ color: 'inherit', mx: 2 }}>
            Donate
          </Link>
        </Box>
        <IconButton
          sx={{ display: ['block', 'none'], color: 'inherit' }}
          onClick={toggleMenu}
        >
          <svg
            viewBox="0 0 24 24"
            width="24"
            height="24"
            fill="currentcolor"
          >
            <path d="M3 6h18M3 12h18M3 18h18" />
          </svg>
        </IconButton>
        <ColorSwitcher />
      </Container>
      {isMenuOpen && (
        <Box
          sx={{
            display: ['block', 'none'],
            position: 'absolute',
            top: '64px',
            left: 0,
            right: 0,
            bg: colorMode === 'light' ? 'white' : 'black',
            color: colorMode === 'light' ? 'black' : 'white',
            zIndex: 999,
            px: 3,
            py: 2
          }}
        >
          <Link href="/about" sx={{ color: 'inherit', display: 'block', py: 1 }}>
            About
          </Link>
          <Link href="/team" sx={{ color: 'inherit', display: 'block', py: 1 }}>
            The team
          </Link>
          <Link href="/projects" sx={{ color: 'inherit', display: 'block', py: 1 }}>
            Projects
          </Link>
          <Link href="/donate" sx={{ color: 'inherit', display: 'block', py: 1 }}>
            Donate
          </Link>
          <Link href="/contact" sx={{ color: 'inherit', display: 'block', py: 1 }}>
            Contact
          </Link>
        </Box>
      )}
    </Box>
  )
}