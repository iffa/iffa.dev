import { Box, Flex, Heading, Text, useBreakpointValue } from '@chakra-ui/react';
import React from 'react';

export default function LayoutTest(): JSX.Element {
  const headingSize = useBreakpointValue({ base: 'xl', lg: '2xl' });
  const numbers = [1, 2];
  const colors = ['white', 'red.200'];
  return (
    <Flex flexDirection={{ base: 'column', lg: 'row-reverse' }}>
      <Box
        as="header"
        backgroundColor="gray.200"
        flexBasis={{ base: 'auto', lg: '50%' }}
        position={{ base: 'relative', lg: 'fixed' }}
        top="0"
        left="0"
        width={{ base: '100%', lg: '50%' }}
        height={{ base: '100vh', lg: '100%' }}
      >
        <Flex alignItems="center" justifyContent="center" height="100%">
          <Heading size={headingSize}>This is a test</Heading>
        </Flex>
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
