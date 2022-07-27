// import styles from '../styles/Home.module.css'
import Link from 'next/link';
import { AiOutlineMenu } from 'react-icons/ai';
import { MdOutlineLightMode } from 'react-icons/md';
import { AiFillSound,AiFillGithub,AiOutlineTwitter } from 'react-icons/ai';
import React from 'react'





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
    return (
        <header className="primary-header flex"> 
            <div className="mobile-nav-toggle">
                <span className="sr-only">
                    <AiOutlineMenu onClick={clickData} size={35}/>
                </span> 
            </div>
            <div className="nametitle">
                <h1>NaveenSingh</h1>
            </div>
            {/* <ul className='left-navigation flex'>
                <li><MdOutlineLightMode size={28} /></li>
                <li><AiFillSound size={28} /> </li>
                <li><AiFillGithub size={28} /> </li>
                <li><AiOutlineTwitter size={28} /> </li>
            </ul> */}
            <nav>
                <ul className="primary-navigation flex" id="primary-navigation" data-visible="false">
                    <li>Home</li>
                    <li>Projects</li>
                    <li>My Skills </li>
                    <li>Blog</li>
                    <li><MdOutlineLightMode size={20} /></li>
                    <li><AiFillSound size={22} /> </li>
                </ul>
            </nav>
        </header>
    );
}

export default Navbar