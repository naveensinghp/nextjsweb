import Paragraph from "../components/Paragraph/Paragraph";
import styled from 'styled-components';
import { BREAKPOINTS } from "../constants";



const MainContent = () => {
    return (
        <>
            <Wrapper>
                <h1>Hi, I’m NaveenSingh.</h1>
                <Paragraph>
                    I’m a full-stack engineer, a designer, and a content creator. I work at <a href="#">Google</a> as <b>Developer Advocate</b> and core a member of <b>Facebook Team</b> 
                </Paragraph>
            </Wrapper>
           
        </>
    );
}

const Wrapper = styled.div`
  margin-top: 2rem;
  @media ${BREAKPOINTS.sm} {
    font-size: 0.7rem;
    margin-bottom: 1.5rem;
  }
`
export default MainContent