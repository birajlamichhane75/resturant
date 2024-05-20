import Image from 'next/image';
import React, { useState } from 'react';
import profile from '../../../public/images/user/dymmy-profile.jpg'

const Edit = () => {
    const [fname, setfname] = useState("");
    const [lname, setlname] = useState("");
    const [email, setemail] = useState("");
    const [phone, setphone] = useState("");

    let submithandler = (e:React.FormEvent<HTMLFormElement>) =>{
        e.preventDefault();
        console.log(fname,lname,email,phone);
        
    }
    return (
        <>
            <div className='w-full'>
            
                <form onSubmit={submithandler} className="w-full max-w-lg mx-auto my-8">
                    <p>Profile Picture</p>
                    <div className="img rounded-full border border-salte-400 overflow-hidden h-[4rem] w-[4rem] my-5">
                        <Image src={profile} alt="" height={200} width={200} />
                    </div>

                    <div className="flex flex-wrap -mx-3 mb-6">
                        <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                            <p>First Name</p>
                            <input
                                value={fname}
                                onChange={(e) => {
                                    setfname(e.target.value)
                                }}
                                className="appearance-none block w-full bg-gray-200 text-gray-700 border rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
                                id="grid-first-name"
                                type="text"
                                placeholder="First Name"
                                required
                            />
                        </div>
                        <div className="w-full md:w-1/2 px-3">
                            <p>Last Name</p>
                            <input
                                value={lname}
                                onChange={(e) => {
                                    setlname(e.target.value)
                                }}
                                className="appearance-none block w-full bg-gray-200 text-gray-700 border rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                                id="grid-last-name"
                                type="text"
                                placeholder="Last Name"
                                required
                            />
                        </div>
                    </div>
                    <div className="flex flex-wrap -mx-3 mb-6">
                        <div className="w-full px-3">
                            <p>Email</p>
                            <input
                                value={email}
                                onChange={(e) => {
                                    setemail(e.target.value)
                                }}
                                className="appearance-none block w-full bg-gray-200 text-gray-700 border rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                                id="grid-email"
                                type="email"
                                placeholder="Email"
                                required
                            />
                        </div>
                    </div>
                    <div className="flex flex-wrap -mx-3 mb-6">
                        <div className="w-full px-3">
                            <p>Phone Number</p>
                            <input
                                value={phone}
                                onChange={(e) => {
                                    setphone(e.target.value)
                                }}
                                className="appearance-none block w-full bg-gray-200 color-[#6c757d] border rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                                id="grid-phone"
                                type="tel"
                                placeholder="Phone Number"
                                required
                            />
                        </div>
                    </div>

                    <div className="md:flex md:items-center">
                        <div className="md:w-1/3">
                            <button
                                className="shadow bg-[#e65b00] hover:bg-[black] focus:shadow-outline focus:outline-none text-white font-bold py-2 px-6 rounded"
                                type="submit"
                            >
                                Save
                            </button>
                        </div>
                    </div>
                </form>
            </div>
        </>
    );
}

export default Edit;
