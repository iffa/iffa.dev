import { Box, Container, Flex, Heading, Icon, Text } from '@chakra-ui/react';
import React from 'react';
import { BsChevronDoubleDown } from 'react-icons/bs';
import { MotionBox } from '@/components/MotionBox';

export default function LayoutTest(): JSX.Element {
  const numbers = [1, 2];
  const colors = ['red.400', 'blue.400'];
  return (
    <Flex flexDirection="column">
      <Box as="header" width="100%" height="100vh">
        <Container maxWidth="container.xl" height="100%">
          <Flex
            alignItems="center"
            justifyContent="center"
            direction="column"
            height="100%"
          >
            <Text
              as="h1"
              fontSize="8xl"
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
          </Flex>
        </Container>
      </Box>
      <Box as="main">
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
