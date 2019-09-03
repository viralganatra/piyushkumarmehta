import React from 'react';
import PropTypes from 'prop-types';
import { css } from '@emotion/core';
import styled from '@emotion/styled';
import MainImageLegacy from 'content/assets/bg-intro-faded.jpg';
import MainImageModern from 'content/assets/bg-intro-faded.webp';
import { px2rem } from 'utils/styles';
import { scrollToRef } from 'utils/misc';

const borderBehindText = css`
  display: table;
  white-space: nowrap;
  overflow: hidden;
  line-height: 1;
  width: 100%;

  &::before,
  &::after {
    border-top: 1px solid var(--color-bg);
    content: '';
    display: table-cell;
    position: relative;
    top: 0.5em;
    width: 45%;
    right: 1.5%;
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
  z-index: 1;
  height: calc(100vh + var(--about-heading-offset));
  position: relative;
  width: 100%;
`;

const Heading = styled.h1`
  margin: 0;
  padding-top: 50px;
  padding-bottom: 15px;
  text-align: center;
  color: var(--color-bg);
  font-weight: normal;
  font-size: ${px2rem(72)};
  ${borderBehindText};
`;

const TagLine = styled.h2`
  margin: 0;
  text-align: center;
  color: var(--color-bg);
  font-size: ${px2rem(40)};
  font-weight: normal;
  ${borderBehindText};
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
  position: absolute;
  top: 85px;
  left: 0;
  width: 100%;

  ul {
    display: flex;
    justify-content: space-between;
    margin: 0;
    padding: 0;
    list-style: none;
    padding: 1px 20px;
  }
  li {
    position: relative;
    z-index: 2;

    &:first-of-type {
      margin-left: 50px;
    }
    &:last-of-type {
      margin-right: 50px;
    }
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
