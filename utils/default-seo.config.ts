import { DefaultSeoProps } from 'next-seo';

export const defaultSeo: DefaultSeoProps = {
  title: 'Santeri Elo – Software developer',
  description:
    'Full stack developer, electronic music enthusiast and motorsport fanatic from Finland. Creating memorable software experiences since 2011.',
  canonical: 'https://iffa.dev/',
  openGraph: {
    type: 'website',
    title: 'Santeri Elo – Software developer',
    site_name: 'Santeri Elo',
    description:
      'Full stack developer, electronic music enthusiast and motorsport fanatic from Finland. Creating memorable software experiences since 2011.',
    url: 'https://iffa.dev',
    locale: 'en_US',
    images: [
      {
        url: 'https://iffa.dev/preview.png',
        width: 1200,
        height: 627,
        alt: 'Preview image of iffa.dev',
      },
      {
        url: 'https://iffa.dev/preview-square.png',
        width: 400,
        height: 400,
        alt: 'Preview image of iffa.dev',
      },
    ],
  },
  twitter: {
    handle: '@iffa_dev',
    site: '@iffa_dev',
    cardType: 'summary_large_image',
  },
  additionalMetaTags: [
    {
      name: 'author',
      content: 'Santeri Elo',
    },
  ],
};
