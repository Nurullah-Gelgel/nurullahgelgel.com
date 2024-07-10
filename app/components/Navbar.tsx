"use client";

import { Disclosure } from "@headlessui/react"; 
import Link from "next/link";
import {  usePathname } from "next/navigation";
import ThemeButton from "./ThemeButton";

export default function Navbar() {
    const pathname =usePathname();
  return (
   <Disclosure as="nav" className="bg-gray-800">
    {({ open }) => (
        <>
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div  className="flex justify-between h-16">
                <div className="flex justify-between w-full" >
                    <Link href="/">
                    <h1 className="text-2xl font-medium">Nurullah <span className="text-teal-500">GELGEL</span></h1>
                    </Link>
                </div>
                <div>
                    <div className="hidden md:flex items-center justify-end md:flex-1 lg:w-0">
                      <Link href="/" prefetch className={`${
                        pathname=="/"
                         ? "border-teal-500 dark:text-white h-full inline-flex items-center px-1  border-b-2 text-lg font-medium": "border-transparent text-gray-500 dark:text-gray-300 dark:hover:text-white inline-flex items-center px-1 pt-1 border-b-2 text-lg font-medium "  }`}>Home
                      </Link>
                      <Link href="/projects" prefetch className={`${
                        pathname=="../projects/page" 
                        ? "border-teal-500 dark:text-white h-full inline-flex items-center px-1 border-b-2 text-lg font-medium": "border-transparent text-gray-500 dark:text-gray-300 dark:hover:text-white inline-flex items-center px-1 pt-1 border-b-2 text-lg font-medium "  }`}>Projects
                      </Link>
                      <ThemeButton />
                    </div>
                </div>

            </div>

        </div>
    </>
  )}
  </Disclosure>
    );
}