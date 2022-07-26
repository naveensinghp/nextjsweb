import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Link from 'next/link';
import Nav from './components/Nav'
import MainContent from './components/Main'


export default function Home(){
  return (
    <>
      <Nav/>
      <MainContent/>
    </>
  );
}
