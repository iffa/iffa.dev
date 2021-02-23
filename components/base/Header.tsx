import { MoonIcon, SunIcon } from '@chakra-ui/icons';
import {
  Avatar,
  Box,
  BoxProps,
  ButtonGroup,
  Container,
  Flex,
  forwardRef,
  Heading,
  HStack,
  IconButton,
  useColorMode,
  useColorModeValue,
} from '@chakra-ui/react';
import React from 'react';

export const Header = forwardRef<BoxProps, 'header'>((props, ref) => {
  const { colorMode, toggleColorMode } = useColorMode();
  const backgroundColor = useColorModeValue('white', 'gray.900');

  return (
    <Box
      width="100%"
      py={4}
      backgroundColor={backgroundColor}
      boxShadow="sm"
      ref={ref}
      {...props}
    >
      <Container maxWidth={'container.lg'}>
        <Flex
          direction="row"
          justifyContent="space-between"
          alignItems="center"
        >
          <HStack spacing={4} align="center">
            <Avatar
              loading="eager"
              aria-label="Avatar"
              title="Avatar"
              size="md"
              src={`https://www.gravatar.com/avatar/${process.env.NEXT_PUBLIC_GRAVATAR_HASH}?s=256`}
            />
            <Heading bgGradient="linear(to-l, #3F5EFB,#FC466B)" bgClip="text">
              iffa.dev
            </Heading>
          </HStack>

          <ButtonGroup size="md">
            <IconButton
              aria-label="Toggle color mode"
              title="Toggle color mode"
              icon={colorMode === 'light' ? <MoonIcon /> : <SunIcon />}
              onClick={toggleColorMode}
            />
          </ButtonGroup>
        </Flex>
      </Container>
    </Box>
  );
});
