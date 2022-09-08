import Link from 'next/link';
import React from 'react';
import styled from 'styled-components';
import { BREAKPOINTS,COLORS } from '../../constants';



export default ({ children, ...delegated }) => (
    <Wrapper {...delegated}>
      <MainText> {children}</MainText>
    </Wrapper>
  );
 
  const Wrapper = styled(Link)`
  position: relative;
  font-weight: 600;
  cursor: pointer;
  @media ${BREAKPOINTS.smMin} {
    text-decoration: none;
    display: inline-block;

    &:after {
      content: '';
      position: absolute;
      left: -2px;
      right: -2px;
      bottom: 0;
      height: 2px;
      background-color: ${COLORS.pink[500]};
      border-radius: 2px;
      transition: transform 250ms 200ms, opacity 450ms 200ms;
    }

    &:hover:after {
      transform: translateY(-0.25em);
      opacity: 0;
      transition: transform 250ms, opacity 450ms;
    }
  }
`;


const MainText = styled.span`
  display: inline-block;
  position: relative;
  z-index: 1;
  color: ${COLORS.pink};

  @media ${BREAKPOINTS.sm} {
    display: inline;
    text-decoration: underline;
    color: red;
  }

`;

const HoverText = styled.span`
  display: inline-block;
  position: absolute;
  z-index: 2;
  left: 0;
  user-select: none;
  clip-path: polygon(0% 100%, 100% 100%, 100% 100%, 0% 100%);

  transition: clip-path 500ms;
  @media ${BREAKPOINTS.sm} {
    display: none;
  }
`;