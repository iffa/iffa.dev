import { defaultSeo } from '@/utils/default-seo.config';
import { NextSeo, NextSeoProps } from 'next-seo';
import React from 'react';

/**
 * Base content wrapper to be used by all pages.
 *
 * @param seoProps Page-specific SEO properties
 */
export const ContentWrapper = ({
  seoProps,
  children,
}: {
  seoProps?: NextSeoProps;
  children: React.ReactNode;
}): JSX.Element => {
  return (
    <>
      <NextSeo {...defaultSeo} {...seoProps} />
      {children}
    </>
  );
};
