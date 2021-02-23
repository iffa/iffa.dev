import { ContentWrapper } from '@/components/base/ContentWrapper';
import { Hero } from '@/components/base/Hero';
import { MotionBox, MotionText } from '@/components/base/MotionBox';
import { StickyHero } from '@/components/base/StickyHero';
import { FooterHero } from '@/components/heroes/FooterHero';
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
            <MotionText
              bgGradient="linear(to-t, #3F5EFB,#FC466B)"
              bgClip="text"
              bgSize="150% 150%"
              animate={{
                backgroundPosition: ['0%, 0%', '97% 0%', '4% 100%', '97% 0%'],
              }}
              transition={{
                duration: 5.0,
                repeatType: 'mirror',
                repeat: Infinity,
                repeatDelay: 0,
              }}
            >
              Santeri
            </MotionText>
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
          <FooterHero />
        </Box>
      </Flex>
    </ContentWrapper>
  );
}
