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
    
      {/* <Script src="/message.js">
    </Script> */}
      <h1 className="flex justify-center mt-20 text-2xl">Ticket Hunt</h1>
      <p className="flex justify-center text-sm">One place to book tickets for your inner cricket child </p>

      <div className="flex justify-center mt-20 grid grid-rows-2 grid-flow-col gap-4 ">
        <div className="container bg-white text-black w-64 h-48 text-center font-mono rounded-md">
          <h1 className="text-2xl mt-16">St.Lucia</h1>
          <p className="text-sm">India vs Australia</p>
        </div>
        <div className="container bg-white text-black w-64 h-48 text-center font-mono rounded-md">
          <h1 className="text-2xl mt-16">Antigua</h1>
          <p className="text-sm">India vs Bangladesh</p>
        </div>
        <div className="container bg-white text-black w-64 h-48 text-center font-mono rounded-md">
          <h1 className="text-2xl mt-16">Barbados</h1>
          <p className="text-sm">India vs Afghanistan</p>
        </div>
        <div className="container bg-white text-black w-64 h-48 text-center font-mono rounded-md">
          <h1 className="text-2xl mt-16">TBC</h1>
          <p className="text-sm">TBC</p>
        </div>
        
      </div>
      {/* <Image
        alt="Next Image"

      /> */}


    </>
  );
}
