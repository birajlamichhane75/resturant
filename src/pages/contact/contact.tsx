import React from 'react';
import { FaPhone, FaGlobe, FaMapMarkerAlt, FaEnvelope } from 'react-icons/fa';

const Contact = () => {
  return (
    <>
    
      <section className="bg-cover bg-center banner-section banner-about contactbackground">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col justify-center items-center">
            <div className="text-center">
              <strong className="text-white text-2xl md:text-4xl lg:text-5xl font-bold">Contact Us</strong>
            </div>
          </div>
        </div>
      </section>

      <section className="aboutlifequote-section">
        <div className='container mx-auto px-4 sm:px-6 lg:px-8'>
          <div className="aboutsection flex flex-col md:flex-row px-4 md:px-20 py-8 md:py-12">
          <div className="wow fadeInUp md:w-1/2" data-wow-duration=".7s">
  <div className=" leading-6">
    <div className="flex items-center">
      <div className="w-10 h-10 flex-shrink-0 flex items-center justify-center bg-[#6f2e1e] rounded-full p-2">
        <FaMapMarkerAlt className="h-6 w-6 text-white" />
      </div>
      <div className="ml-4">
      <p className="text-lg font-semibold">Location:</p>
        <p className="text-black">The Curry Heaven Oslo, Norway</p>
      </div>
    </div>
    <div className="flex items-center">
      <div className="w-10 h-10 flex-shrink-0 flex items-center justify-center bg-[#6f2e1e] rounded-full p-2">
        <FaPhone className="h-6 w-6 text-white" />
      </div>
      <div className="ml-4">
      <p className="text-lg font-semibold">Phone:</p>
        <p className="text-black">+61484682110</p>
      </div>
    </div>
    <div className="flex items-center">
      <div className="w-10 h-10 flex-shrink-0 flex items-center justify-center bg-[#6f2e1e] rounded-full p-2">
        <FaEnvelope className="h-6 w-6 text-white" />
      </div>
      <div className="ml-4">
      <p className="text-lg font-semibold">Email:</p>
        <p className="text-black">info@thecurryheaven.no</p>
      </div>
    </div>
    <div className="flex items-center">
      <div className="w-10 h-10 flex-shrink-0 flex items-center justify-center bg-[#6f2e1e] rounded-full p-2">
        <FaGlobe className="h-6 w-6 text-white" />
      </div>
      <div className="ml-4">
      <p className="text-lg font-semibold">Website:</p>
        <p className="text-black">www.thecurryheaven.no</p>
      </div>
    </div>
  </div>
</div>


            <div className=" bg-[#6f2e1e] pb-10 md:w-1/2 contact-box">
              <div className='container mx-auto px-4 sm:px-6 lg:px-8'>
                <div className="wow fadeInUp" data-wow-duration=".7s">
                  <form className="w-full max-w-lg mx-auto mt-8">
                    <div className="flex flex-wrap -mx-3 mb-6">
                      <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                        <input
                          className="appearance-none block w-full bg-gray-200 text-gray-700 border rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
                          id="grid-first-name"
                          type="text"
                          placeholder="First Name"
                        />
                      </div>
                      <div className="w-full md:w-1/2 px-3">
                        <input
                          className="appearance-none block w-full bg-gray-200 text-gray-700 border rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                          id="grid-last-name"
                          type="text"
                          placeholder="Last Name"
                        />
                      </div>
                    </div>
                    <div className="flex flex-wrap -mx-3 mb-6">
                      <div className="w-full px-3">
                        <input
                          className="appearance-none block w-full bg-gray-200 text-gray-700 border rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                          id="grid-email"
                          type="email"
                          placeholder="Email"
                        />
                      </div>
                    </div>
                    <div className="flex flex-wrap -mx-3 mb-6">
                      <div className="w-full px-3">
                        <input
                          className="appearance-none block w-full bg-gray-200 color-[#6c757d] border rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                          id="grid-phone"
                          type="tel"
                          placeholder="Phone Number"
                        />
                      </div>
                    </div>
                    <div className="flex flex-wrap -mx-3 mb-6">
                      <div className="w-full px-3">
                        <input
                          className="appearance-none block w-full bg-gray-200 text-gray-700 border rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                          id="grid-subject"
                          type="text"
                          placeholder="Subject"
                        />
                      </div>
                    </div>
                    <div className="flex flex-wrap -mx-3 mb-6">
                      <div className="w-full px-3">
                        <textarea
                          className="appearance-none block w-full bg-gray-200 text-gray-700 border rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                          id="grid-message"
                          placeholder="Your message..."
                        ></textarea>
                      </div>
                    </div>
                    <div className="md:flex md:items-center">
                      <div className="md:w-1/3">
                        <button
                          className="shadow bg-[#e65b00] hover:bg-[black] focus:shadow-outline focus:outline-none text-white font-bold py-2 px-6 rounded"
                          type="button"
                        >
                          Send
                        </button>
                      </div>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="relative h-0" style={{ paddingBottom: '35%' }}>
        <div className='container mx-auto px-4 sm:px-6 lg:px-8'>
          <iframe
            className="absolute inset-0 w-full h-full"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3152.6397941275013!2d144.89693857488706!3d-37.798480533163!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6ad65d923739e757%3A0xe35e50bdd5b0c56f!2zNjIgTmljaG9sc29uIFN0LCBGb290c2NyYXkgVklDIDMwMTEsIOCkheCkt-CljeCkn-CljeCksOClh-CksuCkv-Ckr-Ckvg!5e0!3m2!1sne!2snp!4v1709122453732!5m2!1sne!2snp"
            width="100%"
            height="100"
            style={{ border: '0' }}
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </div>
    </>
  );
};

export default Contact;
