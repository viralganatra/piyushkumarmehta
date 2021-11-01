import React, { useRef } from 'react';
import { Helmet } from 'react-helmet';
import Layout from 'components/layout';
import SectionIntro from 'components/home-page/intro';
import SectionAbout from 'components/home-page/about';
import SectionGallery from 'components/home-page/gallery';
import SectionContact from 'components/home-page/contact';

export default function HomePage() {
  const aboutSectionRef = useRef(null);
  const contactSectionRef = useRef(null);

  return (
    <Layout>
      <Helmet>
        <title>Hindu Wedding Priest - Silent Ceremonies | Piyushbhai Mehta</title>
        <meta
          name="description"
          content="I am a Hindu wedding priest from London who performs silent ceremonies at intimate and grand scales. I recite in Sanskrit whilst explaining in English, Gujarati and Hindi."
        />
        <meta name="theme-color" content="#ffffff" />
        <link rel="apple-touch-icon" href="/favicon-192x192.png" />
        <link rel="manifest" href="/manifest.webmanifest" />
        <link rel="dns-prefetch" href="https://www.google-analytics.com" />
      </Helmet>
      <SectionIntro aboutSectionRef={aboutSectionRef} contactSectionRef={contactSectionRef} />
      <main role="main">
        <SectionAbout ref={aboutSectionRef} contactSectionRef={contactSectionRef} />
        <SectionGallery />
        <SectionContact ref={contactSectionRef} />
      </main>
    </Layout>
  );
}
