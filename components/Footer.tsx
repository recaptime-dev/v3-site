// SPDX-License-Identifier: MIT AND MPL-2.0
import * as React from 'react'
import { Box, Heading, Text } from 'theme-ui'
import Link from './Link'
import ColorSwitcher from './color-switcher'

const Footer: React.FC = () => (
  <Box as="footer" sx={{ 
    bg: 'muted', color: 'text', p: 3, mt: 4
  }}>
    <Link href="#top">Scroll to top ↑</Link>
    <br/><br/> 
    <Text>
      &copy; {new Date().getFullYear()} Recap Time Squad and contributors. Unless otherwise specified website content is licensed under <Link href="https://creativecommons.org/licenses/by-sa/4.0/">CC BY-SA 4.0</Link>.<br/>
      <br/>
      Recap Time Squad is fiscally-sponsored by <Link href="https://the.hackfoundation.org">The Hack Foundation</Link> (dba Hack Club).
    </Text>
  </Box>
)

export default Footer