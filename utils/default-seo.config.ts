import { DefaultSeoProps } from 'next-seo';

export const defaultSeo: DefaultSeoProps = {
  title: 'Santeri Elo – Software developer',
  description:
    'Full stack developer and electronic music enthusiast from Finland.',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://iffa.dev',
    images: [
      {
        url: 'https://iffa.dev/preview.png',
        width: 1200,
        height: 630,
      },
    ],
    site_name: 'Santeri Elo',
  },
  twitter: {
    handle: '@iffa_dev',
    site: '@iffa_dev',
    cardType: 'summary_large_image',
  },
};
