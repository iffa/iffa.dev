import {
  Box,
  ButtonGroup,
  Container,
  ContainerProps,
  Divider,
  Flex,
  forwardRef,
  IconButton,
  Link,
  Text,
} from '@chakra-ui/react';
import React from 'react';
import { FaLinkedinIn, FaTwitter, FaGithub } from 'react-icons/fa';

export const Footer = forwardRef<ContainerProps, 'footer'>((props, ref) => (
  <Container maxWidth={'container.lg'} ref={ref} {...props}>
    <Divider orientation="horizontal" variant="solid" />

    <Flex py={4} direction="row" justifyContent="space-between">
      <Box>
        <Text fontSize="sm">© 2021 Santeri Elo</Text>
        <Link href={process.env.NEXT_PUBLIC_REPO_URL} isExternal fontSize="xs">
          I&rsquo;m still a work-in-progress. 🏗️
        </Link>
      </Box>
      <ButtonGroup size="sm" variant="ghost">
        <Link href={process.env.NEXT_PUBLIC_LINKEDIN_URL} isExternal>
          <IconButton
            aria-label="Navigate to LinkedIn"
            title="Navigate to LinkedIn"
            icon={<FaLinkedinIn />}
          />
        </Link>
        <Link href={process.env.NEXT_PUBLIC_TWITTER_URL} isExternal>
          <IconButton
            aria-label="Navigate to Twitter"
            title="Navigate to Twitter"
            icon={<FaTwitter />}
          />
        </Link>
        <Link href={process.env.NEXT_PUBLIC_GITHUB_URL} isExternal>
          <IconButton
            aria-label="Navigate to GitHub"
            title="Navigate to GitHub"
            icon={<FaGithub />}
          />
        </Link>
      </ButtonGroup>
    </Flex>
  </Container>
));
