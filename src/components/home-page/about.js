import React from 'react';
import { css } from '@emotion/core';
import styled from '@emotion/styled';
import { px2rem } from '../../utils/styles';
import PortraitModern from '../../content/assets/about.webp';
import PortraitLegacy from '../../content/assets/piyushbhai-web.jpg';

const Section = styled.section`
  margin: 0 auto;
  padding: 0 3vw;
  /* max-width: ${px2rem(800)}; */
`;

const size = 85;

const Statement = styled.aside`
  background-color: white;
  margin-left: 50%;
  padding: 50px;
  margin-bottom: -${size}px;
  margin-top: calc(-1 * var(--about-heading-offset));
  position: relative;
  z-index: 2;
  font-family: 'Libre Baskerville', Georgia, 'Times New Roman', Times, serif;

  > * {
    max-width: 650px;
  }
`;

const Heading = styled.h2`
  /* background-color: white; */
  margin: 0;
  font-size: ${px2rem(58)};
  font-weight: normal;
  line-height: 1.3;
  /* margin-left: 50%; */
  /* padding: 50px; */
  /* margin-top: calc(-1 * var(--about-heading-offset)); */
  /* position: relative; */
  /* z-index: 2; */
`;

const Tagline = styled.p`
  color: var(--color-accent);
  text-transform: uppercase;
  font-weight: bold;
  font-family: TrajanPro;
  font-size: ${px2rem(30)};
  letter-spacing: 12px;
`;

const About = styled.div`
  /* overflow: hidden; */
  padding: 0 5vw 0 10vw;
  /* padding-bottom: 50px; */

  &:after {
    content: '';
    display: table;
    clear: both;
  }
`;

const MainText = styled.article`
  /* padding-left: 12vw; */
`;

const Picture = styled.picture`
  background: white;
  border: 20px solid white;
  float: right;
  margin: ${size}px 0 20px 20px;
  /* overflow: hidden; */
`;

const Portrait = styled.img`
  /* max-width: ${px2rem(600)}; */
`;

const Welcome = styled.p`
  border-left: 5px solid var(--color-accent);
  font-family: 'Libre Baskerville', Georgia, 'Times New Roman', Times, serif;
  font-size: ${px2rem(42)};
  padding: 15px 0 15px 30px;
  text-decoration: underline;
`;

const WelcomeText = styled.p`
  line-height: 2;
`;

const LordGanesha = styled.svg`
  fill: var(--color-accent);
  width: 100px;
  margin-top: -115px;
  margin-left: 10vw;
`;

