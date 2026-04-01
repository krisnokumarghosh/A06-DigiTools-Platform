import React from 'react';

const BannerBottom = () => {
    return (
        <div className='bg-linear-to-r from-[#4F39F6] to-[#9514FA] text-white mt-22.5 grid md:grid-cols-3 justify-items-center gap-3 p-15 mb-16 md:mb-30
        '>
            
        <div className='text-center'>
            <h2 className='font-extrabold text-[42px] md:text-[56px]'>50K+</h2>
            <p className='text-[14px] md:text-[18px] text-white/70'>Active Users</p>
            
        </div>
         
         <div className='text-center'>
            <h2 className='font-extrabold text-[42px] md:text-[56px]'>200+</h2>
            <p className='text-[14px] md:text-[18px] text-white/70'>Premium Tools</p>
         </div>


         <div className='text-center'>
            <h2 className='font-extrabold text-[42px] md:text-[56px]'>4.9</h2>
            <p className='text-[14px] md:text-[18px] text-white/70'>Rating</p>
         </div>


        </div>
    );
};

export default BannerBottom;