import styled from 'styled-components';
import { UNIT,COLORS } from '../../constants';


// const Underline = ({ children }) => (
   
//     <UnderlineSvg>
//         <polygon
//         points={`
//           0,0
//           200,0
//           175,15
//           0,15
//         `}
//         fill={COLORS.pink}
//         stroke={COLORS.pink}
//         strokeLinejoin="round"
//         strokeWidth={4}
//       />
//     </UnderlineSvg>
// );





console.log('Test',COLORS.pink[500]);
export default ({ children }) => (
    <UnderlineSvg>
         <polygon
        points={`
          0,0
          200,0
          175,15
          0,15
        `}
        fill= '#f40088'
        stroke= '#f40088'
        strokeLinejoin="round"
        strokeWidth={4}
      />
    </UnderlineSvg>
);


const UnderlineSvg = styled.svg`
  display: block;
  width: 100px;
  margin-top: ${UNIT * 2}px;
`;