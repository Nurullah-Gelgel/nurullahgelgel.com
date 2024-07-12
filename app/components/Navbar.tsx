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
            <div className="flex justify-between h-16">
              <div className="flex justify-between w-full">
                <Link to="home" className="mt-3">
                  <h1 className="text-2xl font-medium text-teal-500">
                    Nurullah <span className="text-teal-500">GELGEL</span>
                  </h1>
                </Link>
                <div className="flex items-center md:hidden">
                  <Disclosure.Button className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
                    <span className="sr-only">Open main menu</span>
                    {open ? (
                      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
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
              <div className="hidden md:flex items-center justify-end md:flex-1 lg:w-0">
                <Link
                  activeClass="active"
                  to="experience"
                  spy={true}
                  smooth={true}
                  offset={50}
                  duration={500}
                  className={`${pathname == "../experience/page"
                      ? "border-teal-500 cursor-pointer text-gray-300 mt-3 dark:text-white h-full inline-flex items-center px-1 border-b-2 text-lg font-medium"
                      : "border-transparent cursor-pointer mt-3 text-white dark:text-gray-300 dark:hover:text-white inline-flex items-center px-1 pt-1 border-b-2 text-lg font-medium"
                    }`}
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
                  className={`${pathname == "../projects/page"
                      ? "border-teal-500 cursor-pointer text-gray-300 mt-3 dark:text-white h-full inline-flex items-center px-1 border-b-2 text-lg font-medium"
                      : "border-transparent mt-3 cursor-pointer text-white dark:text-gray-300 dark:hover:text-white inline-flex items-center px-1 pt-1 border-b-2 text-lg font-medium"
                    }`}
                >
                  Projects
                </Link>
                <ThemeButton />
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
                className={`${pathname == "../experience/page"
                    ? "bg-gray-900 text-white block px-3 py-2 rounded-md text-base font-medium"
                    : "text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
                  }`}
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
                className={`${pathname == "../projects/page"
                    ? "bg-gray-900 text-white block px-3 py-2 rounded-md text-base font-medium"
                    : "text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
                  }`}
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
