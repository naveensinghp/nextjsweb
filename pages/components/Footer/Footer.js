import Link from 'next/link';
import React from 'react';
import styled from 'styled-components';
import { UNIT,COLORS } from '../../constants';



const Footer = ({theme}) => {
    return (
      
      <FooterStart>
        <FooterContent>
          <CopyrightArea>
              <Line>
                  <h4>Thanks For Visit</h4>
                  <strong>© 2022-present NaveenSingh.</strong> All rights reserved.
              </Line>
          </CopyrightArea>
        </FooterContent>
      </FooterStart>
      
    )
}

const OuterWrapper = styled.div`
  width: 100%;
  //min-height: 100vh;
  padding-left: 25%;
  padding-right: 20%;
  box-sizing: border-box;
  overflow: hidden;
`;

const FooterContent = styled.div`
  // margin-top: auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: ${UNIT * 4}px 0px;
  background-color: ${COLORS.black};

`;

const FooterStart = styled.div`
margin-top: auto;
`


const Line = styled.div`
text-align: center;
`;

const Spacer = styled.span`
    width: 8;
    height: 8;
    display: inline-block;
`;

const CopyrightArea = styled.div`
  display: inline-block;
  font-size: 14px;
  color: ${COLORS.white};

  @media (max-width: 600px) {
    margin-top: ${UNIT * 4}px;
    text-align: center;
  }
`;
export default Footer;