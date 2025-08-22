import type { HeadFC, PageProps } from 'gatsby';
import { type FC, Fragment, useRef } from 'react';
import { HomePageAbout } from '../components/home-page/about';
import { HomePageContact } from '../components/home-page/contact';
import { HomePageIntro } from '../components/home-page/intro';
import { Layout } from '../components/layout';

const IndexPage: FC<PageProps> = () => {
  const aboutSectionRef = useRef(null);
  const contactSectionRef = useRef(null);

  return (
    <Layout>
      <HomePageIntro aboutSectionRef={aboutSectionRef} contactSectionRef={contactSectionRef} />
      <main>
        <HomePageAbout isError contactSectionRef={contactSectionRef} />
        <HomePageContact ref={contactSectionRef} />
      </main>
    </Layout>
  );
};

export default IndexPage;

export const Head: HeadFC = () => (
  <Fragment>
    <html lang="en" />
    <title>Hindu Wedding Priest - Silent Ceremonies | Piyushbhai Mehta</title>
    <meta
      name="description"
      content="I am a Hindu wedding priest from London who performs silent ceremonies at intimate and grand scales. I recite in Sanskrit whilst explaining in English, Gujarati and Hindi."
    />
    <meta name="theme-color" content="#ffffff" />
    <link rel="apple-touch-icon" href="/favicon-192x192.png" />
    <link rel="manifest" href="/manifest.webmanifest" />
    <link rel="dns-prefetch" href="https://www.google-analytics.com" />
  </Fragment>
);
