import { AiFillGithub,AiOutlineTwitter,AiFillLinkedin } from 'react-icons/ai';
import Image from 'next/image'

const MainContent = () => {
    return (
        <div className="nameintro">
            <div>Hello! I'm <span className="tetsName">
                NaveenSingh</span>
            </div>
            <div>Front End Developer</div>
            {/* <div>UI/UX Designer</div> */}
            <ul className='socialmedia-navigation flex'>
                <li><AiOutlineTwitter size={28} /> </li>
                <li><AiFillGithub size={28} /> </li>
                <li><AiFillLinkedin size={28} /></li>
            </ul>
            <div>
            <span className=''>
                {/* <Image src="/assets/images/banner_test.png" alt="Vercel Logo" width={1092} height={842} /> */}
                <img src='/assets/images/banner_test.png' width={500}/>
            </span>
            </div>
        </div>
    );
}

export default MainContent