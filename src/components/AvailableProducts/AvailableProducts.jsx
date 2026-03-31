import React from 'react';
import ProductCard from '../ProductCard/ProductCard';

const AvailableProducts = ({productData , cart , setCart , price , setPrice}) => {

    
    return (
        <div className='container mx-auto grid md:grid-cols-2 lg:grid-cols-3 gap-10 justify-items-center items-center mb-20'>
            {
                productData.map(product => {
                    return(
                    <ProductCard 
                    setPrice={setPrice}
                    price={price}
                    setCart={setCart}
                    cart={cart}
                    key={product.id}
                    product={product}
                    ></ProductCard>
                    )
                })
            }
        </div>
    );
};

export default AvailableProducts;