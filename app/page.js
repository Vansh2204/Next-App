import Head from "next/head";
import Image from "next/image";
import Script from "next/script";

export default function Home() {
  return (
    <>
    <Head>
      <title>Next App</title>
      {/* <script src="/message.js"></script> */}
    </Head>
    <Script src="/message.js">
    </Script>
    <h2 style={{display:'flex',justifyContent:'center',marginTop:'20%'}}>First NEXT APP</h2>
    </>
  );
}
 