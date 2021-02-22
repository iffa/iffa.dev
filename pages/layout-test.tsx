import {
  Box,
  Container,
  Flex,
  Heading,
  Icon,
  Text,
  useBreakpointValue,
} from '@chakra-ui/react';
import React from 'react';
import * as CSS from 'csstype';
import { BsChevronDoubleDown } from 'react-icons/bs';
import { MotionBox } from '@/components/MotionBox';

export default function LayoutTest(): JSX.Element {
  const headingSize = useBreakpointValue({
    base: 'header-xl',
    lg: 'header-xl',
  });
  const headingWritingMode: CSS.Property.WritingMode = useBreakpointValue({
    base: 'horizontal-tb',
    lg: 'horizontal-tb',
  });
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
              style={{
                writingMode: headingWritingMode,
                textOrientation: 'upright',
              }}
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
