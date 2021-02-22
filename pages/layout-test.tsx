import {
  Box,
  Container,
  Flex,
  Heading,
  Text,
  useBreakpointValue,
} from '@chakra-ui/react';
import React from 'react';
import Particles from 'react-tsparticles';
import { ISourceOptions } from 'tsparticles';

const particleConfig: ISourceOptions = {
  fpsLimit: 30,
  pauseOnBlur: true,
  pauseOnOutsideViewport: true,
  detectRetina: true,
  backgroundMode: {
    enable: true,
  },
  motion: {
    disable: true,
  },
  particles: {
    reduceDuplicates: true,
    collisions: {
      enable: true,
    },
    links: {
      enable: true,
      consent: true,
      warp: true,
      color: {
        value: 'random',
      },
      opacity: 0.75,
    },
    move: {
      enable: true,
      direction: 'none',
      outMode: 'bounce',
      random: true,
      speed: 1,
    },
    number: {
      limit: 100,
      value: 100,
    },
    opacity: {
      value: 0.5,
      random: {
        enable: true,
        minimumValue: 0.1,
      },
    },
    size: {
      value: 16,
      random: {
        enable: true,
        minimumValue: 8,
      },
    },
    shape: {
      type: 'images',
      images: [
        {
          src: '/icons/angular.png',
          width: 128,
          height: 128,
        },
        {
          src: '/icons/android.png',
          width: 128,
          height: 128,
        },
        {
          src: '/icons/javascript.png',
          width: 128,
          height: 128,
        },
        {
          src: '/icons/react.png',
          width: 128,
          height: 128,
        },
        {
          src: '/icons/kotlin.png',
          width: 128,
          height: 128,
        },
        {
          src: '/icons/node.png',
          width: 128,
          height: 128,
        },
      ],
    },
  },
};

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
              zIndex="overlay"
              isTruncated
            >
              santeri
            </Heading>
          </Flex>
        </Container>
        <Particles options={particleConfig} />
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
