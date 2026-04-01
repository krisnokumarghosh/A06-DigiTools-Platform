import React from 'react';
import badgeImg from "../../assets/Group 5.png"
import { Play } from 'lucide-react';
import bannerImg from "../../assets/banner.png"


const BannerTop = () => {
    return (
        <div className='container mx-auto grid lg:grid-cols-2 items-center justify-items-center text-center md:text-left'>
            <div>
                <div className='badge bg-[#E1E7FF] py-5 rounded-full'>
                    <img src={badgeImg} alt="" />
                    <p className='text-[16px] font-medium
                    bg-linear-to-r from-[#4F39F6] to-[#9514FA] 
               bg-clip-text text-transparent'>New: AI-Powered Tools Available</p>
                </div>
                <h1 className='text-[#101727] mt-3 md:mt-0 font-extrabold text-[26px] md:text-[65px]'>Supercharge Your <br /> Digital Workflow</h1>
                <p className='text-[14px] md:text-[18px] text-[#627382] mt-2 w-62.5 md:w-142.75 mx-auto'>Access premium AI tools, design assets, templates, and productivity  software—all in one place. Start creating faster today.  Explore Products</p>
                <div className='md:flex gap-4 mt-5'>
                    <button className='btn hover:-translate-y-1 transition-all duration-500 text-white border-0 rounded-full bg-linear-to-r from-[#4F39F6] to-[#9514FA]'>Explore Products</button>

                    <div className='mt-2 md:mt-0'>
                    <button 
                    className='btn hover:-translate-y-1 transition-all duration-500 bg-transparent rounded-full border-[#9514FA] 
                    '><Play color='#9514FA'></Play>
                     <span className='bg-linear-to-r from-[#4F39F6] to-[#9514FA] 
                    bg-clip-text text-transparent'>Watch Demo</span></button>
                    </div>
                </div>
            </div>

            <div>
                <img className='h-80 md:h-147.5 mt-10 lg:mt-0' src={bannerImg} alt="" />
            </div>
        </div>
    );
};

export default BannerTop;