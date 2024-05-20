import React, { useState } from 'react';

const Checkout = () => {

    const [location, setlocation] = useState('');
    const [dateTime, setdateTime] = useState('');
    const [paymentMethod, setpaymentMethod] = useState('');
    const [message, setmessage] = useState('');

    let submithandler = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        // console.log(location,dateTime,paymentMethod,message)
    }
    return (
        <>
            <h2 className="text-center text-3xl font-semibold my-8">Check Out</h2>

            <form onSubmit={submithandler} className='w-[60%] mx-auto flex flex-col gap-4 my-10'>
                <div className='border border-slate-500'>
                    <div className='px-5 py-4 bg-slate-100 border-b border-slate-300'><h4 className='font-semibold text-xl'>DELIVERY ADDRESS</h4></div>
                    <div className='px-5 py-6'>
                        <input
                            value={location}
                            onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                                setlocation(e.target.value)
                            }}
                            type="text" placeholder='Your location' className='border shadow-sm rounded-sm px-3 py-3 w-[50%]' />
                    </div>
                </div>

                <div className='border border-slate-500'>
                    <div className='px-5 py-4 bg-slate-100 border-b border-slate-300'><h4 className='font-semibold text-xl'>DELIVERY DATE AND TIME</h4></div>

                    <div className='px-5 py-6 flex flex-col gap-4'>

                        <label className='flex gap-2'>
                            <input

                                type="radio"
                                value="As Soon As Possible"
                                checked={dateTime === "As Soon As Possible"}
                                onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                                    setdateTime(e.target.value)
                                }}
                            />
                            As Soon As Possible
                        </label>

                        <label className='flex gap-2'>
                            <input

                                type="radio"
                                value="Schedule Delivery For Later Date/Time"
                                checked={dateTime === "Schedule Delivery For Later Date/Time"}
                                onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                                    setdateTime(e.target.value)
                                }}
                            />
                            Schedule Delivery For Later Date/Time
                        </label>
                        <p className='font-semibold text-sm'>Note: Foodmandu Delivery Hours is from 08:00 AM to 9:00 PM</p>
                    </div>
                </div>

                <div className='border border-slate-500'>
                    <div className='px-5 py-4 bg-slate-100 border-b border-slate-300'><h4 className='font-semibold text-xl'>PAYMENT OPTION</h4></div>

                    <div className='px-5 py-6 grid grid-cols-3 gap-5'>

                        <label className='flex gap-2'>
                            <input

                                type="radio"
                                value="Cash on delivery"
                                checked={paymentMethod === "Cash on delivery"}
                                onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                                    setpaymentMethod(e.target.value)
                                }}
                            />
                            Cash on delivery
                        </label>

                        <label className='flex gap-2'>
                            <input

                                type="radio"
                                value="eSewa"
                                checked={paymentMethod === "eSewa"}
                                onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                                    setpaymentMethod(e.target.value)
                                }}
                            />
                            eSewa
                        </label>

                        <label className='flex gap-2'>
                            <input

                                type="radio"
                                value="Khalti"
                                checked={paymentMethod === "Khalti"}
                                onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                                    setpaymentMethod(e.target.value)
                                }}
                            />
                            Khalti
                        </label>

                        <label className='flex gap-2'>
                            <input

                                type="radio"
                                value="IME pay"
                                checked={paymentMethod === "IME pay"}
                                onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                                    setpaymentMethod(e.target.value)
                                }}
                            />
                            IME pay
                        </label>
                        <label className='flex gap-2'>
                            <input

                                type="radio"
                                value="FonePay"
                                checked={paymentMethod === "FonePay"}
                                onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                                    setpaymentMethod(e.target.value)
                                }}
                            />
                            FonePay
                        </label>

                        <label className='flex gap-2'>
                            <input

                                type="radio"
                                value="ConnectIPS"
                                checked={paymentMethod === "ConnectIPS"}
                                onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                                    setpaymentMethod(e.target.value)
                                }}
                            />
                            ConnectIPS
                        </label>

                        <label className='flex gap-2'>
                            <input

                                type="radio"
                                value="Debit/Credit Card"
                                checked={paymentMethod === "Debit/Credit Card"}
                                onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                                    setpaymentMethod(e.target.value)
                                }}
                            />
                            Debit/Credit Card
                        </label>

                    </div>
                </div>

                <div className='border border-slate-500'>
                    <div className='px-5 py-4 bg-slate-100 border-b border-slate-300'><h4 className='font-semibold text-xl'>SPECIAL INSTRUCTIONS</h4></div>
                    <div className='px-5 py-6'>
                        <textarea
                            value={message}
                            onChange={(e: React.ChangeEvent<HTMLTextAreaElement>) => {
                                setmessage(e.target.value)
                            }}
                            className='border border-slate-900 w-[100%] px-3 py-4' placeholder='Please inform if there is any special instruction for delivery person (Eg.Beaware of dogs)' name="message"></textarea>
                    </div>
                </div>

                <button
                    type='submit'
                    className='px-3 py-2 rounded-sm shadow-sm bg-green-600 text-white font-bold w-[20%] mx-auto'>Continue</button>


            </form>

        </>
    );
}

export default Checkout;