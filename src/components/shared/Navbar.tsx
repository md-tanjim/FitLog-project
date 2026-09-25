'use client';
import Image from 'next/image';
import React, { useContext, useState } from 'react';
import logo from '@/assets/logo.png'
import Link from 'next/link';
import { WorkContext } from '@/context/WorkContext';
import { MainType } from '@/types/mainType';



const Navbar = () => {

  const {plans ,saved} = useContext(WorkContext)

    const [activeTab, setActiveTab] = useState("work");

    // const handleActiveTab = () =>  {
    //     setActiveTab
    // #05070d
    // }

    return (
        <div className="border-b border-[#ffffff1a]">
         <nav className="h-20 px-4 md:px-8 flex items-center justify-between bg-[#05070d] text-white container mx-auto">
  
  {/* Logo */}
  <div className="flex items-center gap-3">
    <Image
      src={logo}
      width={30}
      height={30}
      alt="FitLog Logo"
    />
    <h1 className="font-bold text-xl">FITLOG</h1>
  </div>

  {/* Hidden on mobile */}
  <div className="hidden md:flex gap-8">
    <button
      onClick={() => setActiveTab("work")}
      className={`px-5 py-2 rounded-full ${
        activeTab === "work"
          ? "bg-lime-900/40 text-lime-400"
          : "text-gray-400"
      }`}
    >
      
      <Link href="/">Workouts</Link>
    </button>

    <button
      onClick={() => setActiveTab("plan")}
      className={`px-5 py-2 rounded-full ${
        activeTab === "plan"
          ? "bg-lime-900/40 text-lime-400"
          : "text-gray-400"
      }`}
    >
       <Link href="/myplan">My Plan</Link>
    </button>
  </div>

  {/* Always visible */}
  <div className="flex gap-3 md:gap-6">
    <button className="flex items-center gap-2">
      
      <Link href="/myplan">Plan</Link>
      <span className="w-5 h-5 rounded-full bg-lime-400 text-black text-xs flex items-center justify-center">
        {plans.length}
      </span>
    </button>

    <button className="flex items-center gap-2 text-gray-400">
      
      <Link href="/myplan">Saved</Link>
      <span className="w-5 h-5 rounded-full border border-gray-600 text-xs flex items-center justify-center">
      {saved.length}
      </span>
    </button>
  </div>

</nav>
        </div>
    );
};

export default Navbar;