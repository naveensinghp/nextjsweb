import Link from 'next/link';
import React from 'react'
import styled from 'styled-components';
import { COLORS,BREAKPOINTS } from '../../constants'
import { useRouter } from 'next/router';



const Header = ({theme,noBorder}) => {
  return (
    <div>
        <OuterWrapper>
            <DesktopOnly>
                <Navigation>
                    <Link href="/about"> 
                        <a>Create</a>
                    </Link>
                    <Link href="/about"> 
                        <a>About me</a>
                    </Link>
                    <Link href="/about"> 
                        <a>Projects</a>
                    </Link>
                </Navigation>
            </DesktopOnly>
        </OuterWrapper>
    </div>
  );
}

const DesktopOnly = styled.span`
  @media ${BREAKPOINTS.sm} {
    display: none;
  }
`;

const Navigation = styled.ul`
  display: flex;
`;

const MobileOnly = styled.span`
  @media ${BREAKPOINTS.mdMin} {
    display: none;
  }
`;

const OuterWrapper = styled.div`
  top: 0;
  left: 0;
  right: 0;
  z-index: 2;
  border-bottom: ${props =>
    props.showBorder && '1px solid rgba(255, 255, 255, 0.06)'};
`;


export default Header;
