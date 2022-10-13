import Paragraph from "../components/Paragraph/Paragraph";
import styled from 'styled-components';
import { BREAKPOINTS } from "../constants";
// import { HiArrowUpRight} from 'react-icons/ai';





const MainContent = () => {
    return (
        <>
            <Wrapper>
              <OuterWrapper>
                <NameStyle>
                  Hi, I’m NaveenSingh.
                </NameStyle>
                <Paragraph style={{letterSpacing: '0.5px'}}>
                    I’m a Software Developer, a designer, and a content creator. Where I work at <a href="#">VIDSYSOFT TECH</a> as <b>Team Lead</b> and who trying to be good developer on daily 
                </Paragraph>
                <h3>Recent blog posts.</h3>
                <ViewallBlogWrapper>
                  <ViewAll>
                      View All
                  </ViewAll>
                </ViewallBlogWrapper>
                  <div className="card-container">
                      <a className="card" href="#">
                          {/* <svg className="material-icons" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M5 13.18v4L12 21l7-3.82v-4L12 17l-7-3.82zM12 3L1 9l11 6 9-4.91V17h2V9L12 3z"/></svg> */}
                          <span>
                            <h3>
                            Things to Focus Before Begin Developer
                            </h3>
                            
                            </span> 
                          <svg className="material-icons" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M10 6L8.59 7.41 13.17 12l-4.58 4.59L10 18l6-6z"/></svg>
                      </a>
                  </div>
                  
                
              </OuterWrapper>
            </Wrapper>
        </>
    );
}

const ViewallBlogWrapper = styled.div`
  flex: 1;
  text-align: right;
`;

const ViewAll = styled.span`
color: #805ad5;
font-weight: bold;
font-size: 13px;
cursor: pointer;
`;


const NameStyle = styled.h1`
letter-spacing: 0.9px

`;

const Social = styled.div`
  display: flex;
  margin-bottom: 16px;
  gap : 1.5rem;
`;

const CardContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  margin-top: 16px;
`;

const Card = styled.div`
  all: unset;
  border-radius: 4px;
  border: 1px solid #eee;
  background-color: #fafafa;
  height: 40px;
  width: 120px;
  margin: 0 8px 16px;
  padding: 16px;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  transition: all 0.2s ease-in-out;
  line-height: 24px;
  &:

`

const OuterWrapper = styled.div`
width: 100%;
//min-height: 100vh;
padding-left: 25%;
padding-right: 20%;
box-sizing: border-box;
overflow: hidden;
`;


const Wrapper = styled.div`
  margin-top: 2rem;
  @media ${BREAKPOINTS.sm} {
    font-size: 0.7rem;
    margin-bottom: 1.5rem;
  }
`

const DesktopOnly = styled.span`
  @media ${BREAKPOINTS.md} {
    display: none;
  }
`;


export default MainContent