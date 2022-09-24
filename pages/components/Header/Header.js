import Link from 'next/link';
import React from 'react'
import styled from 'styled-components';
import { COLORS,BREAKPOINTS } from '../../constants'
import { useRouter } from 'next/router';
import { AiOutlineMenu } from 'react-icons/ai';



const clickData = () => {
  alert('clicked');
}


const Header = () => {
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
    <Container>
      <Navbars>
          <Logos>
            <h4>naveensingh.dev</h4>
          </Logos>
          <Nav>
            <ul   className="ulk">
              <li className="ulk_li"><a href=""> Home</a></li>
              <li className="ulk_li"><a href=""> Projects</a></li>
              <li className="ulk_li"><a href=""> Blogs</a></li>
              <li className="ulk_li"><a href=""> Right Now</a></li>
          </ul>
          </Nav>
      </Navbars>
    </Container>
  );
}

const Nav = styled.nav`
  flex: 1;
  text-align: right;
`;

const testUl =  styled.ul.attrs((/* props */) => ({ tabIndex: 0 }))`
  &li {
    background-color: red;
  }

`;

const Container = styled.div`
  width: 100%;
  min-height: 100vh;
  padding-left: 20%;
  padding-right: 20%;
  box-sizing: border-box;
  overflow: hidden;
`;

const Navbars = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
`;

const Logos = styled.div`
  // width: 50px;
  cursor: pointer;
  margin: 30px 0;
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



console.log('efef',BREAKPOINTS.mdMin);

const OuterWrapper = styled.div`
  top: 0;
  left: 0;
  right: 0;
  z-index: 2;
  border-bottom: ${props =>
    props.showBorder && '1px solid rgba(255, 255, 255, 0.06)'};
`;


export default Header;
