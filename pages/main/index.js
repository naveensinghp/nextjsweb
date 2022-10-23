import Paragraph from "../components/Paragraph/Paragraph";
import styled from 'styled-components';
import { BREAKPOINTS } from "../constants";
// import { HiArrowUpRight} from 'react-icons/ai';
import { BsArrowRight} from 'react-icons/bs';
import RecentBlogPreview from "./RecentBlogPreview";
import Divider from "../components/Divider/divider";




const MainContent = () => {
    return (
        <>
            <Wrapper>
              <OuterWrapper>
                <NameStyle>
                  Hi, I’m NaveenSingh.
                </NameStyle>
                <br/>
                <Paragraph style={{letterSpacing: '0.5px'}}>
                    I’m a Software Developer, Where I live in India and Working at <a href="#">VIDSYSOFT TECH</a> as <b>Team Lead</b>, Who trying to be good developer on daily life, Which i personally belives in life it lies all about <b> Imapct is Everything!!</b>
                </Paragraph>
                <br/>
                <Paragraph style={{letterSpacing: '0.5px'}}>
                This blog is my attempt to share the stuff I've learned often and i think the biggest motivation for me at first was just to remember things for myself I'm learning these new things and I want to make sure that I have a reference for myself.
                </Paragraph>
                <Divider/>
              
                  <ViewallBlogWrapper>
                    <h3>Recent Blog </h3>
                    {/* <ViewAll>
                      View All  <BsArrowRight size={18}/>
                    </ViewAll> */}
                  </ViewallBlogWrapper>
                  <RecentBlogPreview
                    title="Things to Focus Before Begin Developer"
                    createdDate="October 24th, 2022"
                    blogHint="How to create and use API Routes in Next.js"
                  />
                 
                  {/* <RecentBlogPreview
                    title="Understanding useMemo and useCallback"
                    createdDate="20 Jan 2022"
                    blogHint="How to create and use API Routes in Next.js"
                  /> */}
                  
              </OuterWrapper>
            </Wrapper>
        </>
    );
}



const ViewallBlogWrapper = styled.div`
  display: flex;
  justify-content : space-between;
`;

const ViewAll = styled.span`
color: #805ad5;
font-weight: bold;
font-size: 13px;
cursor: pointer;
display: flex;
padding: 10px;
gap: 10px;
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