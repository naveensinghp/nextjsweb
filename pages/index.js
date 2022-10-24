import Head from 'next/head'
import styled from 'styled-components';
import Footer from '../components/Footer/Footer';
import Header from '../components/Header/Header';
import MainContent from './main';




const Home = () => {
    // return (
    //       <>
    //         {/* <img id="shape_top" src="https://lukaszadam.com/assets/images/shape_top.svg" alt="free illustration shape"></img> */}
    //         <Head>
    //         <title>Create Next App</title>
    //         <meta name="description" content="Generated by create next app" />
    //         <link rel="icon" href="/favicon.ico" />
    //         </Head>
    //       <main>
    //         <Header/>
    //         <MainContent/>
    //         <Footer/>
    //       </main>
    //       </>
    //   );
    return (
      <>
        <Head>
          <title>NaveenSingh</title>
          <meta name="description" content="Generated by create next app" />
          <link rel="icon" href="/favicon.ico" />
        </Head>
        <main>
        <div style={{ position: `absolute`,left: `50%`, top: `50%` }}>
                <h2>Shall We Begin!!</h2>
        </div>
        </main>
      </>
    );
}
        
export default Home;
      
