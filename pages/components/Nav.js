// import styles from '../styles/Home.module.css'
import Link from 'next/link';
import { AiOutlineMenu } from 'react-icons/ai';
import { MdOutlineLightMode,MdOutlineDarkMode } from 'react-icons/md';
import { AiFillSound} from 'react-icons/ai';
import React, { useState } from 'react'
import Script from 'next/script'
import styled from 'styled-components';
import { useRouter } from 'next/router';
import { BREAKPOINTS,HEADER_HEIGHT } from '../constants';



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
    return (
        <div>
             <img id="shape_top" src="https://lukaszadam.com/assets/images/shape_top.svg" alt="free illustration shape"></img>
             <header className="primary-header flex"> 
            <div className="mobile-nav-toggle">
                <span className="sr-only">
                    <AiOutlineMenu onClick={clickData} size={35}/>
                </span> 
            </div>
            <div className='namemain'>
                <div className='lineone'></div>
                <div className=""><h1>naveensingh.dev</h1></div>
                <div className='linetwo'></div>
            </div>
            <InnerWrapper>
                <DesktopOnly>
                    <Navigation>
                        <ul className="primary-navigation flex">
                            <Link href="/"><a>Home</a></Link>
                            <Link href="/projects">
                                <a className={router.asPath == "/projects" ? "menuactive" : ""}>rojects</a>
                            </Link>
                            <Link href="/blogs"> 
                                <a className={router.asPath == "/blogs" ? "menuactive" : ""}>Blogs</a>
                            </Link>
                            <Link href="/about"> 
                                <a className={router.asPath == "/about" ? "menuactive" : ""}>About me</a>
                            </Link>
                            <li></li>
                            <li>
                                <MdOutlineLightMode size={20} style={{display: showMe? "none": "block"}} onClick= {toggle} />
                                <MdOutlineDarkMode size={20}  style={{display: showMe? "block": "none"}}   onClick= {toggle}/>
                            </li>
                            <li><AiFillSound size={22} /> </li>
                        </ul>
                    </Navigation>
                </DesktopOnly>
            </InnerWrapper>
        </header>
    </div>
    );   
}
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