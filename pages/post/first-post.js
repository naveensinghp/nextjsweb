import Link from 'next/link';
import Image from 'next/image';
import Head from 'next/head';
import Script from 'next/script';
import { Button } from '@cred/neopop-web/lib/components';


export default function FirstPost(){
    return (
        <>
        <Head>
         <title>Learning</title>
        
        </Head>
        <Button
            variant="primary"
            kind="elevated"
            size="big"
            colorMode="dark"
            onClick={() => {
                console.log("I'm clicked");
            }}
        >
            Contact us
        </Button>
         <h1>Naveen Singh Post</h1>
         <h2>Let's Start Project Together</h2>
         <Script src="https://connect.facebook.net/en_US/sdk.js" strategy="lazyOnload"
            onLoad={() => console.log(`script loaded correctly, window.FB has been populated`)}/>
        <h2>
            <Link href="/"><a>Back Home</a></Link>
        </h2>
        <Image src="/image/cycling.png" width={30} height={30} />
        
        </>
    );
}