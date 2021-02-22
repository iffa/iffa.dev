import {
  Box,
  Container,
  Flex,
  Heading,
  Image,
  Text,
  useBreakpointValue,
} from '@chakra-ui/react';
import React from 'react';

export default function LayoutTest(): JSX.Element {
  const headingSize = useBreakpointValue({ base: 'header', lg: 'header-xl' });
  const numbers = [1, 2];
  const colors = ['red.400', 'blue.400'];
  return (
    <Flex flexDirection={{ base: 'column', lg: 'row-reverse' }}>
      <Box
        as="header"
        flexBasis={{ base: 'auto', lg: '50%' }}
        position={{ base: 'relative', lg: 'fixed' }}
        top="0"
        left="0"
        width={{ base: '100%', lg: '50%' }}
        height={{ base: '100vh', lg: '100%' }}
      >
        <Container maxWidth="container.xl" height="100%">
          <Flex alignItems="center" justifyContent="center" height="100%">
            <Heading
              as="h1"
              size={headingSize}
              bgGradient="linear(to-t, #3F5EFB,#FC466B)"
              bgClip="text"
              style={{
                writingMode: 'vertical-rl',
                textOrientation: 'upright',
              }}
              isTruncated
            >
              santeri
            </Heading>
          </Flex>
        </Container>
      </Box>
      <Box as="main" flexBasis={{ base: 'auto', lg: '50%' }}>
        {numbers.map((x, index) => {
          return (
            <Flex
              as="section"
              position="sticky"
              top="0"
              height="100vh"
              backgroundColor={colors[index]}
              alignItems="center"
              justifyContent="center"
              boxShadow="inner"
              key={x}
            >
              <Heading>{x}</Heading>
              <Text>(scroll)</Text>
            </Flex>
          );
        })}
      </Box>
    </Flex>
  );
}
