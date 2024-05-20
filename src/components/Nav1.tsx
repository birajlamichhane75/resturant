import React, { useEffect, useRef, useState } from "react";
import Link from "next/link";
import Slider from 'react-slick';
import Mobilenav from './Mobilenav'
import { HiShoppingBag } from "react-icons/hi2";
import { BsPerson } from "react-icons/bs";

// Import React Slick styles
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Cart from "./Cart";
import Profile from "./Profile";
import { usePathname } from "next/navigation";

const Nav1 = () => {
  const [menu, setMenu] = useState(false);
  const cartRef = useRef<HTMLDivElement>(null);
  const profileRef = useRef<HTMLDivElement>(null);
  const [login, setlogin] = useState(true);
  const [showcCart, setshowcCart] = useState(false);
  const [showProfile, setshowProfile] = useState(false);


  const images = [
    { src: "/assets/mainbaneer.jpg", title: "Flavors at Your Fingertips: Search, Order, Savor!" },
    { src: "/assets/mainbanner2.jpg", title: "Flavors at Your Fingertips: Search, Order, Savor!" },

  ];

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
  }






  //   useEffect(() => {
  //     document.addEventListener("mousedown", (e) => {
  //       if (
  //         wrapperRef.current &&
  //         typeof wrapperRef.current === "object" &&
  //         !wrapperRef.current?.contains(e.target as Node | null)
  //       ) {
  //         toggleShow(false);
  //         setFilteredOptions(options);
  //       }
  //     });
  //     return () => {
  //       document.removeEventListener("mousedown", () => null);
  //     };
  //   }, [wrapperRef, options]);
  // const wrapperRef = useRef<HTMLDivElement>(null);
  // ref={wrapperRef}


  const toggleCart = () => {
    setshowcCart(!showcCart)
    setshowProfile(false)
  }
  const toggleProfile = () => {
    setshowProfile(!showProfile)
    setshowcCart(false)
  }





  return (
    <>

      <Slider {...settings}>
        {images.map((image, index) => (
          <div key={index} className="relative w-full h-[475px]">
            <div className="absolute inset-0 bg-black opacity-50"></div>
            <img src={image.src} className='w-full h-full object-cover' alt="" loading='lazy' />
            <div className="absolute inset-0 flex justify-center items-center">
              <div className='container slider-banner lg:pt-24 mx-auto px-4 sm:px-6 lg:px-8 lg:pb-32'>
                <div className="text-center text-white">
                  <h1 className="pt-8 text-3xl font-bold desc"> {image.title}</h1>
                  <div className="search-container ">
                    <form className="example flex items-center justify-center" action="" style={{ margin: 'auto', maxWidth: '950px' }}>
                      <div className="relative flex-grow flex">
                        <input
                          type="text"
                          placeholder="Search for Your Favorite Dish Here"
                          id="search2"
                          className="ga-fp border-b-0 border-l border-r border-t rounded-l-lg  flex-grow "
                          autoComplete="off"
                        />
                        <button className="btn btn--primary btn-lg btn-block text-white bg-[#e65b00] rounded-r-lg p-3 pr-8" type="button">
                          <span className=' text-center'>Search</span>
                        </button>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </Slider>

      <div className="absolute top-0 left-0 right-0 flex justify-center items-center  ">
        <div className="py-5 container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="header-section flex justify-between text-white">
            <Link href="/">
              <div className="logo-image w-[100px] h-auto bg-[#ffffff] p-1 ">

                <img src="/assets/logo.png" alt="" width={30} height={30} className='w-full h-full object-fill' />

              </div>
            </Link>
            <div className="nav-bar ">
              <ul className='flex gap-4 relative menu '>
                <li className="mr-10 text-xl">
                  <Link href="/">
                    <p className="block py-2 px-4  cursor-pointer uppercase">Home</p>
                  </Link>
                </li>
                <li className="mr-10 text-xl relative">
                  <p
                    className="text-white hover:text-gray-300 cursor-pointer pt-2 uppercase"
                    onMouseEnter={() => setMenu(true)}
                    onMouseLeave={() => setMenu(false)}
                  >
                    Menu
                  </p>
                  {menu && (
                    <div className="absolute bg-[#6d3022] text-white w-[512px] py-2 px-4 rounded-lg shadow-lg"
                      onMouseEnter={() => setMenu(true)}>
                      <div className="flex   gap-20">

                        {/* First column */}
                        <ul className="  sub-menu borderline w-96">
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


                        </ul>
                        {/* Second column */}
                        <ul className="w-96 borderline sub-menu">
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
                              <p className="block py-2 px-4 hover:bg-[#f05d00] cursor-pointer">Nanbrød</p>
                            </Link>
                          </li>

                          <li>
                            <Link href="/foodlist-details">
                              <p className="block py-2 px-4 hover:bg-[#f05d00] cursor-pointer">Fatøl</p>
                            </Link>
                          </li>

                          <li>
                            <Link href="/foodlist-details">
                              <p className="block py-2 px-4 hover:bg-[#f05d00] cursor-pointer">Rødvin</p>
                            </Link>
                          </li>

                          <li>
                            <Link href="/foodlist-details">
                              <p className="block py-2 px-4 hover:bg-[#f05d00] cursor-pointer">Hvitvin</p>
                            </Link>
                          </li>



                        </ul>
                      </div>
                    </div>
                  )}
                </li>
                <li className="mr-10 text-xl">
                  <Link href="/book-a-table">
                    <p className="block py-2 px-4  cursor-pointer uppercase">Book a Table</p>
                  </Link>
                </li>



                <li className="mr-10 text-xl">
                  <Link href="/gallery">
                    <p className="block py-2 px-4  cursor-pointer uppercase">Gallery</p>
                  </Link>
                </li>

                <li className="mr-10 text-xl">
                  <Link href="/">
                    <p className="block py-2 px-4  cursor-pointer  capitalize">FAQs</p>
                  </Link>
                </li>

                <li className="mr-10 text-xl">
                  <Link href="/contact">
                    <p className="block py-2 px-4  cursor-pointer uppercase">Contact</p>
                  </Link>
                </li>

                {
                  login ? <div className="flex items-start">
                    <li className=" text-xl">
                      <p onClick={toggleProfile} className="block py-2 px-4 cursor-pointer uppercase"><BsPerson className="text-2xl" /></p>
                    </li>

                    <li className="text-xl">
                      <p onClick={toggleCart} className="block py-2 px-4 cursor-pointer uppercase"><HiShoppingBag className="text-2xl" /></p>
                    </li>

                    <div className="absolute top-full right-0 z-40">
                      {
                        showcCart ? <div ref={cartRef} className="" id='cart' >
                          <Cart />
                        </div> : <></>
                      }
                      {
                        showProfile ? <div ref={profileRef} className="">
                          <Profile />
                        </div> : <></>
                      }
                    </div>
                  </div> :
                    <>
                      <button className="bg-red-700 rounded-md shadow-md">
                        <Link href="/login" className="px-6 py-2">Login</Link>
                      </button>
                    </>
                }
              </ul>
            </div>
            <Mobilenav />
          </div>
        </div>
      </div>
    </>
  );
};

export default Nav1;
