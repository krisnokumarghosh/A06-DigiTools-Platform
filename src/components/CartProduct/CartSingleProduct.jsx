import React from 'react';

const CartSingleProduct = ({product}) => {
    return (
        <div className='bg-[#F9FAFC] p-6 rounded-xl flex justify-between items-center'>
            
        <div className='md:flex items-center gap-5'>
            <div className='w-15 h-15 bg-white flex justify-center items-center rounded-full border border-gray-200'>
                <img src={product.image} alt="" />
            </div>
            <div>
                <h3 className='mt-2 md:mt-0 text-[15px] font-semibold md:text-[20px] text-[#101727]'>{product.name}</h3>
                <p className='font-medium text-[16px] text-[#627382]'>${product.price}</p>
            </div>
        </div>

        <div>
            <button className='btn bg-transparent  text-[#FF3980]'>Remove</button>
        </div>

        </div>
    );
};

export default CartSingleProduct;