import { ContentWrapper } from '@/components/ContentWrapper';
import { Hero } from '@/components/Hero';
import { MotionBox } from '@/components/MotionBox';
import { StickyHero } from '@/components/StickyHero';
import { Box, Flex, Heading, Icon, Text } from '@chakra-ui/react';
import React from 'react';
import { BsChevronDoubleDown } from 'react-icons/bs';

export default function Home(): JSX.Element {
  const numbers = [1, 2];
  const colors = ['red.400', 'blue.400'];
  return (
    <ContentWrapper>
      <Flex flexDirection="column">
        <Hero as="header">
          <Text
            as="h1"
            fontSize={{ base: '6xl', lg: '8xl' }}
            fontWeight="bold"
            zIndex="overlay"
            overflowWrap="break-word"
            textAlign="center"
          >
            Hi, my name is{' '}
            <Text
              as="span"
              bgGradient="linear(to-t, #3F5EFB,#FC466B)"
              bgClip="text"
            >
              Santeri
            </Text>
            .
          </Text>
          <MotionBox
            mt={4}
            direction="column"
            alignItems="center"
            animate={{ y: 32 }}
            transition={{
              type: 'spring',
              bounce: 0.5,
              duration: 1.0,
              repeatType: 'reverse',
              repeat: Infinity,
              repeatDelay: 0,
            }}
          >
            <Text fontSize="sm" textColor="blackAlpha.700">
              Scroll down
            </Text>
            <Icon
              as={BsChevronDoubleDown}
              boxSize={8}
              color={'blackAlpha.600'}
            />
          </MotionBox>
        </Hero>
        <Box as="main">
          {numbers.map((x, index) => {
            return (
              <StickyHero as="section" key={x} backgroundColor={colors[index]}>
                <Heading as="h2">{x}</Heading>
                <Text>(scroll)</Text>
              </StickyHero>
            );
          })}
        </Box>
      </Flex>
    </ContentWrapper>
  );
}
