// import styles from '../styles/Home.module.css'
import Link from 'next/link';
import { AiOutlineMenu } from 'react-icons/ai';
import { MdOutlineLightMode,MdOutlineDarkMode } from 'react-icons/md';
import { AiFillSound} from 'react-icons/ai';
import React, { useState } from 'react'





const Navbar = () => {
    // function navStyle(){
    //     const primaryNav = document.querySelector('primary-navigation');
    //     const navToggle = document.querySelector('mobile-nav-toggle');
    //     console.log(primaryNav);
    //     if(primaryNav){
    //        navToggle.addEventListener('click',() => {
    //         const visibility = primaryNav.getAttribute('data-visible');
    //     }) 
    //     }
    // }
    const clickData = () => {
        alert('clicked');
    }
    const [showMe, setShowMe] = useState(false);
    function toggle(){
        setShowMe(!showMe);
    }
    // Defautl Sunlight
    // When toggle darkmode 
    return (
        <header className="primary-header flex"> 
            <div className="mobile-nav-toggle">
                <span className="sr-only">
                    <AiOutlineMenu onClick={clickData} size={35}/>
                </span> 
            </div>
            <div className="nametitle">
                <h1>#Dev</h1>
            </div>
            Dark Mode {showMe}
            <div style={{display: showMe? "block": "none"}}>
                 <MdOutlineDarkMode size={20} />
            </div>
            
            <nav>
                <ul className="primary-navigation flex" id="primary-navigation" data-visible="false">
                    <li>Home</li>
                    <li>Projects</li>
                    <li>My Skills </li>
                    <li>Blog</li>
                    <li>
                        <MdOutlineLightMode size={20} onClick= {toggle} />
                    </li>
                    {/* <li><MdOutlineDarkMode size={20} /> </li> */}
                    <li><AiFillSound size={22} /> </li>
                </ul>
            </nav>
        </header>
    );
}

export default Navbar