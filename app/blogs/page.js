'use client'

import Link from "next/link";
const { useState, useEffect } = require("react");

export default function Blog() {

  useEffect(() => {
    fetch("http://localhost:3000/api").then((res) => res.json()).then((res) => console.log(res))
})




  return (
    <>
      <div className="flex justify-center mt-8 grid grid-rows-6 grid-flow-col lg:grid-rows-2 gap-6">
        <div className="container bg-white text-black w-64 h-48 text-center font-mono rounded-md cursor-pointer">
          <h1 className="text-2xl mt-16">Sourabh Netrawalkar</h1>
          <p className="text-sm">USA Cricket</p>
        </div>
        <div className="container bg-white text-black w-64 h-48 text-center font-mono rounded-md cursor-pointer">
          <h1 className="text-2xl mt-16">Aussies</h1>
          <p className="text-sm">Cricket Australia</p>
        </div>
        <div className="container bg-white text-black w-64 h-48 text-center font-mono rounded-md cursor-pointer">
          <h1 className="text-2xl mt-16">Aaron Jones</h1>
          <p className="text-sm">USA Cricket</p>
        </div>
        <div className="container bg-white text-black w-64 h-48 text-center font-mono rounded-md cursor-pointer">
          <h1 className="text-2xl mt-16">Trent Boult</h1>
          <p className="text-sm">New Zealand Cricket</p>
        </div>
        <div className="container bg-white text-black w-64 h-48 text-center font-mono rounded-md cursor-pointer">
          <h1 className="text-2xl mt-16">Virat Kohli</h1>
          <p className="text-sm">Indian Cricket</p>
        </div>
        <div className="container bg-white text-black w-64 h-48 text-center font-mono rounded-md cursor-pointer">
          <h1 className="text-2xl mt-16">Fazalhaq Farooqi</h1>
          <p className="text-sm">Cricket Afghanistan</p>
        </div>


      </div>
    </>
  )
}