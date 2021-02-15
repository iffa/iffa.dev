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
  const backgroundColor = useColorModeValue('white', 'gray.900');

  return (
    <Box width="100%" py={4} backgroundColor={backgroundColor}>
      <Container maxWidth={'container.xl'}>
        <Flex justifyContent="space-between" alignItems="center">
          <Heading bgGradient="linear(to-l, #3F5EFB,#FC466B)" bgClip="text">
            iffa.dev
          </Heading>
          <IconButton
            aria-label="Toggle color mode"
            title="Toggle color mode"
            icon={colorMode === 'light' ? <MoonIcon /> : <SunIcon />}
            onClick={toggleColorMode}
          />
        </Flex>
      </Container>
    </Box>
  );
}
