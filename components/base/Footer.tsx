import {
  Box,
  Container,
  ContainerProps,
  Divider,
  forwardRef,
  Text,
} from '@chakra-ui/react';
import React from 'react';

export const Footer = forwardRef<ContainerProps, 'footer'>((props, ref) => (
  <Container maxWidth={'container.lg'} ref={ref} {...props}>
    <Divider orientation="horizontal" variant="solid" />

    <Box py={4}>
      <Text fontSize="sm">© 2021 Santeri Elo</Text>
    </Box>
  </Container>
));
