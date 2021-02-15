import Header from '@/components/Header';
import { Box, Container, Heading, Link, Text } from '@chakra-ui/react';
import React from 'react';

export default function Home(): JSX.Element {
  return (
    <Box>
      <Header />

      <Container maxWidth={'container.xl'} py={4}>
        <Heading size="lg">Hi, my name is Santeri!</Heading>
        <Text>I&rsquo;m a full stack engineer currently working at CGI.</Text>
        <Text>This site is still in development, check back later!</Text>
      </Container>
    </Box>
  );
}
