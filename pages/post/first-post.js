import Link from 'next/link';
import Image from 'next/image';
import Head from 'next/head';


export default function FirstPost(){
    return (
        <>
        <Head>
         <title>First Post</title>
        </Head>
         <h1>First Post</h1>
        <h2><Link href="/"><a>Back Home</a></Link></h2>
        {/* <img src="/image/cycling.png" alt="cycling" /> */}
        <Image src="/image/cycling.png" width={30} height={30} />
        
        </>
    );
}