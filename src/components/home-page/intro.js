import React from 'react';
import PropTypes from 'prop-types';
import { css } from '@emotion/core';
import styled from '@emotion/styled';
import MainImageLegacy from 'content/assets/bg-intro-faded.jpg';
import MainImageModern from 'content/assets/bg-intro-faded.webp';
import { px2rem, responsiveFontSize } from 'utils/styles';
import { scrollToRef } from 'utils/misc';
import { media } from 'utils/breakpoints';

const borderBehindText = css`
  display: table;
  line-height: 1;
  overflow: hidden;
  white-space: nowrap;
  width: 100%;

  &::before,
  &::after {
    border-top: 1px solid var(--color-bg);
    content: '';
    display: table-cell;
    position: relative;
    right: 1.5%;
    top: 0.5em;
    width: 45%;
  }
  &::after {
    left: 1.5%;
    right: auto;
  }
`;

const fontStyles = css`
  font-family: var(--font-family-intro);
  text-shadow: 1px 1px 2px rgba(0, 0, 0, 0.9);
  text-transform: uppercase;
`;

const Section = styled.section`
  ${fontStyles};
`;

const Masthead = styled.header`
  height: 100vh;
  position: relative;
  width: 100%;
  z-index: 1;

  ${media.above('sm')`
    height: calc(100vh + var(--about-heading-offset));
  `};
`;

const Heading = styled.h1`
  color: var(--color-bg);
  font-weight: normal;
  margin: 0;
  padding-bottom: 15px;
  padding-top: 50px;
  text-align: center;

  ${responsiveFontSize('0.58rem')}
  ${borderBehindText};

  ${media.above('sm')`
    ${responsiveFontSize('1.1rem')}
  `};
  ${media.above('md')`
    ${responsiveFontSize('1.45rem')}
  `};
  ${media.above('xl')`
    font-size: ${px2rem(72)};
  `};
`;

const TagLine = styled.h2`
  ${responsiveFontSize('0.35rem')};

  color: var(--color-bg);
  font-weight: normal;
  margin: 0;
  text-align: center;

  ${borderBehindText};

  ${media.above('sm')`
    ${responsiveFontSize('0.6rem')}
  `};
  ${media.above('md')`
    ${responsiveFontSize('0.7rem')};
  `};
  ${media.above('xl')`
    font-size: ${px2rem(40)};
  `}
`;

const HeroImage = styled.img`
  height: 100%;
  left: 0;
  object-fit: cover;
  position: absolute;
  top: 0;
  width: 100%;
  z-index: -1;
`;

const Navigation = styled.nav`
  left: 0;
  position: absolute;
  top: 85px;
  width: 100%;

  ${media.below('lg')`
    display: none;
  `};

  ul {
    display: flex;
    justify-content: space-between;
    list-style: none;
    margin: 0;
    padding: 1px 0;

    ${media.above('xl')`
      padding-left: 20px;
      padding-right: 20px;
    `};
  }
  li {
    position: relative;
    z-index: 2;

    ${media.above('xl')`
      &:first-of-type {
        margin-left: 50px;
      }
      &:last-of-type {
        margin-right: 50px;
      }
    `};
  }
  button {
    ${fontStyles};
    background: none;
    border: 1px solid transparent;
    color: white;
    cursor: pointer;
    font-size: 24px;
    height: 72px;
    padding: 20px;

    &:focus {
      border-color: var(--color-bg);
      outline: none;
    }
  }
`;

export default function HomePageIntro({ aboutSectionRef, contactSectionRef }) {
  return (
    <Section>
      <Masthead>
        <picture>
          <source srcSet={MainImageModern} type="image/webp" />
          <source srcSet={MainImageLegacy} type="image/jpeg" />
          <HeroImage
            src={MainImageLegacy}
            alt="Piyushkumar Mehta - Modern Hindu Wedding Priest (Piyushbhai)"
          />
        </picture>
        <Heading>Piyushkumar Mehta</Heading>
        <TagLine>Hindu Wedding Priest</TagLine>
      </Masthead>

      <Navigation>
        <ul>
          <li>
            <button type="button" onClick={() => scrollToRef(aboutSectionRef)}>
              About
            </button>
          </li>
          <li>
            <button type="button" onClick={() => scrollToRef(contactSectionRef)}>
              Contact
            </button>
          </li>
        </ul>
      </Navigation>
    </Section>
  );
}

HomePageIntro.propTypes = {
  aboutSectionRef: PropTypes.PropTypes.shape({ current: PropTypes.elementType })
    .isRequired,
  contactSectionRef: PropTypes.shape({ current: PropTypes.elementType }).isRequired,
};
