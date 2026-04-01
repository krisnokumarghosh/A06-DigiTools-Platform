import React from 'react';

const FooterTop = () => {
    return (
        <div className='bg-linear-to-r from-[#4F39F6] to-[#9514FA] 
        text-white text-center py-20 md:py-30'>
            <h1 className='font-extrabold text-[32px] md:text-[40px]'>Ready to Transform Your Workflow?</h1>
            <p className='text-[13px] md:text-[16px] text-white/70 w-70 md:w-150 mx-auto mt-2'>Join thousands of professionals who are already using Digitools to work smarter. Start your free trial today.</p>
            <div className='flex justify-center items-center gap-3 mt-10'>
                <div className='bg-white max-w-40.75 rounded-full '>
                <button className='btn border-0 rounded-full  bg-linear-to-r from-[#4F39F6] to-[#9514FA] 
               bg-clip-text text-transparent shadow-none '>Explore Products</button>
                </div>
                <button className='btn bg-transparent rounded-full text-white px-6 shadow-none'>View Pricing</button>
            </div>
            <p className='text-[11px] md:text-[16px] text-white/70 mt-3'>14-day free trial • No credit card required • Cancel anytime</p>
        </div>
    );
};

export default FooterTop;