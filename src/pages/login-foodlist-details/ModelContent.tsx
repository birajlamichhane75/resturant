import React, { useState } from 'react';

interface ModalContentProps {
  closeModal: () => void; 
}

const ModalContent: React.FC<ModalContentProps> = ({ closeModal }) => {
  const [quantity, setQuantity] = useState(1);

  const updateQuantity = (increment: number) => {
    const newQuantity = Math.max(quantity + increment, 1); 
    setQuantity(newQuantity);
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-10 flex items-center justify-center">
      <div className="w-full bg-white bg-opacity-30 rounded-md shadow-md lg:max-w-[650px] text-black">
        <span className="closebtn text-lg cursor-pointer text-white" onClick={closeModal}>&times;</span>
        <div className="model-header p-6">
          <h1 className="text-2xl font-bold">Everything Bagel</h1>
          <p className="text-lg">Rs. 137.50</p>
        </div>
        <hr/>
        <div className="modle-contain p-6">
          <div className="mb-4">
            <h2 className="text-lg font-bold">SPECIAL INSTRUCTIONS</h2>
            <p>
              <textarea placeholder="Add Notes" className="form-control model-containtextarea form-control--full ng-pristine ng-untouched ng-valid ng-empty"></textarea>
            </p>
          </div>
        </div>
        <div className="model-footer  p-5 bg-[#FBF9F9] flex flex-col lg:flex-row justify-between items-center">
          <div className="mb-4 lg:mb-0">
            <button type="button" className="bg-white pl-2 pr-2">
              <span className="icomoon icon-remove icomoon--green cursor-pointer text-[25px]" onClick={() => updateQuantity(-1)}>&#8722;</span>
              <input type="text" className='text-center w-20' value={quantity} min="1" onChange={(e) => setQuantity(parseInt(e.target.value))} />
              <span className="icomoon icon-add icomoon--green cursor-pointer text-[25px]" onClick={() => updateQuantity(1)}>+</span>
            </button>
          </div>
          <div className="updatebag flex bg-[red] p-[10px] text-white rounded-md shadow-md">
            <button className="btn btn--primary btn-block btn--add-to-cart" ng-click="AddToCart(ProductItem);" ng-disabled="cartloading()" type="button">
              <span className="mr-[24px]">Add to Bag</span>
              <span className="icomoon icon-shopping-cart icomoon--white"></span>
              <span className="ng-binding">Rs. 1,250.00</span>
            </button>  
          </div>
        </div>
      </div>
    </div>
  );
};

export default ModalContent;
