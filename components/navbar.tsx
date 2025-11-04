"use client";
import React from "react";
import Image from "next/image";

export function Navbar() {
  return (
    <div className="border-0 sticky top-0 z-50 w-full shadow-none">
      <div className="container mx-auto flex items-center justify-center">
        <div className="flex items-center gap-2">
          <Image
            src="/logos/raylogos.jpg"
            alt="CodeWithRay Logo"
            width={200}
            height={200}
            className="w-10 h-10 object-contain"
          />
          <h1 className="text-2xl text-gray-800 font-bold">
            CodeWithRay
          </h1>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
