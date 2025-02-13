import { navLinks } from "@/constant/constant";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { BiUser, BiWallet } from "react-icons/bi";
import { FaBars } from "react-icons/fa";

type Props={
  openNav:()=>void
}

const Nav = ({openNav}:Props) => {
  return (
    <div className="w-full h-[13vh]">
      <div className="w-[95%] sm:w-[80%] h-full mx-auto flex items-center justify-between">
        <Image src="/Images/logo.png" height={180} width={180} alt={"logo"} />
        <div className="' lg:flex hidden items-center space-x-10">
        {navLinks.map((link) => {
          return (
            <Link href={link.url} key={link.id}>
              <p className="  text-2xl font-semibold   cursor-pointer hover:text-blue-800 transition-all duration-200 text-gray-900">
                {link.label}
              </p>
            </Link>
          );
        })}
        </div>
        <div className="flex items-center space-x-8">
          <BiWallet className="w-6 h-6 cursor-pointer hover:text-red-600" />
          <BiUser className="w-6 h-6 cursor-pointer hover:text-red-600" />
          <FaBars onClick={openNav} className="h-6 w-6 cursor-pointer lg:hidden hover:text-red-600" />
        </div>
      </div>
    </div>
  );
};

export default Nav;
