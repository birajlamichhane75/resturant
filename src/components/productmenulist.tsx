import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const Products = () => {
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
        slidesToScroll: 1
    };

    return (
        <div className='pt-12 pb-12'>
            <div className='container mx-auto px-4 sm:px-6 lg:px-8'>
                <h2 className="text-center text-3xl font-semibold mb-8 content">Gallery</h2>
                <Slider {...settings}>
                    <div className='container'>
                        <div className='grid grid-cols-2 md:grid-cols-5 gap-4'>
                            {productData1.map((product, index) => (
                                <a href='' key={index} className='cursor-pointer1'>
                                    <img src={product.image} className='productimage object-cover rounded-[3px] sm:w-48 md:w-72 lg:w-96 xl:w-100' />
                                </a>
                            ))}
                        </div>
                    </div>
                    <div className='container'>
                        <div className='grid grid-cols-2 md:grid-cols-5 gap-4'>
                            {productData1.map((product, index) => (
                                <a href='' key={index} className='cursor-pointer1'>
                                    <img src={product.image} className='productimage object-cover rounded-[3px] sm:w-48 md:w-72 lg:w-96 xl:w-100 ' />
                                </a>
                            ))}
                        </div>
                    </div>
                </Slider>
            </div>
        </div>
    );
};

export default Products;
