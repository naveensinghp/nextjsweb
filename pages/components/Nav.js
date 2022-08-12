// import styles from '../styles/Home.module.css'
import Link from 'next/link';
import { AiOutlineMenu } from 'react-icons/ai';
import { MdOutlineLightMode,MdOutlineDarkMode } from 'react-icons/md';
import { AiFillSound} from 'react-icons/ai';
import React, { useState } from 'react'
import Script from 'next/script'
import styled from 'styled-components';
// import { COLORS, WEIGHTS } from '../constant';
import { useRouter } from 'next/router';




const Navbar = () => {
    const router = useRouter();
    const clickData = () => {
        alert('clicked');
    }
    const [showMe, setShowMe] = useState(false);
    function toggle(){
        setShowMe(!showMe);
    }
    return (
        <header className="primary-header flex"> 
            <div className="mobile-nav-toggle">
                <span className="sr-only">
                    <AiOutlineMenu onClick={clickData} size={35}/>
                </span> 
            </div>
            {/* <div className="nametitle">
                <h1>naveensingh.dev</h1>
                <span className='test'></span>
            </div> */}
            {/* <div stylename={'display:flex;'}>
                <div className='test'> </div>
                <div className="nametitle">
                <h1>naveensingh.dev</h1>
                
            </div>
            </div> */}
            {/* Parent Div*/}
            <div className='namemain'>
                <div className='lineone'></div>
                <div className=""><h1>naveensingh.dev</h1></div>
                <div className='linetwo'></div>
            </div>

           

             {/* Toggle Test mode
            Dark Mode {showMe}
           <div style={{display: showMe? "block": "none"}}>
                 <MdOutlineDarkMode size={20} />
            </div> */}
            
            <nav>
                <ul className="primary-navigation flex">
                    <Link href="/"><a>Home</a></Link>
                    <Link href="/projects">
                        <a className={router.asPath == "/projects" ? "menuactive" : ""}>Projects</a>
                    </Link>
                    <Link href="/blogs"> 
                        <a className={router.asPath == "/blogs" ? "menuactive" : ""}>Blogs</a>
                    </Link>
                    <Link href="/blogs"> 
                        <a className={router.asPath == "/about" ? "menuactive" : ""}>About me</a>
                    </Link>
                    <li></li>
                    <li>
                        <MdOutlineLightMode size={20} style={{display: showMe? "none": "block"}} onClick= {toggle} />
                        <MdOutlineDarkMode size={20}  style={{display: showMe? "block": "none"}}   onClick= {toggle}/>
                    </li>
                    <li><AiFillSound size={22} /> </li>
                </ul>
            </nav>
           
        </header>
    );

    
}

const Nav = styled.nav``;
const NavLink = styled.a`
  font-size: 1.125rem;
  text-transform: uppercase;
  text-decoration: none;
  color: teal;
  font-weight: 900;

  &:first-of-type {
    color: red;
  }
`;

export default Navbar