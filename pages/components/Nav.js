// import styles from '../styles/Home.module.css'
import Link from 'next/link';
import { AiOutlineMenu } from 'react-icons/ai';



const Navbar = () => {
    return (
        <header className="primary-header flex"> 
         <button className="mobile-nav-toggle" aria-control="primary-navigation" aria-expand="false">
         <span className="sr-only">
            Menu
         </span> 
         </button>
         
            <nav>
                <ul className="primary-navigation flex" id="primary-navigation">
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