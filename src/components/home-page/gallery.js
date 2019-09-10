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
import Katha1 from 'images/DSC289.jpg';
import Katha2 from 'images/DSC290.jpg';
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
        <Caption>With Anil Kapoor</Caption>
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
          <Image
            src={Katha1}
            // loading="lazy"
            alt="Piyushbhai Mehta and family with Sonam Kapoor"
          />
        </Picture>
        <Caption>Bhagwat Saptah - Florida</Caption>
      </ImageWithCaption>
      <ImageWithCaption>
        <Picture>
          <Image
            src={Katha2}
            // loading="lazy"
            alt="Piyushbhai Mehta in Coral Springs Florida"
          />
        </Picture>
        <Caption>Bhagwat Saptah - Florida</Caption>
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
        <Caption>With Anil Kapoor</Caption>
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
    </Section>
  );
}
