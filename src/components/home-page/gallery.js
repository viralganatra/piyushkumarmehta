import React from 'react';
import styled from '@emotion/styled';
import AnilKapoor from 'images/anil-kapoor.jpg';
import SonamKapoor from 'images/sonam-kapoor.jpg';
import Katha1 from 'images/DSC289.jpg';
import Katha2 from 'images/DSC290.jpg';
import { px2rem, constrainLayout, SectionHeading } from 'utils/styles';
import { media } from 'utils/breakpoints';

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
          <Image
            src={AnilKapoor}
            loading="lazy"
            alt="Piyushbhai Mehta and family with Anil Kapoor"
          />
        </Picture>
        <Caption>With Anil Kapoor</Caption>
      </ImageWithCaption>
      <ImageWithCaption>
        <Picture>
          <Image
            src={SonamKapoor}
            loading="lazy"
            alt="Piyushbhai Mehta and family with Sonam Kapoor"
          />
        </Picture>
        <Caption>With Sonam Kapoor</Caption>
      </ImageWithCaption>
      <ImageWithCaption>
        <Picture>
          <Image
            src={Katha1}
            loading="lazy"
            alt="Piyushbhai Mehta and family with Sonam Kapoor"
          />
        </Picture>
        <Caption>Bhagwat Saptah - Florida</Caption>
      </ImageWithCaption>
      <ImageWithCaption>
        <Picture>
          <Image
            src={Katha2}
            loading="lazy"
            alt="Piyushbhai Mehta in Coral Springs Florida"
          />
        </Picture>
        <Caption>Bhagwat Saptah - Florida</Caption>
      </ImageWithCaption>
      <ImageWithCaption>
        <Picture>
          <Image
            src={AnilKapoor}
            loading="lazy"
            alt="Piyushbhai Mehta and family with Anil Kapoor"
          />
        </Picture>
        <Caption>With Anil Kapoor</Caption>
      </ImageWithCaption>
      <ImageWithCaption>
        <Picture>
          <Image
            src={SonamKapoor}
            loading="lazy"
            alt="Piyushbhai Mehta and family with Sonam Kapoor"
          />
        </Picture>
        <Caption>With Sonam Kapoor</Caption>
      </ImageWithCaption>
    </Section>
  );
}
