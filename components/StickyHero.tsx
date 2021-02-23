import { Flex, FlexProps, forwardRef } from '@chakra-ui/react';
import React from 'react';

export const StickyHero = forwardRef<FlexProps, 'div'>((props, ref) => {
  return (
    <Flex
      as="section"
      position="sticky"
      top="0"
      height="100vh"
      alignItems="center"
      justifyContent="center"
      boxShadow="inner"
      ref={ref}
      {...props}
    >
      {props.children}
    </Flex>
  );
});
