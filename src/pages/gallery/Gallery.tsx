import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const Gallery = () => {
  const images1 = ["/../assets/tandoori.jpg", "/../assets/side-dish.jpg", "/../assets/salmon.jpg"]; 
  const images2 = ["/../assets/manchurian.jpg", "/../assets/india.jpg", "/../assets/curry.jpg"]; 
  
  const productData1 = [
    {
      image: "/../assets/tandoori.jpg",
    },
    {
      image: "/../assets/manchurian.jpg",
    },
    {
      image: "/../assets/side-dish.jpg",
    },
    {
      image: "/../assets/india.jpg",
    },
    {
      image: "/../assets/tandoori.jpg",
    },
  ];

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplaySpeed: 3000, 
    
  };

  return (
    <div>
      <div className='pt-12 pb-12'>
        <div className='container mx-auto px-4 sm:px-6 lg:px-8'>
          <h2 className="text-center text-3xl font-semibold mb-8 content">Gallery</h2>

          {/* Grid 1 */}
          <div className="grid md:grid-cols-3 sm:grid-cols-2 gap-4 mb-4">
            {images1.map((imageUrl, index) => (
              <div key={index}>
                <img src={imageUrl} alt={`Image ${index + 1}`} className="w-full h-[296px]" />
              </div>
            ))}
          </div>

          {/* Grid 2 */}
          <div className="grid md:grid-cols-3 sm:grid-cols-2 gap-4 mb-4">
            {images2.map((imageUrl, index) => (
              <div key={index}>
                <img src={imageUrl} alt={`Image ${index + 4}`} className="w-full h-[296px]" />
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className='pt-8 pb-12'>
        <div className='container mx-auto px-4 sm:px-6 lg:px-8'>
          <Slider {...settings}>
            <div className='container'>
              <div className='grid grid-cols-2 md:grid-cols-5 gap-4'>
                {productData1.map((product, index) => (
                  <a href='' key={index} className='cursor-pointer1'>
                    <img src={product.image} className='productimage object-cover rounded-[3px] sm:w-48 md:w-72 lg:w-96 xl:w-100' alt={`Product ${index}`} />
                  </a>
                ))}
              </div>
            </div>
            <div className='container'>
              <div className='grid grid-cols-2 md:grid-cols-5 gap-4'>
                {productData1.map((product, index) => (
                  <a href='' key={index} className='cursor-pointer1'>
                    <img src={product.image} className='productimage object-cover rounded-[3px] sm:w-48 md:w-72 lg:w-96 xl:w-100' alt={`Product ${index}`} />
                  </a>
                ))}
              </div>
            </div>
          </Slider>
        </div>
      </div>
    </div>
  );
}

export default Gallery;
