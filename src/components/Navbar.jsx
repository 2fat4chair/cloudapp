import { useState } from "react";
import React from "react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";

function Navbar() {
  const [nav, setNav] = useState(false);
  const handleClick = () => setNav(!nav);

  return (
    <div
      className={
        nav
          ? "w-screen bg-zinc-200 md:bg-zinc-100  h-[80px] z-10  fixed  drop-shadow-lg"
          : "w-screen md:bg-zinc-100  h-[80px] z-10  fixed  drop-shadow-lg"
      }
    >
      <div className="px-2 flex justify-between items-center w-full h-full">
        <div className="flex items-center">
          <h1 className="text-3xl font-bold mr-4 sm:text-4xl">BRAND.</h1>
          <ul className="hidden md:flex">
            <li>Home</li>
            <li>About</li>
            <li>Support</li>
            <li>Platforms</li>
            <li>Pricing</li>
          </ul>
        </div>
        <div className="hidden md:flex pr-4">
          <button className="border-none bg-transparent text-black mr-4">
            Log In
          </button>
          <button className="px-8 py-3">Sign Up</button>
        </div>
        <div className="md:hidden mr-4 cursor-pointer" onClick={handleClick}>
          {!nav ? <Bars3Icon className="w-5" /> : <XMarkIcon className="w-5" />}
        </div>
      </div>

      <ul
        className={
          !nav
            ? "hidden"
            : "absolute bg-zinc-200 w-full px-8 font-medium cursor-pointer md:hidden"
        }
      >
        <li className="border-b-2 border-zinc-300 w-full">Home</li>
        <li className="border-b-2 border-zinc-300 w-full">About</li>
        <li className="border-b-2 border-zinc-300 w-full">Support</li>
        <li className="border-b-2 border-zinc-300 w-full">Platforms</li>
        <li className="border-b-2 border-zinc-300 w-full">Pricing</li>
        <div className="flex flex-col my-4">
          <button className="bg-transparent text-indigo-600 px-8 py-3 mb-4">
            Log In
          </button>
          <button className="px-8 py-3">Sign Up</button>
        </div>
      </ul>
    </div>
  );
}

export default Navbar;
