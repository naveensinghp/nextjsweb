import { MdOutlineLightMode } from 'react-icons/md';
import { AiFillSound,AiFillGithub,AiOutlineTwitter,AiFillLinkedin } from 'react-icons/ai';

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
        </div>
    );
}

export default MainContent