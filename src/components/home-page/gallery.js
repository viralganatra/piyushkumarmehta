import React from 'react';
import styled from '@emotion/styled';
import AnilKapoorLegacy400 from 'images/anil-kapoor-400w.jpg';
import AnilKapoorLegacy600 from 'images/anil-kapoor-600w.jpg';
import AnilKapoorLegacy800 from 'images/anil-kapoor-800w.jpg';
import AnilKapoorModern400 from 'images/anil-kapoor-400w.webp';
import AnilKapoorModern600 from 'images/anil-kapoor-600w.webp';
import AnilKapoorModern800 from 'images/anil-kapoor-800w.webp';
import SonamKapoorLegacy400 from 'images/sonam-kapoor-400w.jpg';
import SonamKapoorLegacy600 from 'images/sonam-kapoor-600w.jpg';
import SonamKapoorLegacy800 from 'images/sonam-kapoor-800w.jpg';
import SonamKapoorModern400 from 'images/sonam-kapoor-400w.webp';
import SonamKapoorModern600 from 'images/sonam-kapoor-600w.webp';
import SonamKapoorModern800 from 'images/sonam-kapoor-800w.webp';
import MangalSutraLegacy400 from 'images/mangal-sutra-400w.jpg';
import MangalSutraLegacy600 from 'images/mangal-sutra-600w.jpg';
import MangalSutraLegacy800 from 'images/mangal-sutra-800w.jpg';
import MangalSutraModern400 from 'images/mangal-sutra-400w.webp';
import MangalSutraModern600 from 'images/mangal-sutra-600w.webp';
import MangalSutraModern800 from 'images/mangal-sutra-800w.webp';
import FlorenceWeddingLegacy400 from 'images/florence-wedding-400w.jpg';
import FlorenceWeddingLegacy600 from 'images/florence-wedding-600w.jpg';
import FlorenceWeddingLegacy800 from 'images/florence-wedding-800w.jpg';
import FlorenceWeddingModern400 from 'images/florence-wedding-400w.webp';
import FlorenceWeddingModern600 from 'images/florence-wedding-600w.webp';
import FlorenceWeddingModern800 from 'images/florence-wedding-800w.webp';
import KrishanAneetaLegacy400 from 'images/krishan-and-aneeta-400w.jpg';
import KrishanAneetaLegacy600 from 'images/krishan-and-aneeta-600w.jpg';
import KrishanAneetaLegacy800 from 'images/krishan-and-aneeta-800w.jpg';
import KrishanAneetaModern400 from 'images/krishan-and-aneeta-400w.webp';
import KrishanAneetaModern600 from 'images/krishan-and-aneeta-600w.webp';
import KrishanAneetaModern800 from 'images/krishan-and-aneeta-800w.webp';
import NehaRajanLegacy400 from 'images/neha-rajan-400w.jpg';
import NehaRajanLegacy600 from 'images/neha-rajan-600w.jpg';
import NehaRajanLegacy800 from 'images/neha-rajan-800w.jpg';
import NehaRajanModern400 from 'images/neha-rajan-400w.webp';
import NehaRajanModern600 from 'images/neha-rajan-600w.webp';
import NehaRajanModern800 from 'images/neha-rajan-800w.webp';
import { px2rem, constrainLayout, SectionHeading } from 'utils/styles';
import { media } from 'utils/breakpoints';
import { BREAKPOINT_MD, BREAKPOINT_LG } from 'constants/responsive';

const Section = styled.section`
  ${constrainLayout};
  display: grid;
  margin-bottom: var(--section-offset);
  margin-top: var(--section-offset);

  ${media.above('md')`
    grid-gap: var(--section-offset) 0;
    grid-template-columns: repeat(6, 1fr);
  `};
`;

const Heading = styled(SectionHeading)`
  ${media.above('md')`
    display: none;
  `};
`;

const ImageWithCaption = styled.figure`
  display: flex;
  justify-content: center;
  margin: 10px;
  position: relative;

  ${media.above('md')`
    grid-column: auto / span 3;
    margin: 20px;
  `};
  ${media.above('lg')`
    grid-column: auto / span 2;
    margin-left: var(--gutter-section);
    margin-right: var(--gutter-section);
  `};
`;

const Picture = styled.picture`
  width: 100%;
`;

const Caption = styled.figcaption`
  background-color: white;
  bottom: 0;
  display: block;
  font-size: ${px2rem(18)};
  left: 0;
  min-width: 0%;
  padding: 6px 20px;
  position: absolute;
  transition: all 0.3s ease;

  ${ImageWithCaption}:hover & {
    min-width: 100%;
  }
`;

const Image = styled.img`
  display: block;
  object-fit: cover;
  max-height: 500px;
  width: 100%;

  ${media.above('md')`
    height: 260px;
  `};
`;

