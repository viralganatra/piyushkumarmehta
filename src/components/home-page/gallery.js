import React from 'react';
import { css } from '@emotion/core';
import styled from '@emotion/styled';
import { px2rem } from '../../utils/styles';
import AnilKapoor from '../../content/assets/anil-kapoor.jpg';
import SonamKapoor from '../../content/assets/sonam-kapoor.jpg';
import Katha1 from '../../content/assets/DSC289.jpg';
import Katha2 from '../../content/assets/DSC290.jpg';

const Section = styled.section`
  display: flex;
  flex-wrap: wrap;
  padding: 20px 10vw 0 10vw;
`;

const ImageWithCaption = styled.figure`
  position: relative;
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
  width: 350px;
  height: 220px;
  object-fit: cover;
  display: block;
`;

const Heading = styled.h2`
  margin: 0;
  font-size: ${px2rem(58)};
  font-weight: normal;
  line-height: 1.3;
  display: none;
`;

export default function HomePageGallery() {
  return (
    <Section>
      <Heading>Gallery</Heading>
      <ImageWithCaption>
        <picture>
          <Image
            src={AnilKapoor}
            loading="lazy"
            alt="Piyushbhai Mehta and family with Anil Kapoor"
          />
        </picture>
        <Caption>With Anil Kapoor</Caption>
      </ImageWithCaption>
      <ImageWithCaption>
        <picture>
          <Image
            src={SonamKapoor}
            loading="lazy"
            alt="Piyushbhai Mehta and family with Sonam Kapoor"
            css={css`
              /* height: 400px; */
            `}
          />
        </picture>
        <Caption>With Sonam Kapoor</Caption>
      </ImageWithCaption>
      <ImageWithCaption>
        <picture>
          <Image
            src={Katha1}
            loading="lazy"
            alt="Piyushbhai Mehta and family with Sonam Kapoor"
            css={css`
              /* height: 450px; */
            `}
          />
        </picture>
        <Caption>Bhagwat Saptah - Florida</Caption>
      </ImageWithCaption>
      <ImageWithCaption>
        <picture>
          <Image
            src={Katha2}
            loading="lazy"
            alt="Piyushbhai Mehta in Coral Springs Florida"
            css={css`
              /* height: 400px; */
            `}
          />
        </picture>
        <Caption>Bhagwat Saptah - Florida</Caption>
      </ImageWithCaption>
      <ImageWithCaption>
        <picture>
          <Image
            src={AnilKapoor}
            loading="lazy"
            alt="Piyushbhai Mehta and family with Anil Kapoor"
          />
        </picture>
        <Caption>With Anil Kapoor</Caption>
      </ImageWithCaption>
      <ImageWithCaption>
        <picture>
          <Image
            src={SonamKapoor}
            loading="lazy"
            alt="Piyushbhai Mehta and family with Sonam Kapoor"
            css={css`
              /* height: 400px; */
            `}
          />
        </picture>
        <Caption>With Sonam Kapoor</Caption>
      </ImageWithCaption>
    </Section>
  );
}
