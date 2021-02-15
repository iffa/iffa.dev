import { defaultSeo } from '@/utils/default-seo.config';
import { NextSeo, NextSeoProps } from 'next-seo';

import React from 'react';
import Header from './Header';

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
      <main>{children}</main>
    </>
  );
}
