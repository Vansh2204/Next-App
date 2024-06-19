import Head from "next/head";
import Image from "next/image";
import Script from "next/script";


export default function Home() {
  return (
    <>
      <Head>
        <title>Next App</title>
      </Head>
    
      {/* <Script src="/message.js">
    </Script> */}


    {/* <style>
      {`
      .heading{
      background:white;
      color:black;

      }
      `}
    </style> */}


      <h1 className="heading flex justify-center mt-20 text-2xl">Cricket Blog</h1>
      <p className="flex justify-center text-sm">The blog book</p>
      <p className="flex justify-center font-semibold mt-14">#Trending Blogs</p>


  



      <div className="flex justify-center mt-8 grid grid-rows-4 grid-flow-col lg:grid-rows-1 gap-4 ">
        <div className="container bg-white text-black w-64 h-48 text-center font-mono rounded-md">
          <h1 className="text-2xl mt-16">Sourabh Netrawalkar</h1>
          <p className="text-sm">USA Cricket</p>
        </div>
        <div className="container bg-white text-black w-64 h-48 text-center font-mono rounded-md">
          <h1 className="text-2xl mt-16">Aussies</h1>
          <p className="text-sm">Cricket Australia</p>
        </div>
      

      </div>
      {/* <Image
        alt="Next Image"

      /> */}


    </>
  );
}
