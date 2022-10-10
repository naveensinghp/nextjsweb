import Link from 'next/link';
import React from 'react';
import styled from 'styled-components';
import { UNIT,COLORS } from '../../constants';



const Footer = ({theme}) => {
    return (
      <OuterWrapper>
        <Row>
          <Col>
              <h3>naveensingh.dev</h3>  
              <p>Thanks for visiting</p>
              <p>© 2022-present NaveenSingh. All rights reserved.</p>
          </Col>
          <Col>
            <p>ITPL Road</p>
            <p>Whitefield Bangalore</p>
            <p>Karanataka, PIN 50034, India</p>
            <p>naveensingh.mtp@gmail.com</p>
            <h4>+91 - 0239940448</h4>
          </Col>
          <Col>
          <Ul>
              <li>
                <a href="">Uses</a>
              </li>
              <li>
                    <a href="">Gear</a>
              </li>
              <li>
                    <a href="">Bookmarks</a>
              </li>
              <li>
                  <a href="">Books</a>
              </li>
          </Ul>
            {/* <ul>
                <li>
                    <a href="">Uses</a>
                </li>
                <li>
                    <a href="">Gear</a>
                </li>
                <li>
                    <a href="">Bookmarks</a>
                </li>
                <li>
                    <a href="">Books</a>
                </li>
            </ul> */}
          </Col>
        </Row>
      </OuterWrapper>
      // <FooterStart>
      //   <FooterContent>
      //     <CopyrightArea>
      //         <Line>
      //             <h4>Thanks For Visit</h4>
      //             <strong>© 2022-present NaveenSingh.</strong> All rights reserved.
      //         </Line>
      //     </CopyrightArea>
      //   </FooterContent>
      // </FooterStart>
      
    )
}

const OuterWrapper = styled.div`
  width: 100%;
  position: absolute;
  bottom: 0;
  background-color: #c7e4f5;
  color: black;
  padding: 100px 0 30px;
  font-size: 14px;
  line-height: 30px;
`;

const Ul = styled.ul`
  & li {
    list-style: none;
  }
  & a {
    text-decoration: none;
    color: black;
  }

`

const Row = styled.div`
  width: 85%;
  margin: auto;
  display: flex;
  flex-wrap: wrap;
  align-items: flex-start;
  justify-content: center;

`;

const Col = styled.div`
  flex-basis: 25%;
  padding: 10px;

  & h3{
    width: fit-content;
    margin-bottom: 40px;
    position: relative;
  }

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