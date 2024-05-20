import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { HiMiniShoppingBag } from "react-icons/hi2";
import { GrMapLocation } from "react-icons/gr";
import { CiHeart } from "react-icons/ci";
import profile from '../../public/images/user/dymmy-profile.jpg'

const Profile = () => {
    return (
        <>
            <div className='bg-white rounded-md shadow-lg min-h-[48vh] w-[20rem] px-4 pt-3 overflow-y-auto text-slate-600 '>
                <div className="c-top w-full">
                    <p className='font-semibold'>My Profile</p>
                </div>

                <div className='w-full flex flex-col items-center'>
                    <div className="img rounded-full border border-salte-400 overflow-hidden h-[4rem] w-[4rem]">
                        <Image src={profile} alt="" height={200} width={200} />
                    </div>

                    <div className="w-full text-center border-b border-slate-300 py-4">
                        <p className='text-md'>User Name</p>
                        <Link href="/edit"><p className='text-xs text-red-700'>Edit Profile</p></Link>
                    </div>


                    <ul className='w-full flex flex-col items-start justify-start border-b border-slate-300 py-4 gap-3'>
                        <li className='flex gap-2 items-center'>
                            <span><HiMiniShoppingBag /></span>
                            <p>Order History</p>
                        </li>
                        <li className='flex gap-2 items-center'>
                            <span><GrMapLocation /></span>
                            <p>Favourite</p>
                        </li>
                        <li className='flex gap-2 items-center'>
                            <span><CiHeart /></span>
                            <p>Saved Address</p>
                        </li>
                    </ul>

                    <div className='w-full flex item-cenetr justify-center pt-2'>
                        <button className='text-red-600'>Logout</button>
                    </div>

                </div>

            </div>
        </>
    );
}

export default Profile;