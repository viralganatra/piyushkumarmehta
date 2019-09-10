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
        <html lang="en-GB" />
        <title>Hindu Wedding Priest - Silent Ceremonies | Piyushkumar Mehta</title>
        <meta
          name="description"
          content="Hi. I am a Hindu wedding priest based in London who performs silent ceremonies, reciting our sacred Sanksrit verses whilst explaining in English."
        />
        <meta name="theme-color" content="#ffffff" />
        <link rel="apple-touch-icon" href="/favicon-192x192.png" />
        <link rel="manifest" href="/manifest.webmanifest" />
      </Helmet>
      <SectionIntro
        aboutSectionRef={aboutSectionRef}
        contactSectionRef={contactSectionRef}
      />
      <main role="main">
        <SectionAbout ref={aboutSectionRef} contactSectionRef={contactSectionRef} />
        <SectionGallery />
        <SectionContact ref={contactSectionRef} />
      </main>
    </Layout>
  );
}
