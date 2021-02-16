import { defaultSeo } from '@/utils/default-seo.config';
import { Container, Flex } from '@chakra-ui/react';
import { NextSeo, NextSeoProps } from 'next-seo';

import React from 'react';
import { Footer } from './Footer';
import { Header } from './Header';

/**
 * Base content container to be used by all pages.
 * Contains common layout components & SEO utilities.
 *
 * @param seoProps SEO properties
 */
export const ContentContainer = ({
  seoProps,
  children,
}: {
  seoProps?: NextSeoProps;
  children: React.ReactNode;
}): JSX.Element => {
  return (
    <Flex direction="column" minHeight="100vh">
      <NextSeo {...defaultSeo} {...seoProps} />
      <Header />
      <Container as="main" maxWidth="container.lg" py={8} flexGrow={1}>
        {children}
      </Container>
      <Footer />
    </Flex>
  );
};
