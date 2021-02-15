import ContentContainer from '@/components/ContentContainer';
import { Container, Heading, Text } from '@chakra-ui/react';
import React from 'react';

export default function Home(): JSX.Element {
  return (
    <ContentContainer>
      <Container maxWidth={'container.xl'} py={4}>
        <Heading size="lg">Hi, my name is Santeri!</Heading>
        <Text>I&rsquo;m a full stack engineer currently working at CGI.</Text>
        <Text>This site is still in development, check back later!</Text>
      </Container>
    </ContentContainer>
  );
}
