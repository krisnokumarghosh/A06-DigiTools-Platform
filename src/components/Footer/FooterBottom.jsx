import React from 'react';
import fbImg from "../../assets/Facebook.png";
import instaImg from "../../assets/Instagram.png";
import xImg from "../../assets/Twitter.png"

const FooterBottom = () => {
    return (
        <div className='bg-[#101727] text-white pt-30'>
            
            <div className='container mx-auto grid md:grid-cols-2 lg:grid-cols-5 gap-8  lg:justify-items-center pl-7 md:pl-0'>

                <div>
                <h1 className='text-[32px] md:text-[40px] font-extrabold mb-3'>DigiTools</h1>
                <p className='w-60 md:w-87.5 text-white/70 text-[13px] md:text-[16px]'>Premium digital tools for creators, professionals, and businesses. Work smarter with our suite of powerful tools.</p>
                </div>

                <div>
                    <h3 className='text-[20px] font-medium mb-3'>Product</h3>
                    <ul className='text-white/70 space-y-3'>
                        <li>Features</li>
                        <li>Pricing</li>
                        <li>Templates</li>
                        <li>Integrations</li>
                    </ul>
                </div>


                <div>
                    <h3 className='text-[20px] font-medium mb-3'>Company</h3>
                    <ul className='text-white/70 space-y-3'>
                        <li>About</li>
                        <li>Blog</li>
                        <li>Careers</li>
                        <li>Press</li>
                    </ul>
                </div>


                <div>
                    <h3 className='text-[20px] font-medium mb-3'>Resources</h3>
                    <ul className='text-white/70 space-y-3'>
                        <li>Documentation</li>
                        <li>Help Center</li>
                        <li>Community</li>
                        <li>Contact</li>
                    </ul>
                </div>

                <div>
                     <h3 className='text-[20px] font-medium mb-3'>Social Links</h3>
                     <div className='flex items-center gap-3'>
                        <img src={instaImg} alt="" />
                        <img src={fbImg} alt="" />
                        <img src={xImg} alt="" />
                     </div>
                </div>
                

            </div>

           <div className='container mx-auto mt-20 '>
            <div className="divider m-0 before:bg-white/20 after:bg-white/20"></div>
           </div>

           <div className='container mx-auto text-white/60 md:flex justify-between items-center  py-8 pl-7 md:pl-0'>
                <p className='mb-2 md:mb-0'>© 2026 Digitools. All rights reserved.</p>
                <div className='md:flex items-center gap-3'>
                    <p>Privacy Policy</p>
                    <p>Terms of Service</p>
                    <p>Cookies</p>
                </div>
           </div>

        </div>
    );
};

export default FooterBottom;