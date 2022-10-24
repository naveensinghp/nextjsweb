// import styles from '../styles/Home.module.css'
import Link from 'next/link';
import { AiOutlineMenu } from 'react-icons/ai';
import { MdOutlineLightMode,MdOutlineDarkMode } from 'react-icons/md';
import { AiFillSound} from 'react-icons/ai';
import React, { useState } from 'react'
import Script from 'next/script'
import styled from 'styled-components';
import { useRouter } from 'next/router';
import { BREAKPOINTS,COLORS,HEADER_HEIGHT, UNIT } from '../constants';
import Header from './Header/Header';
// import HeaderNavigationItem from './Header/HeaderNavigationItem';



const Navbar = () => {
    const router = useRouter();
    const clickData = () => {
        alert('clicked');
    }
    const [showMe, setShowMe] = useState(false);
    function toggle(){
        setShowMe(!showMe);
        // show true means => sunlight
        if(showMe){
            document.body.classList.add('darkmode');
            localStorage.setItem('darkMode',"enabled");
        }
        if(!showMe){
            document.body.classList.remove('darkmode');
            localStorage.setItem('darkMode',null);
        }
    }
    // return (
    //     <div>
    //          <img id="shape_top" src="https://lukaszadam.com/assets/images/shape_top.svg" alt="free illustration shape"></img>
    //          <header className="primary-header flex"> 
    //         <div className="mobile-nav-toggle">
    //             <span className="sr-only">
    //                 <AiOutlineMenu onClick={clickData} size={35}/>
    //             </span> 
    //         </div>
    //         <div className='namemain'>
    //             <div className='lineone'></div>
    //             <div className=""><h1>naveensingh.dev</h1></div>
    //             <div className='linetwo'></div>
    //         </div>
    //         <LeftLine>
    //               ddgd          
    //         </LeftLine>
    //         <InnerWrapper>
    //             <DesktopOnly>
    //                 <Navigation>
                   
    //                 <NavigationLink>
    //                 Create
    //                 </NavigationLink>
    //                     <div className="flex-parent">
    //                     <div className="leftline"></div>
    //                     <div className="b-text">Aryastark</div>
    //                     <div className="rightline"></div>
    //                     </div> 
    //                     <ul className="primary-navigation flex">
    //                         <Link href="/"><a>Home</a></Link>
    //                         <Link href="/projects">
    //                             <a className={router.asPath == "/projects" ? "menuactive" : ""}>Projects</a>
    //                         </Link>
    //                         <Link href="/blogs"> 
    //                             <a className={router.asPath == "/blogs" ? "menuactive" : ""}>Blogs</a>
    //                         </Link>
    //                         <Link href="/about"> 
    //                             <a className={router.asPath == "/about" ? "menuactive" : ""}>About me</a>
    //                         </Link>
    //                         <li></li>
    //                         <li>
    //                             <MdOutlineLightMode size={20} style={{display: showMe? "none": "block"}} onClick= {toggle} />
    //                             <MdOutlineDarkMode size={20}  style={{display: showMe? "block": "none"}}   onClick= {toggle}/>
    //                         </li>
    //                         <li><AiFillSound size={22} /> </li>
    //                     </ul> 
    //                 </Navigation>
    //             </DesktopOnly>
    //         </InnerWrapper>
    //     </header>
    // </div>
    // );
    return (
        <>
        <Header>
        </Header>
        <h1>Hello World</h1>
        </>
    );   
}

const LeftLine = styled.div`
    border: 3px solid #673ab7;
    width: 12rem;
    border-radius: 20px;

`;

const NavigationLink = styled.div`
  font-size: 16px;
  margin: 0 ${UNIT * 2.5}px;
  text-decoration: none;
  color: ${COLORS.pink};
`;

const DesktopOnly = styled.span`
  @media ${BREAKPOINTS.sm} {
    display: none;
  }
`;


const Navigation = styled.ul`
  display: flex;
`;

const InnerWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: ${HEADER_HEIGHT}px;
`;

export default Navbar