"use client";

import { Disclosure } from "@headlessui/react";
import { Link } from "react-scroll";
import { usePathname } from "next/navigation";
import ThemeButton from "./ThemeButton";

export default function Navbar() {
  const pathname = usePathname();

  return (
    <Disclosure as="nav" className="bg-gray-800">
      {({ open }) => (
        <>
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex items-center justify-between h-16">
              <div className="flex items-center justify-between w-full">
                <Link to="home" className="flex items-center">
                  <h1 className="text-2xl font-medium text-teal-500">
                    Nurullah <span className="text-teal-500">GELGEL</span>
                  </h1>
                </Link>
                <div className="hidden md:flex items-center space-x-6">
                  <Link
                    activeClass="active"
                    to="experience"
                    spy={true}
                    smooth={true}
                    offset={50}
                    duration={500}
                    className={`${
                      pathname == "../experience/page"
                        ? "border-teal-500 text-gray-200"
                        : "border-transparent text-white hover:text-gray-300"
                    } cursor-pointer px-3 py-2 rounded-md text-lg font-medium transition duration-150 ease-in-out`}
                  >
                    Experience
                  </Link>
                  <Link
                    activeClass="active"
                    to="project"
                    spy={true}
                    smooth={true}
                    offset={50}
                    duration={500}
                    className={`${
                      pathname == "../projects/page"
                        ? "border-teal-500 text-gray-200"
                        : "border-transparent text-white hover:text-gray-300"
                    } cursor-pointer px-3 py-2 rounded-md text-lg font-medium transition duration-150 ease-in-out`}
                  >
                    Projects
                  </Link>
                  <ThemeButton />
                </div>
                <div className="flex items-center md:hidden">
                  <Disclosure.Button className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
                    <span className="sr-only">Open main menu</span>
                    {open ? (
                      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="size-6">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M6 18 18 6M6 6l12 12" />
                      </svg>

                    ) : (
                      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 5.25h16.5m-16.5 4.5h16.5m-16.5 4.5h16.5m-16.5 4.5h16.5" />
                      </svg>
                    )}
                  </Disclosure.Button>
                </div>
              </div>
            </div>
          </div>

          <Disclosure.Panel className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
              <Link
                activeClass="active"
                to="experience"
                spy={true}
                smooth={true}
                offset={50}
                duration={500}
                className={`${
                  pathname == "../experience/page"
                    ? "bg-gray-900 text-white"
                    : "text-gray-300 hover:bg-gray-700 hover:text-white"
                } block px-3 py-3 rounded-md text-base font-medium`}
              >
                Experience
              </Link>
              <Link
                activeClass="active"
                to="project"
                spy={true}
                smooth={true}
                offset={50}
                duration={500}
                className={`${
                  pathname == "../projects/page"
                    ? "bg-gray-900 text-white"
                    : "text-gray-300 hover:bg-gray-700 hover:text-white"
                } block px-3 py-2 rounded-md text-base font-medium`}
              >
                Projects
              </Link>
              <div className="px-3 py-2">
                <ThemeButton />
              </div>
            </div>
          </Disclosure.Panel>
        </>
      )}
    </Disclosure>
  );
}
