import { MoonIcon, SunIcon } from '@chakra-ui/icons';
import {
  Box,
  ButtonGroup,
  Container,
  Flex,
  Heading,
  IconButton,
  Link,
  useColorMode,
  useColorModeValue,
} from '@chakra-ui/react';
import { FaGithub } from 'react-icons/fa';
import React from 'react';

export default function Header(): JSX.Element {
  const { colorMode, toggleColorMode } = useColorMode();
  const backgroundColor = useColorModeValue('white', 'gray.900');

  return (
    <Box width="100%" py={4} backgroundColor={backgroundColor}>
      <Container maxWidth={'container.xl'}>
        <Flex
          direction="row"
          justifyContent="space-between"
          alignItems="center"
        >
          <Heading bgGradient="linear(to-l, #3F5EFB,#FC466B)" bgClip="text">
            iffa.dev
          </Heading>

          <ButtonGroup size="md">
            <Link href={process.env.NEXT_PUBLIC_GITHUB_URL} isExternal>
              <IconButton
                aria-label="Navigate to GitHub"
                title="Navigate to GitHub"
                icon={<FaGithub />}
              />
            </Link>
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
}
