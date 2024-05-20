import Link from "next/link";
import React from "react";
import { RiGlobalLine } from "react-icons/ri";
import { IoMail } from "react-icons/io5";

function Footer() {
  return (
    <div className="w-full h-full footer-bg">
      <div className="container pt-16 mx-auto px-4 sm:px-6 lg:px-8 pb-12">
        <div className="grid grid-cols-1 md:grid-cols-4 ">
          <div className="footer-logo">
        <div className="logo-image w-[100px] h-auto bg-[#ffffff] p-1 ">
              
              <img src="/assets/logo.png" alt="" width={30} height={30} className='w-full h-full object-fill' />   
      
          </div>
          </div>
          <div className="country md:col-span-1">
            <h3 className="font-bold text-[18px] leading-[24px] text-[white]">
              Company
            </h3>
            <ul className="country-font">
              <li className="pt-[13px]">
                <Link href="#" className="footer-link">
                  About us
                </Link>
              </li>
              <li className="pt-[13px]">
                <Link href="#" className="footer-link">
                  News and Updates
                </Link>
              </li>
              <li className="pt-[13px]">
                <Link href="#" className="footer-link">
                  FAQs
                </Link>
              </li>
              <li className="pt-[13px]">
                <Link href="#" className="footer-link">
                  Social Responsibility
                </Link>
              </li>
            </ul>
          </div>
          <div className="country md:col-span-1">
            <h3 className="font-bold text-[18px] leading-[24px] text-[white]">
              Menu
            </h3>
            <div className="grid grid-cols-2">
              <div>
                <ul className="country-font">
                  <li className="pt-[13px]">
                    <Link href="#" className="footer-link">
                      Forretter
                    </Link>
                  </li>
                  <li className="pt-[13px]">
                    <Link href="#" className="footer-link">
                      Lunsjmeny
                    </Link>
                  </li>
                  <li className="pt-[13px]">
                    <Link href="#" className="footer-link">
                      Middag
                    </Link>
                  </li>
                  <li className="pt-[13px]">
                    <Link href="#" className="footer-link">
                      Grill Retter
                    </Link>
                  </li>
                  <li className="pt-[13px]">
                    <Link href="#" className="footer-link">
                      Vegetar
                    </Link>
                  </li>
                  <li className="pt-[13px]">
                    <Link href="#" className="footer-link">
                      Kebab Roll
                    </Link>
                  </li>
                  <li className="pt-[13px]">
                    <Link href="#" className="footer-link">
                      Alkoholfri
                    </Link>
                  </li>
                  <li className="pt-[13px]">
                    <Link href="#" className="footer-link">
                      Flaskeøl
                    </Link>
                  </li>
                </ul>
              </div>
              <div>
                <ul className="country-font">
                <li className="pt-[13px]">
                    <Link href="#" className="footer-link">
                    Biryani
                    </Link>
                  </li>
                  <li className="pt-[13px]">
                    <Link href="#" className="footer-link">
                    Fiske Retter
                    </Link>
                  </li>
                  <li className="pt-[13px]">
                    <Link href="#" className="footer-link">
                    Barnemeny
                    </Link>
                  </li>
                  <li className="pt-[13px]">
                    <Link href="#" className="footer-link">
                    Tilbehør
                    </Link>
                  </li>
                  <li className="pt-[13px]">
                    <Link href="#" className="footer-link">
                    Nanbrød
                    </Link>
                  </li>
                  <li className="pt-[13px]">
                    <Link href="#" className="footer-link">
                    Fatøl
                    </Link>
                  </li>
                  <li className="pt-[13px]">
                    <Link href="#" className="footer-link">
                    Rødvin
                    </Link>
                  </li>
                  <li className="pt-[13px]">
                    <Link href="#" className="footer-link">
                    Hvitvin
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="country md:col-span-1">
            <h3 className="font-bold text-[18px] leading-[24px] text-[white]">
              Contact
            </h3>
            <p className="text-white pt-[16px]">The Curry Heaven Oslo, Norway</p>
            <p className="text-white pt-[16px] flex gap-2">
              <IoMail size={22} className="text-[#ffffff]" />
              info@thecurryheaven.no
            </p>
            <p className="text-white pt-[16px] flex gap-2">
              <RiGlobalLine size={22} className="text-[#ffffff]" />
              www.thecurryheaven.no
            </p>
          </div>
        </div>

        <div className="border-y-[1px] border-y-[#fff] md:flex justify-between py-4 mt-10">
          <p className="text-[1rem] copyright md:text-[1.125rem] text-[#fff] font-normal text-center md:text-left pb-4 md:pb-0">
            © Copyright {new Date().getFullYear()} The Curry Heaven. All rights reserved.
          </p>
          <ul className="flex lg:items-center lg:justify-between gap-3 lg:flex-nowrap flex-wrap justify-center whitespace-nowrap">
            <li className="border-r-[1px] border-r-[#555555] lg:pr-6 pr-3">
              <Link
                className="text-[1rem] md:text-[1.125rem] text-[#fff] font-normal "
                href=""
                title="Contact Us"
              >
                Contact Us
              </Link>
            </li>
            <li className="border-r-[1px] border-r-[#555555] lg:pr-6 pr-3">
              <Link
                className="text-[1rem] md:text-[1.125rem] text-[#fff] font-normal "
                href=""
                title="Terms of Use"
              >
                Terms of Use
              </Link>
            </li>
            <li>
              <Link
                className="text-[1rem] md:text-[1.125rem] text-[#fff] font-normal "
                href=""
                title="Privacy Policy"
              >
                Privacy Policy
              </Link>
            </li>
          </ul>
        </div>
        {/* Back to Top button */}
        <div className="back-to-top"></div>
      </div>
    </div>
  );
}

export default Footer;
