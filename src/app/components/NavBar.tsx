"use client";

import React from "react";
import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="flex justify-between items-center bg-indigo-200 p-4 shadow-md">
      {/* <div className="text-xl font-bold">
        <span>FAST TRAIN</span>
      </div> */}
      <ul className="flex space-x-10 justify-center   ">
        <li className=" rounded-md hover:bg-orange-500 py-2 px-5">
          <Link href="/" className="text-black font-semibold p-7 ">
            Home
          </Link>
        </li>
        <li className=" rounded-md hover:bg-orange-500 py-2 px-5">
          <Link href="/search" className="text-black font-semibold  p-7">
            Search
          </Link>
        </li>
        <li className=" rounded-md hover:bg-orange-500 py-2 px-5">
          <Link
            href="/train/[id]"
            as="/train/1"
            className="text-black font-semibold  p-7 whitespace-nowrap"
          >
            Train Details
          </Link>
        </li>
        <li className=" rounded-md hover:bg-orange-500 py-2 px-5">
          <Link href="/contact" className="text-black font-semibold  p-7">
            Contact
          </Link>
        </li>
      </ul>
    </nav>
  );
}
