import Link from 'next/link';
import React from 'react';
import styled from 'styled-components';
import { UNIT,COLORS } from '../../constants';



const Footer = ({theme}) => {
    return (
        <Wrapper>
        <CopyrightArea>
            <Line>
                <strong>© 2022-present NaveenSingh.</strong> All rights reserved.
            </Line>
            
        </CopyrightArea>
    </Wrapper>
    )
}

const Wrapper = styled.div`
  padding: ${UNIT * 4}px 0px;
  background-color: ${COLORS.black};

`;

const Line = styled.div``;

const Spacer = styled.span`
    width: 8;
    height: 8;
    display: inline-block;
`;

const CopyrightArea = styled.div`
  display: inline-block;
  text-align: right;
  font-size: 14px;
  color: ${COLORS.white};

  @media (max-width: 600px) {
    margin-top: ${UNIT * 4}px;
    text-align: center;
  }
`;
export default Footer;