export default function HomePageGallery() {
  return (
    <Section>
      <Heading>Photo Gallery</Heading>

      <ImageWithCaption>
        <Picture>
          <source
            srcSet={`
              ${FlorenceWeddingLegacy400} 400w, ${FlorenceWeddingModern600} 600w, ${FlorenceWeddingModern800} 800w
            `}
            sizes={`(min-width: ${BREAKPOINT_MD}) 50vw, 100vw`}
            type="image/webp"
          />
          <source
            srcSet={`
              ${FlorenceWeddingLegacy400} 400w, ${FlorenceWeddingModern600} 600w, ${FlorenceWeddingModern800} 800w
            `}
            sizes={`(min-width: ${BREAKPOINT_LG}) 33.3vw, 100vw`}
            type="image/webp"
          />
          <source
            srcSet={`
              ${FlorenceWeddingModern400} 400w, ${FlorenceWeddingLegacy600} 600w, ${FlorenceWeddingLegacy800} 800w
            `}
            sizes={`(min-width: ${BREAKPOINT_MD}) 50vw, 100vw`}
            type="image/jpeg"
          />
          <source
            srcSet={`
              ${FlorenceWeddingModern400} 400w, ${FlorenceWeddingLegacy600} 600w, ${FlorenceWeddingLegacy800} 800w
            `}
            sizes={`(min-width: ${BREAKPOINT_LG}) 33.3vw, 100vw`}
            type="image/jpeg"
          />
          <Image
            src={FlorenceWeddingLegacy400}
            loading="lazy"
            width="400"
            alt="Piyushbhai Mehta performing Hindu wedding ceremony in Florence, Italy"
          />
        </Picture>
        <Caption>Wedding in Florence, Italy</Caption>
      </ImageWithCaption>
      <ImageWithCaption>
        <Picture>
          <source
            srcSet={`
              ${MangalSutraLegacy400} 400w, ${MangalSutraModern600} 600w, ${MangalSutraModern800} 800w
            `}
            sizes={`(min-width: ${BREAKPOINT_MD}) 50vw, 100vw`}
            type="image/webp"
          />
          <source
            srcSet={`
              ${MangalSutraLegacy400} 400w, ${MangalSutraModern600} 600w, ${MangalSutraModern800} 800w
            `}
            sizes={`(min-width: ${BREAKPOINT_LG}) 33.3vw, 100vw`}
            type="image/webp"
          />
          <source
            srcSet={`
              ${MangalSutraModern400} 400w, ${MangalSutraLegacy600} 600w, ${MangalSutraLegacy800} 800w
            `}
            sizes={`(min-width: ${BREAKPOINT_MD}) 50vw, 100vw`}
            type="image/jpeg"
          />
          <source
            srcSet={`
              ${MangalSutraModern400} 400w, ${MangalSutraLegacy600} 600w, ${MangalSutraLegacy800} 800w
            `}
            sizes={`(min-width: ${BREAKPOINT_LG}) 33.3vw, 100vw`}
            type="image/jpeg"
          />
          <Image
            src={MangalSutraLegacy400}
            loading="lazy"
            width="400"
            alt="Piyushbhai Mehta performing a Hindu wedding ceremony"
          />
        </Picture>
        <Caption>Mangal Sutra Ceremony</Caption>
      </ImageWithCaption>
      <ImageWithCaption>
        <Picture>
          <source
            srcSet={`
              ${SonamKapoorLegacy400} 400w, ${SonamKapoorModern600} 600w, ${SonamKapoorModern800} 800w
            `}
            sizes={`(min-width: ${BREAKPOINT_MD}) 50vw, 100vw`}
            type="image/webp"
          />
          <source
            srcSet={`
              ${SonamKapoorLegacy400} 400w, ${SonamKapoorModern600} 600w, ${SonamKapoorModern800} 800w
            `}
            sizes={`(min-width: ${BREAKPOINT_LG}) 33.3vw, 100vw`}
            type="image/webp"
          />
          <source
            srcSet={`
              ${SonamKapoorModern400} 400w, ${SonamKapoorLegacy600} 600w, ${SonamKapoorLegacy800} 800w
            `}
            sizes={`(min-width: ${BREAKPOINT_MD}) 50vw, 100vw`}
            type="image/jpeg"
          />
          <source
            srcSet={`
              ${SonamKapoorModern400} 400w, ${SonamKapoorLegacy600} 600w, ${SonamKapoorLegacy800} 800w
            `}
            sizes={`(min-width: ${BREAKPOINT_LG}) 33.3vw, 100vw`}
            type="image/jpeg"
          />
          <Image
            src={SonamKapoorLegacy400}
            loading="lazy"
            width="400"
            alt="Piyushbhai Mehta and family with Sonam Kapoor"
          />
        </Picture>
        <Caption>With Sonam Kapoor</Caption>
      </ImageWithCaption>
      <ImageWithCaption>
        <Picture>
          <source
            srcSet={`
              ${KrishanAneetaLegacy400} 400w, ${KrishanAneetaModern600} 600w, ${KrishanAneetaModern800} 800w
            `}
            sizes={`(min-width: ${BREAKPOINT_MD}) 50vw, 100vw`}
            type="image/webp"
          />
          <source
            srcSet={`
              ${KrishanAneetaLegacy400} 400w, ${KrishanAneetaModern600} 600w, ${KrishanAneetaModern800} 800w
            `}
            sizes={`(min-width: ${BREAKPOINT_LG}) 33.3vw, 100vw`}
            type="image/webp"
          />
          <source
            srcSet={`
              ${KrishanAneetaModern400} 400w, ${KrishanAneetaLegacy600} 600w, ${KrishanAneetaLegacy800} 800w
            `}
            sizes={`(min-width: ${BREAKPOINT_MD}) 50vw, 100vw`}
            type="image/jpeg"
          />
          <source
            srcSet={`
              ${KrishanAneetaModern400} 400w, ${KrishanAneetaLegacy600} 600w, ${KrishanAneetaLegacy800} 800w
            `}
            sizes={`(min-width: ${BREAKPOINT_LG}) 33.3vw, 100vw`}
            type="image/jpeg"
          />
          <Image
            src={KrishanAneetaLegacy400}
            loading="lazy"
            width="400"
            alt="With Krishan &amp; Aneeta"
          />
        </Picture>
        <Caption>Wedding With Krishan &amp; Aneeta</Caption>
      </ImageWithCaption>
      <ImageWithCaption>
        <Picture>
          <source
            srcSet={`
              ${AnilKapoorLegacy400} 400w, ${AnilKapoorModern600} 600w, ${AnilKapoorModern800} 800w
            `}
            sizes={`(min-width: ${BREAKPOINT_MD}) 50vw, 100vw`}
            type="image/webp"
          />
          <source
            srcSet={`
              ${AnilKapoorLegacy400} 400w, ${AnilKapoorModern600} 600w, ${AnilKapoorModern800} 800w
            `}
            sizes={`(min-width: ${BREAKPOINT_LG}) 33.3vw, 100vw`}
            type="image/webp"
          />
          <source
            srcSet={`
              ${AnilKapoorModern400} 400w, ${AnilKapoorLegacy600} 600w, ${AnilKapoorLegacy800} 800w
            `}
            sizes={`(min-width: ${BREAKPOINT_MD}) 50vw, 100vw`}
            type="image/jpeg"
          />
          <source
            srcSet={`
              ${AnilKapoorModern400} 400w, ${AnilKapoorLegacy600} 600w, ${AnilKapoorLegacy800} 800w
            `}
            sizes={`(min-width: ${BREAKPOINT_LG}) 33.3vw, 100vw`}
            type="image/jpeg"
          />
          <Image
            src={AnilKapoorLegacy400}
            loading="lazy"
            width="400"
            alt="Piyushbhai Mehta and family with Anil Kapoor"
          />
        </Picture>
        <Caption>Anil Kapoor's home after Laxmi Poojan</Caption>
      </ImageWithCaption>
      <ImageWithCaption>
        <Picture>
          <source
            srcSet={`
              ${NehaRajanLegacy400} 400w, ${NehaRajanModern600} 600w, ${NehaRajanModern800} 800w
            `}
            sizes={`(min-width: ${BREAKPOINT_MD}) 50vw, 100vw`}
            type="image/webp"
          />
          <source
            srcSet={`
              ${NehaRajanLegacy400} 400w, ${NehaRajanModern600} 600w, ${NehaRajanModern800} 800w
            `}
            sizes={`(min-width: ${BREAKPOINT_LG}) 33.3vw, 100vw`}
            type="image/webp"
          />
          <source
            srcSet={`
              ${NehaRajanModern400} 400w, ${NehaRajanLegacy600} 600w, ${NehaRajanLegacy800} 800w
            `}
            sizes={`(min-width: ${BREAKPOINT_MD}) 50vw, 100vw`}
            type="image/jpeg"
          />
          <source
            srcSet={`
              ${NehaRajanModern400} 400w, ${NehaRajanLegacy600} 600w, ${NehaRajanLegacy800} 800w
            `}
            sizes={`(min-width: ${BREAKPOINT_LG}) 33.3vw, 100vw`}
            type="image/jpeg"
          />
          <Image
            src={NehaRajanLegacy400}
            loading="lazy"
            width="400"
            alt="Piyushbhai Mehta performing a Hindu wedding ceremony with Neha &amp; Rajan"
          />
        </Picture>
        <Caption>Wedding with Neha &amp; Rajan</Caption>
      </ImageWithCaption>
    </Section>
  );
}
