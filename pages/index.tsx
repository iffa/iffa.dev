import { ContentContainer } from '@/components/base/ContentContainer';
import { Heading, Text } from '@chakra-ui/react';
import React from 'react';

export default function Home(): JSX.Element {
  return (
    <ContentContainer>
      <Heading size="xl">Hi, my name is Santeri! 👋</Heading>
      <Text fontSize="lg">
        I&rsquo;m a full stack developer, electronic music enthusiast and
        motorsport fanatic.
      </Text>
    </ContentContainer>
  );
}
