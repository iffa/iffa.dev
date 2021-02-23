import { Box, BoxProps, Container, Flex, forwardRef } from '@chakra-ui/react';
import React from 'react';

export const Hero = forwardRef<BoxProps, 'div'>((props, ref) => {
  return (
    <Box as="header" width="100%" height="100vh" ref={ref} {...props}>
      <Container maxWidth="container.xl" height="100%">
        <Flex
          alignItems="center"
          justifyContent="center"
          direction="column"
          height="100%"
        >
          {props.children}
        </Flex>
      </Container>
    </Box>
  );
});
