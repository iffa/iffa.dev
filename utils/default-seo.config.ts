import { DefaultSeoProps } from 'next-seo';

export const defaultSeo: DefaultSeoProps = {
  title: 'Santeri Elo – Software developer',
  description:
    'Full stack developer and electronic music enthusiast from Finland.',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://iffa.dev',
    site_name: 'Santeri Elo',
  },
  twitter: {
    handle: '@iffa_dev',
    site: '@iffa_dev',
    cardType: 'summary',
  },
};
