import React from 'react';

const ProductMenu = () => {
  const product = [
    {
      name: "Forretter",
      image: "/../assets/chili-chicken.jpg",
    },
    {
      name: "Lunsjmeny",
      image: "/../assets/india.jpg",
    },
    {
      name: "Middag",
      image: "/../assets/manchurian.jpg",
    },
    {
      name: "Grill Retter",
      image: "/../assets/salmon.jpg",
    },
  
    {
      name: "Vegetar",
      image: "/../assets/side-dish.jpg",
    },
    {
      name: "Kebab Roll",
      image: "/../assets/tandoori.jpg",
    },
    {
      name: "Alkoholfri",
      image: "/../assets/curry.jpg",
    },
    {
      name: "Flaskeøl",
      image: "/../assets/chili-chicken.jpg",
    },
    {
      name: "Biryani",
      image: "/../assets/india.jpg",
    },
    {
      name: "Fiske Retter",
      image: "/../assets/manchurian.jpg",
    },
    {
      name: "Barnemeny",
      image: "/../assets/salmon.jpg",
    },
    // Add more popular cuisines as needed
    {
      name: "Tilbehør",
      image: "/../assets/side-dish.jpg",
    },
    {
      name: "Nanbrød",
      image: "/../assets/tandoori.jpg",
    },
    {
      name: "Fatøl",
      image: "/../assets/curry.jpg",
    },

    {
      name: "Rødvin",
      image: "/../assets/chili-chicken.jpg",
    },
    {
      name: "Hvitvin",
      image: "/../assets/india.jpg",
    },
    {
      name: "Middag",
      image: "/../assets/manchurian.jpg",
    },
    {
      name: "Grill Retter",
      image: "/../assets/salmon.jpg",
    },
 
  ];

  return (
    <div className=' pb-16'>
    <div className="container  pt-16 mx-auto px-4 sm:px-6 lg:px-8 ">
    <div className="title text-center">
      <h2 className="font-bold desc text-[#f4851a]">Culinary Delights at a Glance</h2>
    </div>
    <p className="mt-4 panel-text text-center">Explore our diverse menu offerings right at your fingertips. From tantalizing starters to hearty main courses, our menu is a culinary journey you won't want to miss. Indulge in flavorful grill dishes, savor the richness of Biryani, or delight in our vegetarian options.</p>

    <div className="grid grid-cols-2 md:grid-cols-6  gap-[0.75rem] ">
      {product.map((cuisine, index) => (
        <div key={index} className="col-span-1 thumb bg-gray-200 rounded-md relative">
          <a href="/" className="block">
            <div className="productimage w-full h-full">
              {/* Image */}
              <img src={cuisine.image} alt={cuisine.name} className="object-cover w-full h-full" loading="lazy" />
              {/* Text at the bottom */}
              <span className="absolute imagetext bottom-0 left-0 right-0 bg-white text-black font-semibold p-1 text-center">{cuisine.name}</span>
            </div>
          </a>
        </div>
      ))}
    </div>
  </div>
  </div>
  );
};

export default ProductMenu;
