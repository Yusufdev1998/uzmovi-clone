"use client";
import Image from "next/image";
import { useState } from "react";
import MobileMenu from "./MobileMenu";

const Header = () => {
  const [open, setOpen] = useState(false);

  return (
    <header className="bg-main-bg overflow-hidden">
      <div className="my-container flex justify-between items-center py-[7px]">
        <a
          className="block h-10 relative w-[145px] hover:opacity-80"
          href="https://uzmovi.com/"
          title="UZMOVi onlayn kinoteatri"
        >
          <Image
            unoptimized
            fill
            src="/images/logo.gif"
            alt="UZMOVi onlayn kinoteatri"
          />
        </a>
        <button
          onClick={() => setOpen(!open)}
          className="px-[15px] hover:opacity-80 py-[13px] border border-[#553f62] flex gap-[10px] items-center rounded-[5px] text-xs uppercase bg-[#3b2946] text-[#cec3d6]"
        >
          <span>Menyu</span>
          <div className="flex flex-col gap-1">
            <span className="block w-[22px] h-[2px] bg-current"></span>
            <span className="block w-[22px] h-[2px] bg-current"></span>
            <span className="block w-[22px] h-[2px] bg-current"></span>
          </div>
        </button>
      </div>
      <MobileMenu open={open} />
    </header>
  );
};

export default Header;
