import React from 'react';
import { css } from '@emotion/core';
import styled from '@emotion/styled';
import MainImageLegacy from '../../content/assets/bg-faded.jpg';
import MainImageModern from '../../content/assets/bg-faded.webp';
import { px2rem } from '../../utils/styles';

const borderBehindText = css`
  display: table;
  white-space: nowrap;
  overflow: hidden;
  line-height: 1;
  width: 100%;

  &::before,
  &::after {
    border-top: 1px solid #fff;
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

const Section = styled.section`
  font-family: var(--font-family-intro);
  text-shadow: 1px 1px 2px rgba(0, 0, 0, 0.9);
  text-transform: uppercase;
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
  color: #fff;
  font-weight: normal;
  font-size: ${px2rem(72)};
  ${borderBehindText};
`;

const TagLine = styled.h2`
  margin: 0;
  text-align: center;
  color: #fff;
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
    padding: 20px;
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
  a {
    color: white;
    text-decoration: none;
    padding: 20px;
    font-size: 24px;
  }
`;

export default function HomePageIntro() {
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
            <a href="#about">About</a>
          </li>
          <li>
            <a href="#contact">Contact</a>
          </li>
        </ul>
      </Navigation>
    </Section>
  );
}
