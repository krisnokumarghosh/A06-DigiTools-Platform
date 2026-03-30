import React, { use, useState } from "react";
import AvailableProducts from "../AvailableProducts/AvailableProducts";
import CartProduct from "../CartProduct/CartProduct";

const Products = ({productsPromise , cart , setCart}) => {

  const productData = use(productsPromise);
  

  const [selectedType , setSelectedType] = useState("products")

  return (
    <div>
      <div className="text-center mb-10 ">
        <h1 className="text-[#101727] font-extrabold text-[40px] md:text-[45px]">
          Premium Digital Tools
        </h1>
        <p className="text-[13px] md:text-[16px] w-65 md:w-120 mx-auto text-[#627382] mt-2">
          Choose from our curated collection of premium digital products
          designed to boost your productivity and creativity.
        </p>

        <div className="tabs tabs-box max-w-63 mx-auto rounded-full justify-between mt-4 bg-[#F6F6F6] text-[16px]">
          <input
          onClick={() => setSelectedType("products")}
            type="radio"
            name="my_tabs_1"
            className= {`tab rounded-full px-8 font-bold 
              ${selectedType === "products" ? 
                "bg-linear-to-r from-[#4F39F6] to-[#9514FA] text-white" : 
                "bg-[#F6F6F6] text-[#25065D]"
              } `}
            aria-label="Products"
            defaultChecked
          />
          <input
          onClick={() => setSelectedType("cart")}
            type="radio"
            name="my_tabs_1"
            className={`tab rounded-full px-8 font-bold
              ${selectedType === "cart" ? 
                "bg-linear-to-r from-[#4F39F6] to-[#9514FA] text-white" : 
                "bg-[#F6F6F6] text-[#25065D]"
              }`}
            aria-label={`Cart(${cart.length})`}
            
          />
        </div>
      </div>



      {
        selectedType === "products" ? 
        <AvailableProducts
        setCart={setCart}
        cart={cart}
        productData={productData}
        ></AvailableProducts> : 
       
       
        <CartProduct cart={cart}></CartProduct>
      }
    </div>
  );
};

export default Products;
