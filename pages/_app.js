import '../styles/globals.css'
import Nav from './components/Nav'
import Footer from './components/Footer'
import MainContent from './components/Main'


function MyApp({ Component, pageProps }) {
  // return <Nav/><Component {...pageProps} />
  // return (
  //   <>
  //     <Nav/>
  //     <Component {...pageProps} />
  //     <Footer/>
  //   </>
  // );
  return (
    <>
      <Nav/>
      <Component {...pageProps} />
      <Footer/>
    </>
  );
}

export default MyApp
