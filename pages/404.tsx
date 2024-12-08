import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import NextLink from 'next/link'
import { Box, Button, Container, Heading, Text } from 'theme-ui';
import Meta from '../components/meta';
import IconComponent from '../components/icons';

const Custom404 = () => {
    const router = useRouter();
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        setMounted(true);
    }, []);

    const handleReturnHome = () => {
        router.push('/');
    };

    if (!mounted) return null;

    return (
      <>
        <Meta
          title="404!"
        />
        <Container variant="narrow" sx={{ py: [5, 6], textAlign: 'center' }}>
          <Box>
            <Text
              mt={2}
              mb={4}
              color="muted"
              variant="lead"
              sx={{ dispaly: 'block' }}
            >
              We couldn't find the page you were looking for.
            </Text>
            <NextLink href="/" passHref>
              <Button as="a" variant="cta">
                <IconComponent glyph="home" size={32} />
                Go Home
              </Button>
            </NextLink>
          </Box>
        </Container>
      </>
    );
};

export default Custom404;