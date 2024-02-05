import React from "react";
import navPic from '../images/me-nav.png';
import { Link } from "react-router-dom";

export default function Navbar({ fixed }) {
  const [navbarOpen, setNavbarOpen] = React.useState(false);
  return (
    <>
      <nav className="sticky flex flex-wrap items-center justify-between px-2 py-3 mb-0 bg-sky-900">
        <div className="container px-4 mx-auto flex flex-wrap items-center justify-between">
          <div className="w-full relative flex justify-between lg:w-auto lg:static lg:block lg:justify-start">
            <div>
            <div className="mr-2 h-12 w-12 shrink-0 overflow-hidden rounded-full">
              <img alt="Twinlock" src={navPic} decoding="async" data-nimg="intrinsic"/>
            </div>
            <a
              className="text-sm font-bold leading-relaxed  mr-4 py-2 whitespace-nowrap  text-white"
              href="#twista"
            >
              Twinlock Ncube
            </a>
            </div>
            <button
              className="text-white cursor-pointer text-xl leading-none px-3 py-1 border border-solid border-transparent rounded bg-transparent block lg:hidden outline-none focus:outline-none"
              type="button"
              onClick={() => setNavbarOpen(!navbarOpen)}
            >
              <i className="fas fa-bars"></i>
            </button>
          </div>
          <div
            className={
              "lg:flex flex-grow items-center" +
              (navbarOpen ? " flex" : " hidden")
            }
            id="example-navbar-danger"
          >
            <ul className="flex flex-col lg:flex-row list-none lg:ml-auto">
            <li className="nav-item">
                <Link
                  className="px-3 py-2 flex items-center text-xs font-bold leading-snug text-white hover:opacity-75"
                  to="/portfolio/"
                >
                  <i className="fas fa-thin fa-home text-lg leading-lg text-white opacity-75"></i><span className="ml-2">Home</span>
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  className="px-3 py-2 flex items-center text-xs font-bold leading-snug text-white hover:opacity-75"
                  to="/portfolio/about"
                >
                  <i className="fas fa-thin fa-user-tie text-lg leading-lg text-white opacity-75"></i><span className="ml-2">About Me</span>
                </Link>
              </li>
              {/*<li className="nav-item">
                <a
                  className="px-3 py-2 flex items-center text-xs  font-bold leading-snug text-white hover:opacity-75"
                  href="#twista"
                >
                  <i className="fas fa-envelope text-lg leading-lg text-white opacity-75"></i><span className="ml-2">Contact</span>
                </a>
              </li>*/}
              <li className="nav-item">
                <a
                  className="px-3 py-2 flex items-center text-xs  font-bold leading-snug text-white hover:opacity-75"
                  href="https://github.com/Twinlockncube" target= "_blank"
                >
                  <i className="fas fa-brands fa-github text-lg leading-lg text-white opacity-75"></i><span className="ml-2">Github</span>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}
