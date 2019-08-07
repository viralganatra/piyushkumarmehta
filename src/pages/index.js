import React from 'react';
import Layout from '../components/layout';
import SectionIntro from '../components/home-page/intro';
import SectionAbout from '../components/home-page/about';

export default function HomePage() {
  return (
    <Layout>
      <SectionIntro />
      <main role="main">
        <SectionAbout />
      </main>
    </Layout>
  );
}
