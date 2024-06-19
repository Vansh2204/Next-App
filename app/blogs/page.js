'use client'
import Link from "next/link";
const { useState, useEffect } = require("react");


export default function Blog() {


  const [data,setdata] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3000/api").then((res) => res.json()).then((res) => setdata(res))
},[])




  return (
    <>
      <div className="flex justify-center mt-8 grid grid-rows-5 grid-flow-col lg:grid-rows-2 gap-6">

        {data.map((dataitem)=>{
          return <div className="container bg-white text-black w-64 h-48 text-center font-mono rounded-md cursor-pointer">
          <h1 className="text-2xl mt-16">{dataitem.title}</h1>
          <p className="text-sm">{dataitem.board}</p>
        </div>

        })}

        
       

      </div>
    </>
  )
}