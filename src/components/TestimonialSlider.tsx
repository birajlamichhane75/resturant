// pages/Testimonials.js
import React from 'react';

const testimonialsData = [
  {
    name: 'John Doe',
    occupation: 'Web Developer',
    imageUrl: '/../assets/demo1.jpg',
    stars: 5,
    content: 'A gastronomic journey like no other! The Curry Heaven has consistently surpassed our expectations with their aromatic spices, delectable curries, and warm hospitality. Each visit is a memorable experience, leaving us craving more. A true haven for curry enthusiasts'
  },
  {
    name: 'Halley Frank',
    occupation: 'Marketing Specialist',
    imageUrl: '/../assets/demo1.jpg',
    stars: 4,
    content: 'The Curry Heaven has become our go-to spot for exquisite dining. From their flavorful biryanis to the tantalizing grill dishes, every bite is a burst of authentic taste. The ambiance and courteous staff further enhance the overall dining pleasure. Highly recommended'
  
  },
  {
    name: 'Lisa Trey',
    occupation: 'Public Relations',
    imageUrl: '/../assets/demo1.jpg',
    stars: 3,
    content: 'Exceptional taste, impeccable service! The Curry Heaven has mastered the art of creating culinary masterpieces. Whether you are a fan of their vegetarian options or crave the succulent kebab rolls, this restaurant promises a divine dining experience. A true haven for food lovers'
  }
];

const Testimonials = () => {
  return (
    <div className="testimonialbg  top-0 left-0 w-full h-full bg-dark z-10">
      <div className="container pt-8 mx-auto px-4 sm:px-6 lg:px-8">
        <section className="mb-32 text-center relative z-20">
          <h2 className=" pb-4 testimo-title text-center text-[45px] font-bold text-white">Happy Customers</h2>
<h2 className='testimonialtext'>Curry Heaven is a family restaurant in  serving breakfast, lunch, and dinner </h2>

<h2 className='testimonialtext1'>We serve fresh, high-quality food at an affordable price with the friendliest customer service in town.</h2>
          <div className="grid gap-6 md:grid-cols-3 xl:gap-x-12">
            {/* Map through testimonialData */}
            {testimonialsData.map((testimonial, index) => (
              <div key={index} className="mb-6 lg:mb-0">
                <div className="relative testicard block rounded-lg  shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] dark:bg-neutral-700">
                  <div className="flex">
                    <div className="  relative w-full overflow-hidden rounded-lg bg-cover bg-no-repeat shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)]"
                      data-te-ripple-init data-te-ripple-color="light">
                     
                      <a href="#!">
                        <div className="absolute top-0 right-0 bottom-0 left-0 h-full w-full overflow-hidden bg-[hsl(0,0%,98.4%,0.15)] bg-fixed opacity-0 transition duration-300 ease-in-out hover:opacity-100"></div>
                      </a>
                    </div>
                  </div>
                  <div className="p-6">
                    <h5 className="  testititle text-lg font-bold">{testimonial.name}</h5>
                   
                    <ul className="m-5 star flex justify-center">
                      {/* Render star icons */}
                      {[...Array(testimonial.stars)].map((_, index) => (
                        <li key={index}>
                          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 96 960 960" className="   w-7 text-warning">
                            <path fill="currentColor" d="m233 976 65-281L80 506l288-25 112-265 112 265 288 25-218 189 65 281-247-149-247 149Z" />
                          </svg>
                        </li>
                      ))}
                    </ul>
                    <p className=' testimonialcnt '>{testimonial.content}</p>
                  </div>
                 
                </div>
                <div className="image-section flex">
                <img src={testimonial.imageUrl} className='testimonialimage ' />
             
            <div className='testimonial-name'>{testimonial.name}</div>
                </div>
              </div>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
};

export default Testimonials;
