import React, { useState } from 'react';
import LiFeatures from './LiFeatures';


const ProductCard = ({product , cart , setCart}) => {
    console.log(product);
    
    const [isBought , setIsBougth] = useState(false)

    const handleCardBtn = (product) => {
      setIsBougth(true);
      setCart([...cart , product])
    }

    return (
        <div className="card border rounded-2xl border-gray-50 w-75 md:w-95 bg-base-100 shadow-sm">
  <div className="card-body py-0">
    <div className='flex justify-end mt-3'>
    <span className={`badge font-medium
    ${product.tag === "New" ? 
        "bg-green-200 text-green-700" : 
        product.tag === "Popular" ? 
        "bg-[#9514FA]/20 text-[#9514FA]" : 
        "bg-[#FEF3C6] text-[#BB4D00]"
    }
    `}>{product.tag}</span>
    </div>

    <div className='w-15 h-15 border border-gray-100 shadow bg-white flex items-center rounded-full mb-4'>
    <img className='h-8 w-8 mx-auto ' src={product.image} alt="" />
    </div>
    
    
    <div>
      <h2 className="text-[20px] md:text-[23px] font-bold text-[#101727]">{product.name}</h2>
      <p className='text-[#627382] mt-2 mb-3'>{product.description}</p>
      <span className=""><span className='text-xl font-bold'>${product.price}</span>/Mo</span>
    </div>
    <ul className="mt-4 flex flex-col gap-2 text-xs">
      {
        product.features.map((li , index) => {
          return(
            <LiFeatures key={index} li={li}></LiFeatures>
          )
        })
      }
    </ul>
    <div className="mt-6">
      <button 
      disabled={isBought}
      onClick={() => handleCardBtn(product)}
      className="btn border-0 rounded-full w-full text-white
      bg-linear-to-r from-[#4F39F6] to-[#9514FA] mb-7">
        {isBought === true ? 
        "Added To Cart" : 
        "Buy Now"}</button>
    </div>
  </div>
</div>
    );
};

export default ProductCard;