import Link from 'next/link';
import styled from 'styled-components';
import { COLORS,BREAKPOINTS } from '../../constants'
import { useRouter } from 'next/router';
import { AiOutlineMenu } from 'react-icons/ai';
import { MdOutlineLightMode,MdOutlineDarkMode } from 'react-icons/md';
import React, { useState } from 'react'
import { Back } from '@cred/neopop-web/lib/components';


const clickData = () => {
  alert('clicked');
}


const Header = () => {
  const [showMe, setShowMe] = useState(false);
  function toggle(){
    setShowMe(!showMe);
  }
  return (
    <>
    <DesktopOnly>
        <OuterWrapper>
          <Navbars>
            <Name>
              <h3>naveensingh.dev</h3>
            </Name>
            <Nav>
              <ul className="ulk">
                <li className="ulk_li"><a href="#"> Home</a></li>
                <li className="ulk_li"><a href="#"> Projects</a></li>
                <li className="ulk_li"><a href="#"> Blogs</a></li>
                <li className="ulk_li"><a href="#"> Now</a></li>
                {/* <li className="ulk_li">
                  <MdOutlineLightMode size={20}/>
                </li> */}
            </ul>
            </Nav>
          </Navbars>
        </OuterWrapper>
    </DesktopOnly>
    <MobileOnly>
      <Outer>
        <div style={{padding: '20px'}}>
          <h3>naveensingh.dev</h3>
        </div>
        <div style={{margin: '15px'}}>
          <AiOutlineMenu size={35}/>
        </div>
        
      </Outer>
      <MobileMenu>
        {/* <Link href="#"> 
          <a>About me</a>
        </Link> */}
      </MobileMenu>
    </MobileOnly>
    </>
  );
}

const Outer = styled.div`
  display : flex;
  justify-content :space-between;
  flex-direction: row;
`

const MobileMenu = styled.div`
  position : absolute;

`;

const OuterWrapper = styled.div`
  width: 100%;
  //min-height: 100vh;
  padding-left: 25%;
  padding-right: 20%;
  box-sizing: border-box;
  overflow: hidden;
`;


const Nav = styled.nav`
  flex: 1;
  text-align: right;
`;

const Navbars = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  

  // @media screen and (max-width: 700px) {
  //   width: 100%;
  //   background: linear-gradient(#ff54a2,#ff575a);
  //   position: absolute;
  //   top: 15px;
  //   right: 0;
  //   z-index: 2;
  // }
`;

const Name = styled.div`
  // width: 50px;
  cursor: pointer;
  margin: 32px 0;
`;


const DesktopOnly = styled.span`
  @media ${BREAKPOINTS.md} {
    display: none;
  }
`;

const Navigation = styled.ul`
  display: flex;
  gap: 10px;
`;

const MobileOnly = styled.span`
  @media ${BREAKPOINTS.mdMin} {
    display: none;
  }
`;

// const InnerWrapper = styled(MaxWidthWrapper)`
//   display: flex;
//   justify-content: space-between;
//   align-items: center;
//   height: ${HEADER_HEIGHT}px;
// `;



// console.log('efef',BREAKPOINTS.mdMin);



export default Header;
