import Link from 'next/link';
import React from 'react';
import styled from 'styled-components';
import { UNIT,COLORS, BREAKPOINTS } from '../../constants';
import { FaTwitter,FaGithub,FaLinkedin  } from 'react-icons/fa';



const Footer = ({theme}) => {
    return (
      <DesktopOnly>
      <OuterWrapper>
        <Row>
          <Col>
              <h3>naveensingh.dev</h3>
              <Soical>
                  <FaTwitter size={16} />
                  <FaGithub size={16} />
                  <FaLinkedin size={16}/>
              </Soical>  
              {/* <b>Thanks for visiting!</b> */}
              <p style={{fontSize: '13px',marginTop: '2.5rem'}}>© 2022-present NaveenSingh. All rights reserved.</p>
          </Col>
         
          <Col>
            {/* <p>ITPL Road</p>
            <p>Whitefield Bangalore</p>
            <p>Karanataka, PIN 50034, India</p>
            <p>naveensingh.mtp@gmail.com</p>
            <h4>+91 - 0239940448</h4> */}
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
          </Col>
        </Row>
      </OuterWrapper>
      </DesktopOnly>
    )
}

const DesktopOnly = styled.span`
  @media ${BREAKPOINTS.sm} {
    display: none;
  }
`;

const Soical = styled.div`
  display: flex;
  justify-content: flex-start;
  gap: 16px;
  cursor: pointer;
`;

const OuterWrapper = styled.div`
  width: 100%;
  position: absolute;
  bottom: 0;
  background-color: #c7e4f5;
  color: black;
  padding: 40px 0 20px;
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
  padding: 10px 100px;

  & h3{
    width: fit-content;
    margin-bottom: 10px;
    position: relative;
  }

`;

export default Footer;