export default function HomePageAbout() {
  return (
    <Section>
      <Statement>
        <Heading>Personalised Hindu wedding ceremonies</Heading>
        <Tagline>for your special day</Tagline>
      </Statement>

      <About>
        <Picture>
          {/* <source srcSet={PortraitModern} type="image/webp" /> */}
          <source srcSet={PortraitLegacy} type="image/jpeg" />
          <Portrait
            src={PortraitLegacy}
            alt="Piyushkumar Mehta - Hindu Wedding Priest (Piyushbhai)"
          />
        </Picture>
        <MainText>
          <LordGanesha viewBox="0 0 24 32">
            <path d="M9.656 9.177c-0.114-0.454-0.334-0.762-0.644-0.945s-0.716-0.244-1.199-0.2c0.134 0.401 0.335 0.718 0.628 0.92s0.693 0.29 1.215 0.225zM9.066 8.14c0.348 0.205 0.589 0.553 0.707 1.067 0 0.001 0 0.002 0 0.004s-0 0.003-0 0.004v-0c0 0.002 0.001 0.005 0.001 0.007 0 0.027-0.020 0.049-0.046 0.053l-0 0c-0.579 0.083-1.017-0.009-1.348-0.236s-0.549-0.586-0.69-1.038c-0.001-0.003-0.002-0.006-0.002-0.010l-0-0c-0-0.002-0-0.004-0-0.006 0-0.027 0.020-0.049 0.046-0.053l0-0c0.534-0.058 0.983 0.003 1.329 0.207z" />
            <path d="M8.934 7.794c0.329 0 0.594 0.255 0.594 0.569s-0.267 0.569-0.594 0.569-0.594-0.255-0.594-0.569 0.267-0.569 0.594-0.569z" />
            <path d="M8.904 7.964c0.196 0.010 0.352 0.171 0.352 0.369 0 0.204-0.165 0.369-0.369 0.369s-0.369-0.165-0.369-0.369c0-0 0-0 0-0v0c0.005-0.205 0.172-0.369 0.378-0.369 0.003 0 0.006 0 0.009 0h-0z" />
            <path d="M8.725 8.112c0.053 0.001 0.095 0.044 0.095 0.096s-0.043 0.097-0.097 0.097-0.096-0.043-0.097-0.096v0c0.001-0.053 0.044-0.097 0.097-0.097 0 0 0.001 0 0.001 0h-0zM9.056 8.249c0.050 0 0.091 0.041 0.091 0.091s-0.041 0.091-0.091 0.091c-0.050 0-0.091-0.041-0.091-0.091v0c0-0.050 0.041-0.091 0.091-0.091v0z" />
            <path d="M8.039 7.859c-0.009 0.008-0.021 0.012-0.034 0.012-0.029 0-0.053-0.024-0.053-0.053 0-0.024 0.015-0.044 0.037-0.050l0-0c0.181-0.101 0.396-0.16 0.625-0.16 0.073 0 0.145 0.006 0.214 0.018l-0.008-0.001c0.359 0.062 0.657 0.284 0.82 0.588l0.003 0.006c0.14 0.263 0.199 0.605 0.129 1.016-0.003 0.027-0.025 0.049-0.053 0.049-0.030 0-0.053-0.024-0.053-0.053 0-0.005 0.001-0.009 0.002-0.013l-0 0c0.066-0.386 0.012-0.705-0.118-0.948-0.151-0.282-0.422-0.483-0.742-0.537l-0.006-0.001c-0.057-0.010-0.123-0.015-0.189-0.015-0.211 0-0.409 0.055-0.581 0.15l0.006-0.003z" />
            <path d="M8.278 6.787c0.074-0.013 0.16-0.020 0.248-0.021h0.001c0.011-0 0.023-0 0.036-0 0.251 0 0.486 0.071 0.685 0.193l-0.006-0.003c0.218 0.135 0.392 0.321 0.51 0.541l0.004 0.008c0.018 0.036 0.035 0.078 0.047 0.122l0.001 0.005c0.053 0.168 0.372 0.661 0.52 0.632 0.259-0.258-0.037-0.67-0.214-0.876-0.028-0.029-0.057-0.057-0.086-0.085-0.197-0.203-0.434-0.367-0.698-0.479l-0.014-0.005c-0.189-0.079-0.409-0.125-0.639-0.125-0.052 0-0.104 0.002-0.155 0.007l0.007-0c-0.094 0.008-0.177 0.021-0.259 0.038l0.014-0.003c-0.254 0.059-0.477 0.143-0.686 0.253l0.016-0.007-0.010 0.006 0.010-0.006c0.193-0.087 0.418-0.155 0.652-0.193l0.015-0.002z" />
            <path d="M12.107 9.127c0.118-0.514 0.359-0.862 0.707-1.067s0.795-0.266 1.329-0.208c0.026 0.004 0.046 0.026 0.046 0.053 0 0.002-0 0.004-0 0.006l0-0c0 0.002 0 0.003 0 0.005s-0 0.004-0 0.005l0-0c-0.141 0.452-0.36 0.811-0.69 1.038s-0.769 0.32-1.348 0.236c-0.026-0.003-0.046-0.026-0.046-0.053 0-0.003 0-0.005 0.001-0.008l-0 0c-0-0.001-0-0.002-0-0.004s0-0.003 0-0.004l-0 0zM12.868 8.151c-0.31 0.183-0.53 0.492-0.644 0.946 0.521 0.064 0.917-0.022 1.215-0.226s0.494-0.519 0.628-0.919c-0.483-0.046-0.887 0.016-1.199 0.199z" />
            <path d="M12.946 7.714c-0.329 0-0.594 0.255-0.594 0.569s0.267 0.569 0.594 0.569 0.594-0.255 0.594-0.569-0.267-0.569-0.594-0.569z" />
            <path d="M12.976 7.884c-0.197 0.009-0.353 0.171-0.353 0.369 0 0.204 0.165 0.369 0.369 0.369s0.369-0.165 0.369-0.369c0-0 0-0 0-0v0c-0.005-0.205-0.172-0.369-0.378-0.369-0.003 0-0.006 0-0.009 0h0z" />
            <path d="M13.155 8.031c-0.053 0.001-0.095 0.044-0.095 0.096s0.043 0.097 0.097 0.097 0.096-0.043 0.097-0.096v0c-0.001-0.053-0.044-0.097-0.097-0.097-0 0-0 0-0.001 0h0zM12.823 8.168c-0.050 0-0.091 0.041-0.091 0.091s0.041 0.091 0.091 0.091c0.050 0 0.091-0.041 0.091-0.091v0c0-0.050-0.041-0.091-0.091-0.091v0z" />
            <path d="M13.891 7.685c0.015 0.010 0.024 0.026 0.024 0.045 0 0.030-0.024 0.053-0.053 0.053-0.007 0-0.015-0.002-0.021-0.004l0 0c-0.166-0.093-0.364-0.147-0.575-0.147-0.067 0-0.133 0.006-0.197 0.016l0.007-0.001c-0.164 0.028-0.309 0.090-0.434 0.179l0.003-0.002c-0.132 0.095-0.239 0.216-0.314 0.356l-0.003 0.006c-0.13 0.243-0.183 0.562-0.118 0.948 0 0.001 0 0.003 0 0.005 0 0.030-0.024 0.053-0.053 0.053-0.025 0-0.046-0.017-0.052-0.040l-0-0c-0.070-0.412-0.011-0.753 0.129-1.016 0.086-0.161 0.204-0.295 0.346-0.396l0.003-0.002c0.135-0.096 0.295-0.164 0.469-0.194l0.007-0.001c0.062-0.011 0.134-0.017 0.208-0.017 0.229 0 0.444 0.059 0.631 0.163l-0.007-0.003z" />
            <path d="M13.602 6.707c-0.074-0.012-0.16-0.020-0.247-0.021l-0.001-0c-0.012-0-0.025-0.001-0.039-0.001-0.25 0-0.483 0.070-0.681 0.191l0.006-0.003c-0.218 0.136-0.392 0.324-0.51 0.546l-0.004 0.008c-0.018 0.035-0.034 0.077-0.047 0.121l-0.001 0.005c-0.053 0.168-0.371 0.662-0.52 0.632-0.259-0.259 0.037-0.67 0.215-0.876 0.028-0.029 0.056-0.057 0.085-0.085 0.197-0.204 0.433-0.368 0.697-0.48l0.014-0.005c0.19-0.079 0.41-0.125 0.642-0.125 0.052 0 0.103 0.002 0.153 0.007l-0.007-0c0.094 0.009 0.178 0.021 0.26 0.039l-0.015-0.003c0.254 0.059 0.477 0.143 0.685 0.252l-0.016-0.008 0.010 0.006c-0.004-0.002-0.008-0.004-0.011-0.006l0 0c-0.193-0.087-0.418-0.155-0.652-0.192l-0.015-0.002z" />
            <path d="M11.423 11.319v0zM16.216 16.186c0.083 0.142 0.243 0.416 0.243 0.417l-0.243-0.417zM10.781 24.721c0.605 2.987 0.004 4.619-1.23 4.505-5.682-0.53-11.438-6.798-8.96-11.154 0.391 0.56 0.814 0.77 1.348 0.76-1.708 3.018 1.023 5.936 2.462 7.129 1.294 1.074 6.11 4.825 6.38-1.24zM11.034 8.342c0.258 0 0.467 0.209 0.467 0.467s-0.209 0.467-0.467 0.467c-0.258 0-0.467-0.209-0.467-0.467v0c0-0.258 0.209-0.467 0.467-0.467v0zM11.186 9.401c0 0 0 0 0 0 0.219 0 0.396 0.178 0.396 0.396s-0.178 0.396-0.396 0.396c-0.219 0-0.396-0.178-0.396-0.396v0c0-0.219 0.177-0.396 0.396-0.396h0zM11.337 10.351c0.001 0 0.001 0 0.002 0 0.177 0 0.32 0.143 0.32 0.32s-0.143 0.32-0.32 0.32c-0.177 0-0.32-0.143-0.32-0.32v0c0 0 0 0 0 0 0-0.176 0.142-0.319 0.318-0.32h0zM10.137 4.142c0.103 0.073 0.187 0.167 0.246 0.277l0.002 0.004c0.062 0.118 0.103 0.257 0.115 0.404l0 0.004v0.004l0.011 0.243c0.107 0.014 0.232 0.022 0.358 0.022 0.012 0 0.024-0 0.036-0l-0.002 0c0.205-0.004 0.403-0.029 0.593-0.073l-0.019 0.004 0.006-0.243v-0.006c0.013-0.127 0.054-0.241 0.118-0.341l-0.002 0.003c0.070-0.107 0.153-0.199 0.248-0.276l0.002-0.002 0.117 0.14c-0.082 0.067-0.153 0.145-0.21 0.232l-0.002 0.004c-0.047 0.073-0.079 0.16-0.088 0.253l-0 0.003-0.005 0.189c0.241-0.070 0.444-0.147 0.639-0.237l-0.028 0.012c0.030-0.014 0.064-0.021 0.101-0.021 0.137 0 0.248 0.111 0.248 0.248 0 0.101-0.060 0.187-0.146 0.226l-0.002 0.001c-0.232 0.11-0.506 0.208-0.79 0.281l-0.033 0.007-0.007 0.301c0.296-0.065 0.556-0.154 0.802-0.267l-0.024 0.010c0.030-0.014 0.065-0.022 0.101-0.022 0.137 0 0.248 0.111 0.248 0.248 0 0.101-0.060 0.187-0.146 0.226l-0.002 0.001c-0.286 0.132-0.618 0.24-0.965 0.308l-0.028 0.005-0.005 0.192v0.016c-0.051 0.301-0.31 0.527-0.621 0.527-0.002 0-0.003 0-0.005-0h0c-0.001 0-0.001 0-0.002 0-0.11 0-0.213-0.029-0.301-0.080l0.003 0.002c-0.161-0.096-0.274-0.258-0.3-0.448l-0-0.003v-0.011l-0.007-0.149c-0.419-0.047-0.8-0.138-1.162-0.269l0.035 0.011c-0.098-0.035-0.167-0.126-0.167-0.234 0-0.137 0.111-0.248 0.248-0.248 0.029 0 0.057 0.005 0.082 0.014l-0.002-0.001c0.27 0.099 0.588 0.177 0.916 0.221l0.024 0.003-0.015-0.299c-0.356-0.059-0.672-0.143-0.974-0.255l0.036 0.012c-0.098-0.035-0.167-0.126-0.167-0.234 0-0.137 0.111-0.248 0.248-0.248 0.029 0 0.057 0.005 0.082 0.014l-0.002-0.001c0.209 0.078 0.461 0.149 0.721 0.2l0.031 0.005-0.010-0.207c-0.009-0.124-0.043-0.238-0.096-0.34l0.002 0.005c-0.047-0.088-0.112-0.161-0.19-0.216l-0.002-0.001 0.105-0.149zM10.536 5.58l0.014 0.295q0.177 0.014 0.353 0.012c0.199-0.003 0.391-0.020 0.579-0.052l-0.022 0.003 0.007-0.299c-0.182 0.036-0.39 0.057-0.604 0.057-0.115 0-0.228-0.006-0.34-0.018l0.014 0.001zM10.574 6.374l0.005 0.117c0.018 0.137 0.097 0.252 0.208 0.319l0.002 0.001c0.060 0.035 0.133 0.055 0.21 0.055 0 0 0 0 0 0v0c0 0 0.001 0 0.001 0 0.221 0 0.405-0.16 0.443-0.371l0-0.003 0.003-0.15c-0.16 0.024-0.346 0.039-0.535 0.041l-0.003 0c-0.113 0-0.224 0-0.335-0.009zM11.073 7.154c0 0 0 0 0 0 0.105 0 0.189 0.085 0.189 0.189s-0.085 0.189-0.189 0.189c-0.105 0-0.189-0.085-0.189-0.189 0-0 0-0 0-0v0c0-0.104 0.085-0.189 0.189-0.189v0zM11.981 0.53c-1.331-0.235-2.521-0.057-3.545 0.617 1.088-1.174 2.252-1.563 3.545-0.617zM14.446 2.217c-2.954-0.52-5.598-0.126-7.87 1.372 2.416-2.607 5-3.47 7.87-1.372zM15.001 3.938c-3.084-0.667-5.846-0.366-8.219 1.103 2.523-2.621 5.222-3.414 8.219-1.103zM5.479 10.283c-1.242-0.979-2.322-1.997-2.206-3.309 0.864 0.35 1.787 0.225 2.793-0.587-0.596 1.118-0.82 2.402-0.587 3.896zM5.828 12.514c-0.061-1.931-3.769-3.695-2.866-6.137 1.493 0.64 2.5 0.223 3.042-0.96-1.543 0.366-2.282-0.151-3.159-0.555-0.594-0.274-1.249-0.493-2.259-0.35 1.535 1 0.54 2.338 1.291 4.018 0.299 0.666 1.003 1.235 2.069 2.065 0.267 0.208 0.556 0.432 0.869 0.678 0.251 0.199 0.57 0.587 0.787 0.943 0.088 0.135 0.164 0.29 0.22 0.455l0.004 0.015c0.003-0.036 0.005-0.079 0.005-0.122 0-0.017-0-0.034-0.001-0.051l0 0.002zM18.57 15.699c-0.102 0.065-1.048 0.701 0.118 1.452 1.206 0.777 3.839 0.231 4.59-2.314 0.049-0.166 0.006-1.338-0.403-0.377-0.158 0.371-0.908 1.608-1.411 1.423-0.183-0.067-0.205-0.457 0.065-0.649 1.355-0.972-0.645-2.209-0.857-2.739-0.080-0.198-1.986 0.829-1.986 1.904 0 0.722 1.069 0.538-0.117 1.3zM16.688 9.634c0.077-1.31-0.256-2.586-1.032-3.825 0.894 0.573 1.822 0.738 2.811 0.196 0.015 1.6-0.795 2.671-1.779 3.629zM16.456 19.722c1.286-1.172 1.081-2.587 0.315-3.93-0.622-1.089-2.149-2.481-2.59-3.665-0.857-2.3 1.019-2.581 0.118-7.537 0.326 0.318 0.592 0.695 0.78 1.116l0.009 0.023c0.848 2.005-0.755 4.144-0.256 6.476 0.522 1.617 4.607 4.735 2.19 7.134-0.305 0.293-0.651 0.547-1.027 0.752l-0.025 0.013c0.181-0.124 0.34-0.25 0.489-0.385l-0.004 0.003zM16.782 11.729c-0.243-1.895 3.187-4.164 1.899-6.416-0.901 0.549-1.668 0.631-2.295 0.332-0.374-0.179-0.668-0.481-0.898-0.823 1.6 0.133 2.258-0.483 3.072-1.006 0.062-0.040 0.125-0.080 0.189-0.118 0.405-0.255 0.882-0.436 1.394-0.511l0.020-0.002c0.179-0.027 0.386-0.044 0.598-0.046l0.002-0c-1.298 1.132-0.525 1.859-0.534 3.204-0 0.324-0.046 0.637-0.13 0.934l0.006-0.024c-0.005 0.018-0.011 0.036-0.016 0.054-0.21 0.675-0.817 1.326-1.728 2.268-0.234 0.242-0.487 0.503-0.76 0.79-0.188 0.198-0.403 0.536-0.562 0.869-0.027 0.057-0.053 0.113-0.076 0.169-0.066 0.142-0.118 0.308-0.149 0.481l-0.002 0.012c-0.012-0.045-0.023-0.101-0.030-0.159l-0.001-0.008zM14.158 14.353c0.116 0.065 0.231 0.13 0.346 0.195 0.213 0.121 0.424 0.244 0.632 0.375 0.469 0.304 0.888 0.605 1.167 1.102 0.030 0.076 0.097 0.194 0.137 0.271 0.025 0.047 0.050 0.104 0.073 0.163l0.004 0.011c0.008 0.018 0.015 0.038 0.019 0.059l0 0.001c0.002 0.004 0.003 0.009 0.003 0.014 0 0.002-0 0.004-0 0.005l0-0c0 0.001 0 0.002 0 0.003s-0 0.002-0 0.003l0-0c0 0 0 0.001 0 0.002s-0 0.001-0 0.002v-0c-0 0-0 0.001-0 0.001s0 0.001 0 0.001v-0c0.004 0.010 0.007 0.021 0.008 0.034l0 0c-0.001-0.012-0.005-0.023-0.011-0.033l0 0h-0.005c-0.002-0-0.005-0.001-0.006-0.002l0 0c-0.007 0-0.014-0.010-0.017-0.011-0.017-0.013-0.032-0.028-0.045-0.045l-0-0.001c-0.042-0.045-0.083-0.093-0.12-0.143l-0.003-0.004c-0.021-0.030-0.076-0.109-0.122-0.17-0.019-0.027-0.039-0.051-0.061-0.073l0 0c-0.239-0.302-0.52-0.513-0.831-0.704-0.115-0.071-0.235-0.137-0.358-0.208-0.542-0.286-1.092-0.54-1.628-0.839-0.312-0.174-0.579-0.352-0.832-0.549l0.014 0.011c-0.246-0.193-0.462-0.407-0.65-0.644l-0.006-0.008c-0.229-0.324-0.811-1.612-0.449-1.855 0.003 0.002 0.005 0.005 0.006 0.009l0 0c0.048 0.088 0.274 0.802 0.331 0.926 0.128 0.248 0.275 0.461 0.446 0.654l-0.003-0.003c0.206 0.226 0.428 0.43 0.669 0.611l0.012 0.009c0.224 0.169 0.446 0.32 0.684 0.467 0.198 0.123 0.397 0.242 0.599 0.36zM7.463 20.448c-1.274-1.308-1.016-4.84 2.601-3.54-0.077 0.011-0.15 0.023-0.222 0.038-2.491 0.503-1.77 3.127 0.193 4.001 1.783 0.793 4.732-0.121 5.152-1.619 1.258-2.843-6.12-3.409-7.93-6.705-1.244-2.266-1.036-4.756-0.79-7.009l0.002-0.021c-0.012 0.231-0.014 0.471-0.006 0.719 0.066 2.226 0.894 5.012 2.45 6.56 2.12 2.11 4.949 2.65 6.399 3.777 0.601 0.467 0.966 1.036 0.943 1.86 0.023 0.736-0.357 1.359-0.978 1.847-0.963 0.759-2.505 1.196-4.009 1.239-1.516 0.043-2.994-0.315-3.805-1.148zM11.579 19.768c0.123 0 0.222 0.052 0.222 0.116s-0.1 0.116-0.222 0.116-0.223-0.052-0.223-0.116 0.1-0.116 0.223-0.116zM15.43 28.165c-0.647 0.306-1.337 0.214-2.055-0.133 0.476 0.511 0.754 1.048 0.756 1.619 0.696-0.195 1.185-0.626 1.299-1.486zM10.474 29.562c1.751 1.247 2.498-0.8 0.836-2.535 4.351 2.149 1.124 6.134-0.836 2.535zM12.253 27.222c4.314 0.985 8.979-0.745 10.708-3.4 1.917-2.945-0.050-7.365-3.538-5.656 3.789 0.422 5.002 4.601 0.691 7.179-5.122 3.061-7.483 1.173-8.662-0.56 0.028 1.21 0.203 2.177 0.801 2.438zM18.338 19.128c-2.231 5.705-11.545 5.781-13.432-0.267 1.022 8.225 13.228 6.301 13.432 0.266zM5.951 15.612c-1.402-0.118-1.916 3.214-5.382 1.512 3.306 3.214 4.095-1.044 5.382-1.512zM3.527 14.841c0.274 0.867 0.939-1.799 1.311-0.402 0.403 1.514-2.299 4.045-4.155 1.642-1.542-1.996 2.248-5.618 2.773-2.783 0.025 0.133 0.072 1.546 0.071 1.543z" />
            <path d="M16.428 29.654c0.041 0.017-0.226-0.010-0.139 0.069 0.769 0.696 2.031 0.653 2.108 0.719 0.494 0.427-0.984 0.040 0.174 0.833 0.597 0.409-0.501 0.643-0.516 0.64 0.033 0 0.045 0.077 0.076 0.077 0.562 0.015 0.846 0.063 0.846-0.481 0-0.065 1.557 0.591 1.528-0.72-0.020-0.878 0.401-1.636 0.799-2.156-1.162 0.835-0.707 2.607-1.128 2.59-1.044-0.043-0.404 0.176-0.404-0.866 0-0.881-0.627-1.405-1.445-1.405-0.319 0-0.231-0.358-0.231-0.358 0.875-0.146 0.251-1.132-0.379-0.217 0-0.621-0.299-0.53-0.356-0.465-0.452 0.509 0.069 0.699-0.009 0.826-0.034 0.056-0.388 0.217-0.647 0.19 0 0.396 0.941 0.46 0.984 0.71 0.148 0.861-1.049 0.101-1.26 0.014zM17.311 28.926c0.036 0 0.065 0.021 0.065 0.046s-0.029 0.046-0.065 0.046-0.065-0.021-0.065-0.046 0.029-0.046 0.065-0.046z" />
          </LordGanesha>
          <Welcome>Jai Shree Krishna,</Welcome>
          <WelcomeText>
            I&apos;m Piyushbhai Mehta and I perform Hindu wedding ceremonies. I focus on
            creating a spiritual atmosphere through silent ceremonies whereby you can
            connect emotionally to God and your guests can observe and participate in your
            special day.
          </WelcomeText>

          <button
            type="button"
            css={css`
              background: #cd413c;
              border: none;
              color: white;
              cursor: pointer;
              font-size: 14px;
              letter-spacing: 2px;
              margin-top: 10px;
              padding: 11px 28px;
              text-transform: uppercase;
            `}
          >
            Get in touch
          </button>
        </MainText>
      </About>
      <div
        css={css`
          background-color: #f2f2f2;
          padding: 20px 20px 20px 220px;
          margin-top: -100px;
        `}
      >
        <p
          css={css`
            max-width: 40vw;
          `}
        >
          <span
            css={css`
              border-left: 5px solid var(--color-accent);
              font-family: 'Libre Baskerville', Georgia, 'Times New Roman', Times, serif;
              font-size: ${px2rem(42)};
              display: block;
              padding-left: 30px;
              margin: 20px 0;
            `}
          >
            Sacred verses in Sanskrit
          </span>
          are chanted as I explain in easy to understand English the significance of each
          stage of the ceremony{' '}
          <em>(I can also explain in Gujarati and Hindi if required)</em>.
        </p>
        <p
          css={css`
            max-width: 40vw;
          `}
        >
          As each family can have different subtle traditions particularly around the
          ceremony I am more than happy to adjust to meet your needs.
        </p>
      </div>
    </Section>
  );
}
