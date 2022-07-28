// import styles from '../styles/Home.module.css'
import Link from 'next/link';
import { AiOutlineMenu } from 'react-icons/ai';
import { MdOutlineLightMode,MdOutlineDarkMode } from 'react-icons/md';
import { AiFillSound} from 'react-icons/ai';
import React, { useState } from 'react'





const Navbar = () => {
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
            <div className="nametitle">
                <h1>#Dev</h1>
            </div>
             {/* Toggle Test mode
            Dark Mode {showMe}
           <div style={{display: showMe? "block": "none"}}>
                 <MdOutlineDarkMode size={20} />
            </div> */}
            
            <nav>
                <ul className="primary-navigation flex" id="primary-navigation" data-visible="false">
                    <li>Home</li>
                    <li>Projects</li>
                    <li>My Skills </li>
                    <li>Blog</li>
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

export default Navbar