import { forwardRef, IconButton, Link, LinkProps } from '@chakra-ui/react';
import { motion } from 'framer-motion';
import React from 'react';

export type FooterLinkProps = LinkProps & {
  icon?: React.ReactElement;
  iconLabel?: string;
};

/**
 * Footer link component that takes optional icon & iconLabel parameters
 * to show an icon button. If no icon is passed, a normal text link is created.
 */
export const FooterLink = forwardRef<FooterLinkProps, 'a'>((props, ref) => {
  const { icon, iconLabel } = props;
  const chakraProps = Object.fromEntries(
    // do not pass framer props to DOM element
    Object.entries(props).filter(
      ([key]) => key !== 'icon' && key !== 'iconLabel'
    )
  );

  return (
    <motion.div initial={{ scale: 1.0 }} whileHover={{ scale: 1.25 }}>
      <Link isExternal={true} ref={ref} {...chakraProps}>
        {icon ? (
          <IconButton
            variant="outline"
            colorScheme="red"
            size="lg"
            fontSize="2xl"
            aria-label={iconLabel}
            title={iconLabel}
            icon={icon}
          />
        ) : (
          props.children
        )}
      </Link>
    </motion.div>
  );
});
