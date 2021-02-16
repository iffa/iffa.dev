import { defaultSeo } from '@/utils/default-seo.config';
import { Container } from '@chakra-ui/react';
import { NextSeo, NextSeoProps } from 'next-seo';

import React from 'react';
import Header from './Header';

/**
 * Base content container to be used by all pages.
 * Contains common layout components & SEO utilities.
 *
 * @param seoProps SEO properties
 */
export default function ContentContainer({
  seoProps,
  children,
}: {
  seoProps?: NextSeoProps;
  children: React.ReactNode;
}): JSX.Element {
  return (
    <>
      <NextSeo {...defaultSeo} {...seoProps} />
      <Header />
      <Container as="main" maxWidth="container.lg" py={4}>
        {children}
      </Container>
    </>
  );
}
