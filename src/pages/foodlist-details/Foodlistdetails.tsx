import React, { useState } from 'react';
import { CgAdd } from "react-icons/cg";
const Foodlistdetails = () => {
  const [tab, setTab] = useState(1);
  const [vendorInfo, setVendorInfo] = useState({ IsFavouriteVendor: 0 }); 

  const ShowMap = () => {
    console.log("Show Map functionality will be implemented here.");
  };

  const UpdateFavVendor = () => {
    setVendorInfo(prevState => ({
      ...prevState,
      IsFavouriteVendor: prevState.IsFavouriteVendor === 0 ? 1 : 0
    }));
  };

  return (
    <section className="menu main-space mb-4 ">
      <div className="menu__nav  top-0">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8  ">
          <div className="tab-title ">
            <ul className="tab1 flex">
              <li className={`tab-item cursor-pointer ${tab === 1 ? 'selected' : ''}`} onClick={() => setTab(1)}>
                <a className={`tab-link ${tab === 1 ? 'active' : ''}`}>Menu</a>
              </li>
              <li className={`tab-item cursor-pointer ${tab === 2 ? 'selected' : ''}`} onClick={() => setTab(2)}>
                <a className={`tab-link ${tab === 2 ? 'active' : ''}`} onClick={ShowMap}>About</a>
              </li>
              <li className={`tab-item cursor-pointer ${tab === 4 ? 'selected' : ''}`} onClick={() => setTab(4)}>
                <a className={`tab-link ${tab === 4 ? 'active' : ''}`}>Other Branches</a>
              </li>
         
            
           
            </ul>
<div className="loginbtn ">
            <a href="/login">
  <h2 className='font-IBM  btn font-normal text-sm leading-[18px] bg-[#5f1a0a]  text-[#FBFCFC] py-[10px] pl-[18px] pr-[18px]  cursor-pointer'>LOGIN IN</h2>
</a>
</div>
         
          </div>
        </div>
      </div>

      {tab === 1 && (
        <div className="restaurant-front spinner">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 ">
            <div className="flex flex-col sm:flex-row gap-[4rem]">
              <div className="sticky-side" id="menuscroll">
                <div className="cart__content">
                  <ul className="nav  text-[20px]">
                    <li className="recommended pb-4">
                      <span className="icomoon icon-whatshot icomoon--green"></span>
                      <span className="text-[#5f1909] text-[20px]   font-bold">Categories</span>
                    </li>
                    {/* Render your categories here */}
                    <hr/>
                    <li className='pt-4 '>
                      <a href="">Forretter</a>
                    </li>
                    <hr/>
                    <li className='pt-4 '>
                      <a href="">Lunsjmeny</a>
                    </li>
                    <hr/>
                    <li className='pt-4 '>
                    <a href="">Middag</a>
                    </li>
                    <hr/>

                    <li className='pt-4 '>
                      <a href="">Grill Retter</a>
                    </li>
                    <hr/>
                    <li className='pt-4  '>
                    <a href="">Vegetar</a>
                    </li>
                    <hr/>
                    <li className='pt-4  '>
                      <a href="">Kebab Roll</a>
                    </li>
                    <hr/>
                    <li className='pt-4  '>
                      <a href="">Alkoholfri</a>
                    </li>
                    <hr/>
                    <li className='pt-4  '>
                      <a href="">Flaskeøl</a>
                    </li>

                    <hr/>
                    <li className='pt-4  '>
                      <a href="">Biryani</a>
                    </li>
                    <hr/>
                    <li className='pt-4  '>
                      <a href="">Fiske Retter</a>
                    </li>
                    <hr/>
                    <li className='pt-4  '>
                      <a href="">Barnemeny</a>
                    </li>
                    <hr/>
                    <li className='pt-4  '>
                      <a href="">Tilbehør</a>
                    </li>
                    <hr/>
                    <li className='pt-4  '>
                      <a href="">Nanbrød</a>
                    </li>
                    <hr/>
                    <li className='pt-4  '>
                      <a href="">Rødvin</a>
                    </li>
                    <hr/>
                    <li className='pt-4  '>
                      <a href="">Fatøl</a>
                    </li>
                    <hr/>
                    <li className='pt-4  '>
                      <a href="">Hvitvin</a>
                    </li>
                  
                  
                    {/* Add more categories as needed */}
                  </ul>
                </div>
              </div>

              <div className="category-content  w-full sm:w-[55%] text-[20px]" id="category1">
                <div className="menu__search">
                  <div className="input-group has-feedback">
                    <input type="search" className="form-control" placeholder="Search Food Items"/>
                    <span className="input-group-addon icomoon icon-search"  title="search"></span>
                  </div>
                </div>

                <div className="menucontent mt-10">
                  <div className="menutitle bg-[#FBF9F9] p-3">
                    <h1>Signature Pizza</h1>
                  </div>

                  <a href="/login">
      <div className="card mt-4 p-3">
        <div className="titlemenu flex justify-between">
          <h1>The Hulk Pizza</h1>
          <div className="line-throw flex gap-3 ">
            <p className='mt-[-3px]'>Rs <span className='font-bold'>2000</span></p>
            <CgAdd />
          </div>
        </div>
        <p className='pt-2 pr-16 pb-5'>mozzarella, pizza sauce, chicken, caramelized onions, jalapenos, ricotta and a homemade pineapple chilli sauce</p>
      </div>
    </a>
   <hr/>
   
                  <a href="/login">
                  <div className="card mt-4 p-3">
                    <div className="titlemenu flex justify-between">
                      <h1>The Hulk Pizza</h1>
                      <div className="line-throw flex gap-3">
                    
                      <p className=' mt-[-3px]' >Rs <span className='font-bold'>2000</span></p>
                        <CgAdd />
                    </div>
                    </div>
                    <p className='pt-2 pr-16 pb-5'>mozzarella, pizza sauce, chicken, caramelized onions, jalapenos, ricotta and a homemade pineapple chilli sauce</p>
                  </div>
                  </a>
                  <hr/>


                  <a href="/login">
                  <div className="card mt-4 p-3">
                    <div className="titlemenu flex justify-between">
                      <h1>The Hulk Pizza</h1>
                      <div className="line-throw flex gap-3">
                    
                      <p className=' mt-[-3px]' >Rs <span className='font-bold'>2000</span></p>
                        <CgAdd />
                    </div>
                    </div>
                    <p className='pt-2 pr-16 pb-5'>mozzarella, pizza sauce, chicken, caramelized onions, jalapenos, ricotta and a homemade pineapple chilli sauce</p>
                  </div>
                  </a>
                  <hr/>


                  <a href="/login">
                  <div className="card mt-4 p-3">
                    <div className="titlemenu flex justify-between">
                      <h1>The Hulk Pizza</h1>
                      <div className="line-throw flex gap-3">
                    
                      <p className=' mt-[-3px]' >Rs <span className='font-bold'>2000</span></p>
                          <CgAdd />
                      </div>
                    </div>
                    <p className='pt-2 pr-16 pb-5'>mozzarella, pizza sauce, chicken, caramelized onions, jalapenos, ricotta and a homemade pineapple chilli sauce</p>
                  </div>
                  </a>
                  <hr/>


                  <a href="/login">
                  <div className="card mt-4 p-3">
                    <div className="titlemenu flex justify-between">
                      <h1>The Hulk Pizza</h1>
                      <div className="line-throw flex gap-3">
                    
                      <p className=' mt-[-3px]' >Rs <span className='font-bold'>2000</span></p>
                        <CgAdd />
                    </div>
                    </div>
                    <p className='pt-2 pr-16 pb-5'>mozzarella, pizza sauce, chicken, caramelized onions, jalapenos, ricotta and a homemade pineapple chilli sauce</p>
                  </div>
                  </a>
                  <hr/>


                  <a href="/login">
                  <div className="card mt-4 p-3">
                    <div className="titlemenu flex justify-between">
                      <h1>The Hulk Pizza</h1>
                      <div className="line-throw flex gap-3">
                    
                      <p className=' mt-[-3px]' >Rs <span className='font-bold'>2000</span></p>
                          <CgAdd />
                      </div>
                    </div>
                    <p className='pt-2 pr-16 pb-5'>mozzarella, pizza sauce, chicken, caramelized onions, jalapenos, ricotta and a homemade pineapple chilli sauce</p>
                  </div>
                  </a>
                  <hr/>


                  <a href="/login">
                  <div className="card mt-4 p-3">
                    <div className="titlemenu flex justify-between">
                      <h1>The Hulk Pizza</h1>
                      <div className="line-throw flex gap-3">
                    
                      <p className=' mt-[-3px]' >Rs <span className='font-bold'>2000</span></p>
                    <CgAdd />
                    </div>
                    </div>
                    <p className='pt-2 pr-16 pb-5'>mozzarella, pizza sauce, chicken, caramelized onions, jalapenos, ricotta and a homemade pineapple chilli sauce</p>
                  </div>
                  </a>
                  <hr/>


                  <a href="/login">
                  <div className="card mt-4 p-3">
                    <div className="titlemenu flex justify-between">
                      <h1>The Hulk Pizza</h1>
                      <div className="line-throw flex gap-3">
                    
                      <p className=' mt-[-3px]' >Rs <span className='font-bold'>2000</span></p>
                      <CgAdd />
                      </div>
                    </div>
                    <p className='pt-2 pr-16 pb-5'>mozzarella, pizza sauce, chicken, caramelized onions, jalapenos, ricotta and a homemade pineapple chilli sauce</p>
                  </div>
                  </a>
                  <hr/>


                  <a href="/login">
                  <div className="card mt-4 p-3">
                    <div className="titlemenu flex justify-between">
                      <h1>The Hulk Pizza</h1>
                      <div className="line-throw flex gap-3">
                    
                      <p className=' mt-[-3px]' >Rs <span className='font-bold'>2000</span></p>
                        <CgAdd />
                    </div>
                    </div>
                    <p className='pt-2 pr-16 pb-5'>mozzarella, pizza sauce, chicken, caramelized onions, jalapenos, ricotta and a homemade pineapple chilli sauce</p>
                  </div>
                  </a>
                  <hr/>


                  <a href="/login">
                  <div className="card mt-4 p-3">
                    <div className="titlemenu flex justify-between">
                      <h1>The Hulk Pizza</h1>
                      <div className="line-throw flex gap-3">
                    
                      <p className=' mt-[-3px]' >Rs <span className='font-bold'>2000</span></p>
                      <CgAdd />
                      </div>
                    </div>
                    <p className='pt-2 pr-16 pb-5'>mozzarella, pizza sauce, chicken, caramelized onions, jalapenos, ricotta and a homemade pineapple chilli sauce</p>
                  </div>
                  </a>
                  <hr/>


                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}

export default Foodlistdetails;
