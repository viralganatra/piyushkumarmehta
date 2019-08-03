import React from 'react';
import { css } from '@emotion/core';
import styled from '@emotion/styled';
import bg from '../../content/assets/bg-faded.jpg';
import { px2rem } from '../../utils/styles';

const borderBehindText = css`
  display: table;
  white-space: nowrap;
  overflow: hidden;
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
  font-family: TrajanPro, Georgia, 'Times New Roman', Times, serif;
  text-shadow: 1px 1px 2px rgba(0, 0, 0, 0.9);
  text-transform: uppercase;
`;

const Masthead = styled.header`
  position: relative;
  z-index: 1;
  height: 100vh;
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

export default function HomePageIntro() {
  return (
    <Section>
      <Masthead>
        <picture>
          <HeroImage
            src={bg}
            alt="Piyushkumar Mehta - Modern Hindu Wedding Priest (Piyushbhai Mehta)"
          />
        </picture>
        <Heading>Piyushkumar Mehta</Heading>
        <TagLine>Hindu Wedding Priest</TagLine>
      </Masthead>

      <nav
        css={css`
          position: absolute;
          top: 95px;
          left: 0;
          width: 100%;
        `}
      >
        <ul
          css={css`
            display: flex;
            justify-content: space-between;
            margin: 0;
            padding: 0;
            list-style: none;
            padding: 20px;

            a {
              color: white;
              text-decoration: none;
              padding: 20px;
              font-size: 24px;
            }
            li {
              position: relative;
              z-index: 2;
            }
            li:first-of-type {
              margin-left: 50px;
            }
            li:last-of-type {
              margin-right: 50px;
            }
          `}
        >
          <li>
            <a href="#about">About</a>
          </li>
          <li>
            <a href="#contact">Contact</a>
          </li>
        </ul>
      </nav>
    </Section>
  );
}
