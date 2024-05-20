import { useRouter } from 'next/navigation';
import React, { useState } from 'react';
import { FaBagShopping } from "react-icons/fa6";
import { IoMdCloseCircle } from "react-icons/io";


type CartType = {
    foodName: string,
    price: number,
    qty: number,
}

const Cart = () => {
    const [quantity, setquantity] = useState<number>(1);
    const [totalprice, settotalprice] = useState();
    let { push } = useRouter();
    const [items, setitems] = useState([
        {
            foodName: "Grill Retter",
            price: 1000,
            qty: 1,
        },
        {
            foodName: "Biryani",
            price: 500,
            qty: 1,
        },
        {
            foodName: "Burger",
            price: 800,
            qty: 1,
        },

    ])



    const handleCartQuantity = (operation: 'inc' | 'dec') => {
        switch (operation) {
            case 'dec':
                if (quantity <= 1) return;
                setquantity((prev) => prev - 1);
                break;
            case 'inc':
                setquantity((prev) => prev + 1);
                break;
        }
    };

    return (
        <>
            <div className={`bg-white rounded-md shadow-lg h-[90vh] w-[20rem] px-4 py-2 overflow-y-auto text-slate-700`}>
                <div className="c-top w-full">
                    <p className='font-bold text-lg text-black'>My Cart</p>
                </div>
                {
                    items ? <>
                        <ul className='mt-5 flex flex-col gap-2'>{
                            items.map((food: CartType, index: number) => {

                                return (
                                    <li key={index} className='bg-slate-100 relative w-full flex items-baseline justify-between pt-5 py-1 px-4 border border-slate-400 '>
                                        <IoMdCloseCircle 
                                        className='absolute top-1 right-2 text-md font-bold cursor-pointer' />
                                        <div className='flex flex-col gap-2 mt-2'>
                                            <h3 className='font-semibold text-md'>{food.foodName}</h3>
                                            <div className='flex gap-2'>
                                                <span
                                                    onClick={() => {
                                                        handleCartQuantity('dec')
                                                    }}
                                                    className='px-2 cursor-pointer bg-slate-50 font-semibold text-md border h-fit'>-</span>
                                                <p className='font-semibold text-md'>{quantity}</p>
                                                <span
                                                    onClick={() => {
                                                        handleCartQuantity('inc')
                                                    }}
                                                    className='px-2 cursor-pointer bg-slate-50 font-semibold text-md border h-fit'>+</span>
                                            </div>
                                        </div>
                                        <p className='flex flex-col items-end font-semibold text-md'><span className='font-semibold text-md'>Rs.</span>{food.price * quantity}</p>
                                    </li>)

                            })}</ul>
                        <div className="checkout w-full flex justify-center mt-5">
                            <button
                                onClick={() => {
                                    push('/checkout')
                                }}
                                className='w-full px-3 py-2 bg-red-500 shadow-md text-white font-bold flex items-center justify-center gap-2'>Check out <span><FaBagShopping /></span></button>
                        </div>

                    </> :
                        <div className='w-full  text-center py-28 bg-slate-50'>
                            <h3 className='font-semibold text-xl'>Your bag is empty.</h3>
                            <p className='opacity-60'>Add items to get started.</p>
                        </div>
                }
            </div>
        </>
    );
}

export default Cart;