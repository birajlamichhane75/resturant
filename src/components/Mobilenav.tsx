import React, { useState } from 'react';
import Link from 'next/link';

const MobileToggle = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [menu, setMenu] = useState(false);

  const toggleNavbar = () => {
    setIsOpen(!isOpen);
  };

  const toggleMenu = () => {
    setMenu(!menu);
  };

  return (
    <div className="md:hidden absolute top-0 left-0 right-0 bg-[#713821] ">
      <button
        onClick={toggleNavbar}
        type="button"
        className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none  focus:text-white"
        aria-controls="mobile-menu"
        aria-expanded="false"
      >
        <span className="sr-only">Open main menu</span>
        {!isOpen ? (
          <svg
            className="block h-6 w-6"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            aria-hidden="true"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
        ) : (
          <svg
            className="block h-6 w-6"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            aria-hidden="true"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        )}
      </button>
      {isOpen && (
        <div className="md:hidden bg-[#713821]" id="mobile-menu">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <ul className="flex flex-col space-y-2">
              <li className="text-white hover:text-gray-300 cursor-pointer" onClick={toggleMenu}>
                <p className="block py-2 px-4 uppercase">Menu</p>
              </li>
              {menu && (
                <div className="bg-[#6d3022] text-white py-2 px-4 rounded-lg shadow-lg">
                  <div className="grid grid-cols-3 ">
                    <div>
                      <ul className="flex flex-col space-y-2">
                        <li>
                          <Link href="/foodlist-details">
                            <p className="block py-2 px-4 hover:bg-[#f05d00] cursor-pointer">Forretter</p>
                          </Link>
                        </li>
                        <li>
                          <Link href="/foodlist-details">
                            <p className="block py-2 px-4 hover:bg-[#f05d00] cursor-pointer">Lunsjmeny</p>
                          </Link>
                        </li>
                        <li>
                          <Link href="/foodlist-details">
                            <p className="block py-2 px-4 hover:bg-[#f05d00] cursor-pointer">Middag</p>
                          </Link>
                        </li>
                        <li>
                          <Link href="/foodlist-details">
                            <p className="block py-2 px-4 hover:bg-[#f05d00] cursor-pointer">Grill Retter</p>
                          </Link>
                        </li>
                        <li>
                          <Link href="/foodlist-details">
                            <p className="block py-2 px-4 hover:bg-[#f05d00] cursor-pointer">Nanbrød</p>
                          </Link>
                        </li>
                      </ul>
                    </div>
                    <div>
                      <ul className="flex flex-col space-y-2">
                        <li>
                          <Link href="/foodlist-details">
                            <p className="block py-2 px-4 hover:bg-[#f05d00] cursor-pointer">Vegetar</p>
                          </Link>
                        </li>
                        <li>
                          <Link href="/foodlist-details">
                            <p className="block py-2 px-4 hover:bg-[#f05d00] cursor-pointer">Kebab Roll</p>
                          </Link>
                        </li>
                        <li>
                          <Link href="/foodlist-details">
                            <p className="block py-2 px-4 hover:bg-[#f05d00] cursor-pointer">Alkoholfri</p>
                          </Link>
                        </li>
                        <li>
                          <Link href="/foodlist-details">
                            <p className="block py-2 px-4 hover:bg-[#f05d00] cursor-pointer">Flaskeøl</p>
                          </Link>
                        </li>
                        <li>
                          <Link href="/foodlist-details">
                            <p className="block py-2 px-4 hover:bg-[#f05d00] cursor-pointer">Fatøl</p>
                          </Link>
                        </li>
                      </ul>
                    </div>
                    <div>
                      <ul className="flex flex-col space-y-2">
                        <li>
                          <Link href="/foodlist-details">
                            <p className="block py-2 px-4 hover:bg-[#f05d00] cursor-pointer">Biryani</p>
                          </Link>
                        </li>
                        <li>
                          <Link href="/foodlist-details">
                            <p className="block py-2 px-4 hover:bg-[#f05d00] cursor-pointer">Fiske Retter</p>
                          </Link>
                        </li>
                        <li>
                          <Link href="/foodlist-details">
                            <p className="block py-2 px-4 hover:bg-[#f05d00] cursor-pointer">Barnemeny</p>
                          </Link>
                        </li>
                        <li>
                          <Link href="/foodlist-details">
                            <p className="block py-2 px-4 hover:bg-[#f05d00] cursor-pointer">Tilbehør</p>
                          </Link>
                        </li>
                        <li>
                          <Link href="/foodlist-details">
                            <p className="block py-2 px-4 hover:bg-[#f05d00] cursor-pointer">Rødvin</p>
                          </Link>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              )}
              <li>
                <Link href="/book-a-table">
                  <p className="block py-2 px-4 uppercase">Book a Table</p>
                </Link>
              </li>
              <li>
                <Link href="/gallery">
                  <p className="block py-2 px-4 uppercase">Gallery</p>
                </Link>
              </li>
              <li>
                <Link href="/">
                  <p className="block py-2 px-4 capitalize">FAQs</p>
                </Link>
              </li>
              <li>
                <Link href="/contact">
                  <p className="block py-2 px-4 uppercase">Contact</p>
                </Link>
              </li>
            </ul>
          </div>
        </div>
      )}
    </div>
  );
};

export default MobileToggle;
