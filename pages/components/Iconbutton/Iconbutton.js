import Link from 'next/link';
import IconBase from 'react-icons-kit';



export const Iconbutton = ({
    href,
    ...delegated
}) => {
    const Wrapper = href ? LinkWrapper : ButtonWrapper;
    return (
        <Wrapper href={href} {...delegated}>
             <IconWrapper>
                <IconBase icon={icon} style={{ color }} size={size} />
            </IconWrapper>
        </Wrapper>
    );
}

const IconWrapper = styled.span`
  display: inline-block;
  position: relative;
  z-index: 1;
`;


const LinkWrapper = styled(Link)`
  position: relative;
  display: inline-block;
`;


const ButtonWrapper = styled(InvisibleButton)`
  position: relative;
  display: inline-block;
`;

export default Iconbutton;