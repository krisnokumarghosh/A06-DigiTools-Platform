import React from 'react';

const CartProduct = ({cart}) => {
    return (
        <div className='container mx-auto border border-gray-100 rounded-xl p-10 mb-20'>
           {
            cart.length === 0 ? 
            <div className='text-center'>
                <h1 className='text-[26px] text-[#101727] font-bold'>Your Cart Is Empty!!</h1>
                <p className='text-[16px] text-[#627382] font-medium'>Go to product section to buy products</p>
            </div> : 


             <div>
            <h3 className='text-[24px] text-[#101727] font-bold'>Your Cart</h3>
            </div>
           }
        </div>
    );
};

export default CartProduct;