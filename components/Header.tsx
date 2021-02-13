import { MoonIcon, SunIcon } from '@chakra-ui/icons';
import {
  Box,
  Container,
  Flex,
  Heading,
  IconButton,
  useColorMode,
} from '@chakra-ui/react';
import React from 'react';

export default function Header(): JSX.Element {
  const { colorMode, toggleColorMode } = useColorMode();

  return (
    <Box width="100%" py={4}>
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
