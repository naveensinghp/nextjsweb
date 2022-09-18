import Navbar from "../components/Nav"
import Paragraph from "../components/Paragraph/Paragraph"



export default function About(){
    return <>
            <Navbar/>
            <div>
                <div className="aboutcontent">
                     <h1>Hi! 👋 </h1>
                     <div className="contentdesc">
                        
                        <p>I'm NaveenSing - I am a Front End Developer from Portugal 🇵🇹 living in Berlin 🇩🇪. </p>
                        <p>I work at Remote and make a lot of random projects because the web needs some dumb shit.</p>
                     </div>
                </div>
            </div>
        </>
}
