import React from 'react';
import userImg from "../../assets/user.png";
import pacckageImg from "../../assets/package.png";
import rocketImg from "../../assets/rocket.png";

const Steps = () => {
    return (
        <div className=' py-10 md:py-25 bg-[#F9FAFC]'>
            
        <div className='text-center mb-10'>
            <h1 className="text-[#101727] font-extrabold text-[36px] md:text-[45px]">Get Started in 3 Steps</h1>
            <p className="text-[13px] md:text-[16px] w-65 md:w-120 mx-auto text-[#627382] mt-1">Start using premium digital tools in minutes, not hours.</p>
        </div>


        <div className='container mx-auto grid md:grid-cols-2 lg:grid-cols-3 gap-5 justify-items-center'>
           <div className='w-75 hover:scale-103 transition-all duration-500  md:w-95 bg-[#FFFFFF] p-5 rounded-xl border border-gray-200 '>
                <div className='flex justify-end mb-6'>
                    <span className="px-3 py-2 text-white rounded-full bg-linear-to-r from-[#4F39F6] to-[#9514FA]">01</span>
                </div>
                <div className='w-25 h-24.75 mx-auto bg-[#9514FA]/10 
                rounded-full flex justify-center items-center mb-4'>
                    <img src={userImg} alt="" />
                </div>
                <div className='text-center mb-15.5'>
                    <h3 className='font-bold text-[20px] md:text-[24px] text-[#101727]'>Create Account</h3>
                    <p className='mt-3 text-[#627382]'>Sign up for free in seconds. No credit card required to get started.</p>
                </div>
           </div>
           <div className='w-75 hover:scale-103 transition-all duration-500 md:w-95 bg-[#FFFFFF] p-5 rounded-xl border border-gray-200 '>
                <div className='flex justify-end mb-6'>
                    <span className="px-3 py-2 text-white rounded-full bg-linear-to-r from-[#4F39F6] to-[#9514FA]">02</span>
                </div>
                <div className='w-25 h-24.75 mx-auto bg-[#9514FA]/10 
                rounded-full flex justify-center items-center mb-4'>
                    <img src={pacckageImg} alt="" />
                </div>
                <div className='text-center mb-15.5'>
                    <h3 className='font-bold text-[20px] md:text-[24px] text-[#101727]'>Choose Products</h3>
                    <p className=' mt-3 text-[#627382]'>Browse our catalog and select the tools that fit your needs.</p>
                </div>
           </div>
           <div className='w-75 hover:scale-103 transition-all duration-500 md:w-95 bg-[#FFFFFF] p-5 rounded-xl border border-gray-200 '>
                <div className='flex justify-end mb-6'>
                    <span className="px-3 py-2 text-white rounded-full bg-linear-to-r from-[#4F39F6] to-[#9514FA]">03</span>
                </div>
                <div className='w-25 h-24.75 mx-auto bg-[#9514FA]/10 
                rounded-full flex justify-center items-center mb-4'>
                    <img src={rocketImg} alt="" />
                </div>
                <div className='text-center mb-15.5'>
                    <h3 className='font-bold text-[20px] md:text-[24px] text-[#101727]'>Start Creating</h3>
                    <p className='mt-3 text-[#627382]'>Download and start using your premium tools immediately.</p>
                </div>
           </div>
        </div>
        </div>
    );
};

export default Steps;