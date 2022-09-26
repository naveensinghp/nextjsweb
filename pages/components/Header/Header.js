import Link from 'next/link';
import styled from 'styled-components';
import { COLORS,BREAKPOINTS } from '../../constants'
import { useRouter } from 'next/router';
import { AiOutlineMenu } from 'react-icons/ai';
import { MdOutlineLightMode,MdOutlineDarkMode } from 'react-icons/md';
import React, { useState } from 'react'

const clickData = () => {
  alert('clicked');
}


const Header = () => {
  const [showMe, setShowMe] = useState(false);
  function toggle(){
    setShowMe(!showMe);
  }
  return (
    // <div>
    //     <OuterWrapper>
    //         <DesktopOnly>
    //         <h4>naveensingh.dev</h4>
    //             <Navigation>
    //                 <Link href="/about"> 
    //                     <a>Create</a>
    //                 </Link>
    //                 <Link href="/about"> 
    //                     <a>About me</a>
    //                 </Link>
    //                 <Link href="/about"> 
    //                     <a>Projects</a>
    //                 </Link>
    //             </Navigation>
    //         </DesktopOnly>
    //         <MobileOnly>
    //           <AiOutlineMenu onClick={clickData} size={35}/>
    //         </MobileOnly>
    //     </OuterWrapper>
    // </div>
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
              <li className="ulk_li">
                <MdOutlineLightMode size={20}/>
                {/* <MdOutlineLightMode size={20} style={{display: showMe? "none": "block"}} onClick= {toggle} />
                <MdOutlineDarkMode size={20}  style={{display: showMe? "block": "none"}}   onClick= {toggle}/> */}
              </li>
          </ul>
          </Nav>
      </Navbars>
  );
}

const Nav = styled.nav`
  flex: 1;
  text-align: right;
`;

const Navbars = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  

  @media screen and (max-width: 700px) {
    background-color: yellow;
  
  }
`;

const Name = styled.div`
  // width: 50px;
  cursor: pointer;
  margin: 30px 0;

  @media ${BREAKPOINTS.sm} {
    font-size: 1.5rem;
    color: red;
    letter-spacing: -1px;
  }
`;


const DesktopOnly = styled.span`
  @media ${BREAKPOINTS.sm} {
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

const OuterWrapper = styled.div`
  top: 0;
  left: 0;
  right: 0;
  z-index: 2;
  border-bottom: ${props =>
    props.showBorder && '1px solid rgba(255, 255, 255, 0.06)'};
`;


export default Header;
