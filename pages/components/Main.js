import { AiFillGithub,AiOutlineTwitter,AiFillLinkedin } from 'react-icons/ai';
import Image from 'next/image'

const MainContent = () => {
    return (
        <div className="">
            <div className='banner-right'>
                <div className="nameintro">
                    <div>Hello! I'm <span className="tetsName">
                        NaveenSingh</span>
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

export default MainContent