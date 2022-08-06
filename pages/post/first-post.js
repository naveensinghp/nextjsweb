import Link from 'next/link';
import Image from 'next/image';
import Head from 'next/head';
import Script from 'next/script';
import { Button } from '@cred/neopop-web/lib/components';
import React, { Component } from 'react'
import styled from 'styled-components';



// export default function FirstPost(){
//     return (
//         <>
//         <Head>
//          <title>Learning</title>
        
//         </Head>
//         <Button
//             variant="primary"
//             kind="elevated"
//             size="big"
//             colorMode="dark"
//             onClick={() => {
//                 console.log("I'm clicked");
//             }}
//         >
//             Contact us
//         </Button>
//          <h1>Naveen Singh Post</h1>
//          <h2>Let's Start Project Together</h2>
//          <Script src="https://connect.facebook.net/en_US/sdk.js" strategy="lazyOnload"
//             onLoad={() => console.log(`script loaded correctly, window.FB has been populated`)}/>
//         <h2>
//             <Link href="/"><a>Back Home</a></Link>
//         </h2>
//         <Image src="/image/cycling.png" width={30} height={30} />
        
//         </>
//     );
// }

export default class extends Component{
    render() {
         const DEFAULT_COLOR = 'hsl(50deg, 100%, 50%)';
         const generateSparkle = (color = DEFAULT_COLOR) => {
          return {
            id: String(random(10000, 99999)),
            createdAt: Date.now(),
            // Bright yellow color:
            color,
            size: random(10, 20),
            style: {
              // Pick a random spot in the available space
              top: random(0, 100) + '%',
              left: random(0, 100) + '%',
              // Float sparkles above sibling content
              zIndex: 2,
            },
          }
        }
        function SparkleInstance({ color, size, style }) {
          return (
            <Svg
              width={size}
              height={size}
              viewBox="0 0 160 160"
              fill="none"
              style={style}
            >
              <path
                d="all that stuff from before"
                fill={color}
              />
            </Svg>
          );
        }
        const Svg = styled.svg`
          position: absolute;
          pointer-events: none;
          z-index: 2;
        `;
       return(
        <div>Your Next.js App</div>

       ) 
    }
}