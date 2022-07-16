// import styles from '../styles/Home.module.css'
import Link from 'next/link';
import { AiOutlineMenu } from 'react-icons/ai';
import Script from 'next/script'




const Navbar = () => {

    function navStyle(){

        const primaryNav = document.querySelector('primary-navigation');
        const navToggle = document.querySelector('mobile-nav-toggle');
        console.log(primaryNav);
        if(primaryNav){
           navToggle.addEventListener('click',() => {
            const visibility = primaryNav.getAttribute('data-visible');
        }) 
        }
        
    }
    return (
        <header className="primary-header flex"> 
         <div className="mobile-nav-toggle">
         <span className="sr-only">
            <AiOutlineMenu size={35}/>
         </span> 
         </div>
            <nav>
                <ul className="primary-navigation flex" id="primary-navigation" data-visible="false">
                    <li>Home</li>
                    <li>Projects</li>
                    <li>Skill</li>
                    <li>Blog</li>
                </ul>
            </nav>
       </header>
    );
}

export default Navbar