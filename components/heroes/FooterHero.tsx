import { Heading, SimpleGrid } from '@chakra-ui/react';
import React from 'react';
import { AiFillMail } from 'react-icons/ai';
import { FaGithub, FaLinkedinIn, FaTwitter } from 'react-icons/fa';
import { FooterLink } from '../base/FooterLink';
import { StickyHero } from '../base/StickyHero';

export function FooterHero(): JSX.Element {
  return (
    <StickyHero as="footer" flexDirection="column">
      <Heading as="h3" fontSize="4xl">
        This is the end.
      </Heading>
      <SimpleGrid mt={4} spacing={4}>
        <FooterLink
          icon={<FaLinkedinIn />}
          iconLabel="Visit my LinkedIn profile"
          href={process.env.NEXT_PUBLIC_LINKEDIN_URL}
        />
        <FooterLink
          icon={<FaGithub />}
          iconLabel="Visit my GitHub profile"
          href={process.env.NEXT_PUBLIC_GITHUB_URL}
        />
        <FooterLink
          icon={<FaTwitter />}
          iconLabel="Visit my Twitter profile"
          href={process.env.NEXT_PUBLIC_TWITTER_URL}
        />
        <FooterLink
          icon={<AiFillMail />}
          iconLabel="Send me an email"
          href={process.env.NEXT_PUBLIC_TWITTER_URL}
        />
      </SimpleGrid>
    </StickyHero>
  );
}
