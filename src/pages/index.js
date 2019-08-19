import React from 'react';
import { Helmet } from 'react-helmet';
import Layout from '../components/layout';
import SectionIntro from '../components/home-page/intro';
import SectionAbout from '../components/home-page/about';
import SectionGallery from '../components/home-page/gallery';
import SectionContact from '../components/home-page/contact';

export default function HomePage() {
  return (
    <Layout>
      <Helmet>
        <html lang="en-GB" />
        <title>Hindu Wedding Priest - Silent Ceremonies | Piyushkumar Mehta</title>
        <meta
          name="description"
          content="Hi. I am a Hindu wedding priest based in London who performs silent ceremonies, reciting our sacred Sanksrit verses whilst explaining in English."
        />
      </Helmet>
      <SectionIntro />
      <main role="main">
        <SectionAbout />
        <SectionGallery />
        <SectionContact />
      </main>
    </Layout>
  );
}
