import { ComponentWithAs, Flex, FlexProps, forwardRef } from '@chakra-ui/react';
import { isValidMotionProp, motion, MotionProps } from 'framer-motion';
import React from 'react';

export type MotionBoxProps = Omit<FlexProps, keyof MotionProps> &
  MotionProps & {
    as?: React.ElementType;
  };

export const MotionBox = motion.custom(
  forwardRef<MotionBoxProps, 'div'>((props, ref) => {
    const chakraProps = Object.fromEntries(
      // do not pass framer props to DOM element
      Object.entries(props).filter(([key]) => !isValidMotionProp(key))
    );
    return <Flex ref={ref} {...chakraProps} />;
  })
) as ComponentWithAs<'div', MotionBoxProps>;
