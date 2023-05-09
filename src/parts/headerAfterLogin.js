/* eslint-disable react/button-has-type */
/* eslint-disable react/jsx-filename-extension */
/* eslint-disable react/prop-types */
import React, { useState } from "react";

import Fade from "react-reveal/Fade";
import { Transition } from "@headlessui/react";

import Button from "../elements/Button/index.js";
import BrandIcon from "../parts/BrandIcon.js";
import {Dropdown} from "./DropdownHeader.js";

export default function HeaderafterLogin(props) {
  const { location } = props;
  const [isCollapse, setIsCollapse] = useState(false);
  const path = location;

  return (
    <header className="header">
      <Fade>
        <div className="flex justify-between px-4 lg:px-0">
          <BrandIcon />

          <button
            className="block text-theme-blue lg:hidden focus:outline-none"
            onClick={() => setIsCollapse(!isCollapse)}
          >
            <svg
              className="w-8 h-8"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                className={`${isCollapse ? "hidden" : "block"}`}
                //  strokeLinecap="round"
                //  strokeLinejoin="round"
                //  strokeWidth="2"
                d="M4 6h16M4 12h16m-7 6h7"
              />
              <path
                className={`${!isCollapse ? "hidden" : "block"}`}
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>
        </div>

        <ul className="hidden text-theme-blue tracking-widest items-center lg:flex flex-row mt-0">
          <li>
            <Button
              className={`${
                path === "/" ? "active-link" : ""
              } text-lg px-5 no-underline hover:underline`}
              type="link"
              href="/"
            >
              Home
            </Button>
          </li>
          <li className="py-2 lg:py-0">
            <Button
              className={`${
                path === "/team" ? "active-link" : ""
              } text-lg px-5 no-underline hover:underline`}
              type="link"
              href="/team"
            >
              Team
            </Button>
          </li>
          <li className="py-2 lg:py-0">
            <Button
              className={`${
                path === "/project" ? "active-link" : ""
              } text-lg px-5 no-underline hover:underline`}
              type="link"
              href="/project"
            >
              Project
            </Button>
          </li>
          <li>
            <Dropdown parentClass="hidden sm:block sm:ml-6" {...props}/>
          </li>
        </ul>
      </Fade>

      <Transition
        show={isCollapse}
        enter="transition-opacity duration-400"
        enterFrom="opacity-0"
        enterTo="opacity-100"
        leave="transition-opacity duration-400"
        leaveFrom="opacity-100"
        leaveTo="opacity-0"
      >
        <Fade>
          <ul className="z-50 flex flex-col text-theme-blue tracking-widest my-6 absolute bg-white w-full border-b-2 border-gray-300 lg:hidden">
            <li className="py-2 bg-white">
              <Button
                className={`${
                  path === "/" ? "active-link" : ""
                } px-10 no-underline hover:underline`}
                type="link"
                href="/"
              >
                Home
              </Button>
            </li>
            <li className="py-2 bg-white">
              <Button
                className={`${
                  path === "/team" ? "active-link" : ""
                } px-10 no-underline hover:underline`}
                type="link"
                href="/team"
              >
                Team
              </Button>
            </li>
            <li className="py-2 bg-white">
              <Button
                className={`${
                  path === "/project" ? "active-link" : ""
                } px-10 no-underline hover:underline`}
                type="link"
                href="/project"
              >
                Project
              </Button>
            </li>
            <li className="mx-auto my-9 bg-white">
              <Dropdown parentClass="hidden sm:block sm:ml-6" {...props}/>
            </li>
          </ul>
        </Fade>
      </Transition>
    </header>
  );
}
