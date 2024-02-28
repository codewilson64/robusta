import React, { useState } from "react";
import { products } from "../constants";
import { close } from "../assets";

const Products = () => {
  const [popupcontent, setPopUpContent] = useState([]);
  const [popuptoggle, setPopUpToggle] = useState(false);
  const changeContent = (product) => {
    setPopUpContent([product]);
    setPopUpToggle(!popuptoggle);
  };

  return (
    <section className="py-8" id="products">
      <h2 className="text-black text-4xl font-poppins font-semibold text-center">PRODUCTS</h2>
      <div className="flex flex-wrap justify-center">
        {products.map((product) => {
          return (
            <div key={product.id} className="flex flex-col justify-between max-w-[370px] py-12 px-10">
              <img src={product.image} alt="product-image" className="w-full object-contain cursor-pointer" />
              <p className="text-[18px] font-semibold w-fit mx-auto mb-4 cursor-pointer">{product.name}</p>
              <button type="button" onClick={() => changeContent(product)} className="item-detail-button w-[120px] mx-auto py-2 px-3 text-white font-poppins font-[15px] bg-black rounded-lg">
                See detail
              </button>
            </div>
          );
        })}

        {popuptoggle && (
          <div className="modal fixed top-0 left-0 w-full h-full overflow-hidden bg-[rgba(0,0,0,0.6)] z-[10]" id="item-detail-modal" onClick={changeContent}>
            <div className="modal-container relative bg-[#fefefe] text-black my-[15%] mx-auto p-5 sm:w-[50%] w-[80%] rounded-3xl" onClick={(e) => e.stopPropagation()}>
              <button className="absolute right-4 bg-black p-2 rounded-full" onClick={changeContent}>
                <img src={close} alt="close" />
              </button>
              {popupcontent.map((pop) => {
                return (
                  <div key={pop.id} className="modal-content flex sm:flex-nowrap flex-wrap">
                    <img src={pop.image} alt="product 1" className="h-[14rem] mx-auto sm:mb-0 mb-8" />
                    <div className="product-content">
                      <h3 className="text-[25px] font-bold sm:text-left text-center">{pop.name}</h3>
                      <p className="text-[20px] leading-7 mt-5">Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta quasi dolor fugiat. Voluptatem aperiam mollitia nihil neque voluptas quia eaque!</p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default Products;
