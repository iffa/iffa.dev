import { MoonIcon, SunIcon } from '@chakra-ui/icons';
import {
  Box,
  Container,
  Flex,
  Heading,
  IconButton,
  useColorMode,
  useColorModeValue,
} from '@chakra-ui/react';
import React from 'react';

export default function Header(): JSX.Element {
  const { colorMode, toggleColorMode } = useColorMode();
  const backgroundColor = useColorModeValue('gray.200', 'gray.900');

  return (
    <Box width="100%" py={4} backgroundColor={backgroundColor}>
      <Container maxWidth={'container.xl'}>
        <Flex justifyContent="space-between" alignItems="center">
          <Heading>iffa.dev</Heading>
          <IconButton
            aria-label="Dark mode"
            icon={colorMode === 'light' ? <MoonIcon /> : <SunIcon />}
            onClick={toggleColorMode}
          />
        </Flex>
      </Container>
    </Box>
  );
}
