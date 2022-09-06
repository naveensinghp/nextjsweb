import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Link from 'next/link';
import Nav from './components/Nav'
import MainContent from './components/Main'
import Footer from './components/Footer'
import { AiFillGithub,AiOutlineTwitter,AiFillLinkedin } from 'react-icons/ai';

export default function Home(){
  // return (
  //   <>
  //     <Nav/>
  //     <MainContent/>
  //     <Footer/>
  //   </>
  // );
  return (
    <div className="">
        <span className="underline">Arya Stark</span>
        <a href='' className='KwErY'>
        <span class="hKeEVN">NaveenSingh</span>
        <span class="igzQz">NaveenSingh</span>
    
        </a>
        
        <div className='banner-right'>
            <div className="nameintro">
                <div>Hello! I'm 
                    <span className="myNameTitle"> NaveenSingh</span>
                   
                </div>
                <p>
                    Front End Developer
                </p>
                
                <ul className='socialmedia-navigation flex'>
                    <li><AiOutlineTwitter size={28} /> </li>
                    <li><AiFillGithub size={28} /> </li>
                    <li><AiFillLinkedin size={28} /></li>
                </ul>
            <div>
        </div>
        </div>
        <img src='/assets/images/banner_test.png' width={500}/>
    </div>
</div>
);
}
