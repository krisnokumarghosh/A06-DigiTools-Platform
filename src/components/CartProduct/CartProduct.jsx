import React from 'react';
import CartSingleProduct from './CartSingleProduct';

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
            <h3 className='mb-3 text-[24px] text-[#101727] font-bold'>Your Cart</h3>
            <div className='space-y-4'>
            {
                cart.map(product => {
                    return(
                        <CartSingleProduct 
                        key={product.id}
                        product={product}></CartSingleProduct>
                    )
                } )
            }
            </div>

            <div className='flex justify-between items-center mt-6 mb-6'>
                <p className='text-[16px] text-[#627382]'>Total:</p>
                <p className='font-bold text-[24px] text-[#101727]'>$0</p>
            </div>

            <div>
                <button 
                className='text-white btn border-0 
                bg-linear-to-r from-[#4F39F6] to-[#9514FA]
                rounded-full w-full'
                >Proceed to Checkout</button>
            </div>
            </div>
           }
        </div>
    );
};

export default CartProduct;