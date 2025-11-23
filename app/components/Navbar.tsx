"use client";

import { Disclosure } from "@headlessui/react";
import { Link } from "react-scroll";
import ThemeButton from "./ThemeButton"; 


const navigation = [
  { name: 'Experience', to: 'experience' },
  { name: 'Projects', to: 'project' }, 
];

export default function Navbar() {
  return (
    <Disclosure as="nav" className="fixed top-0 w-full z-50 bg-[#050505]/70 backdrop-blur-md border-b border-white/5 transition-all duration-300">
      {({ open }) => (
        <>
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex items-center justify-between h-20">
              <div className="flex items-center justify-between w-full">
                
             
                <Link to="home" smooth={true} duration={500} className="flex items-center cursor-pointer group">
                  <h1 className="text-2xl font-bold text-gray-100 tracking-tighter group-hover:text-white transition-colors">
                    Nurullah <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-400 to-blue-500 drop-shadow-[0_0_10px_rgba(20,184,166,0.5)]">GELGEL</span>
                  </h1>
                </Link>

                
                <div className="hidden md:flex items-center space-x-8">
                  {navigation.map((item) => (
                      <Link
                        key={item.name}
                        activeClass="text-teal-400 drop-shadow-[0_0_8px_rgba(45,212,191,0.8)]"
                        to={item.to}
                        spy={true}
                        smooth={true}
                        offset={-100} 
                        duration={500}
                        className="cursor-pointer text-sm font-medium text-gray-300 hover:text-teal-400 transition-all duration-300 hover:scale-105"
                      >
                        {item.name}
                      </Link>
                  ))}
                  
                  {/* Theme Button Masaüstünde Açık Kalsın İstersen Yorumu Kaldır */}
                  {/* <div className="border-l border-white/10 pl-6">
                     <ThemeButton />
                  </div> */}
                </div>

                <div className="flex items-center md:hidden">
                  <Disclosure.Button className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-white/10 focus:outline-none transition-colors">
                    <span className="sr-only">Open main menu</span>
                    {open ? (
                      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-6">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M6 18 18 6M6 6l12 12" />
                      </svg>
                    ) : (
                      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-6">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 5.25h16.5m-16.5 4.5h16.5m-16.5 4.5h16.5m-16.5 4.5h16.5" />
                      </svg>
                    )}
                  </Disclosure.Button>
                </div>
              </div>
            </div>
          </div>

          
          <Disclosure.Panel className="md:hidden bg-[#050505]/95 backdrop-blur-xl border-b border-white/10">
            <div className="px-4 pt-2 pb-6 space-y-2">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  activeClass="bg-white/5 text-teal-400"
                  to={item.to} 
                  spy={true}
                  smooth={true}
                  offset={-100}
                  duration={500}
                  className="block px-3 py-3 rounded-md text-base font-medium text-gray-300 hover:bg-white/5 hover:text-teal-400 transition-colors cursor-pointer"
                >
                  {item.name}
                </Link>
              ))}
              <div className="px-3 py-4 border-t border-white/5 mt-2">
                <ThemeButton />
              </div>
            </div>
          </Disclosure.Panel>
        </>
      )}
    </Disclosure>
  );
}