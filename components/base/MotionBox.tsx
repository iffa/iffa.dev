import {
  ComponentWithAs,
  Flex,
  FlexProps,
  forwardRef,
  Text,
  TextProps,
} from '@chakra-ui/react';
import { isValidMotionProp, motion, MotionProps } from 'framer-motion';
import React from 'react';

export type MotionBoxProps = Omit<FlexProps, keyof MotionProps> &
  MotionProps & {
    as?: React.ElementType;
  };

export type MotionTextProps = Omit<TextProps, keyof MotionProps> &
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

export const MotionText = motion.custom(
  forwardRef<MotionTextProps, 'span'>((props, ref) => {
    const chakraProps = Object.fromEntries(
      // do not pass framer props to DOM element
      Object.entries(props).filter(([key]) => !isValidMotionProp(key))
    );
    return <Text as={props.as || 'span'} ref={ref} {...chakraProps} />;
  })
) as ComponentWithAs<'span', MotionTextProps>;
