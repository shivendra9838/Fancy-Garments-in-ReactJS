import React, { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { ShopContext } from "../context/ShopContext";
import { assets } from "../assets/assets";
import Title from "../components/Title";
import ProductItem from "../components/ProductItem";
import RelatedProducts from "../components/RelatedProducts";

const Product = () => {
  const { productId } = useParams();
  const { products, currency, addToCart } = useContext(ShopContext);
  const [productData, setProductData] = useState(false);
  const [image, setImage] = useState("");
  const [size, setSize] = useState("");
  const [temp,setTemp] = useState([]);
  // console.log(productData);

  const fetchProductData = async () => {
    products.map((item) => {
      if (item._id == productId) {
        setProductData(item);
        setImage(item.image[0]);
        return;
      }
    });
  };
  const recommend = async()=>{
    const l = products.filter((item)=>{
      return productData.category == item.category || productData.subCategory == item.subCategory
    })
    setTemp(l);
  }
  useEffect(() => {
    fetchProductData();
    recommend();
  }, [productId]);
  return productData ? (
    <div className="border-t-2 pt-10 transition-opacity ease-in duration-500 opacity-100">
      <div className="flex gap-12">
        <div className="flex flex-1 gap-2">
          <div className="flex flex-col overflow-y-scroll justify-normal w-[19%]">
            {productData.image.map((item) => (
              <img
                onMouseEnter={() => setImage(item)}
                onMouseLeave={()=>setImage(productData.image[0])}
                key={item}
                className="w-full mb-2 cursor-pointer"
                src={item}
                alt=""
              />
            ))}
          </div>
          <div className="w-[80%] ">
            <img className="w-full h-auto" src={image} alt="" />
          </div>
        </div>

        <div className="flex-1">
          <h1 className="font-medium text-2xl">{productData.name}</h1>
          <div className="flex items-center gap-1 flex-shrink">
            <img src={assets.star_icon} alt="" className="w-3 5" />
            <img src={assets.star_icon} alt="" className="w-3 5" />
            <img src={assets.star_icon} alt="" className="w-3 5" />
            <img src={assets.star_icon} alt="" className="w-3 5" />
            <img src={assets.star_dull_icon} alt="" className="w-3 5" />
            <p className="pl-2">(123)</p>
          </div>
          <p className="mt-1 text-3xl font-medium">
            {currency}
            {productData.price}
          </p>
          <p className="mt-1 text-gray-500 w-4/5">{productData.description}</p>
          <div className="flex flex-col gap-4 my-4">
            <p>Select Size</p>
            <div className="flex gap-2">
              {productData.sizes.map((item, index) => (
                <button
                  onClick={() => setSize(item)}
                  className={`border py-2 px-3 bg-gray-100 ${
                    item === size ? "border-orange-500" : ""
                  }`}
                  key={index}>
                  {item}
                </button>
              ))}
            </div>
          </div>
          <button onClick={()=>{
            addToCart(productData._id,size)
          }} className="bg-black text-white px-8 py-3 text-sm active:bg-gray-700">
            ADD TO CART
          </button>
          <hr className="mt-8 w-4/5" />
          <div className="text-sm text-gray-500 mt-5 flex flex-col gap-1">
            <p>100% Original product.</p>
            <p>Cash on delivery is available on this product.</p>
            <p>Easy return and exchange policy within 7 days</p>
          </div>
        </div>
      </div>
      <div className='mt-20'>
          <div className="flex">
              <b className="border px-5 py-3 text-sm ">Description</b>
              <p className="border px-5 py-3 text-sm">Reviews(123)</p>
          </div>
          <div className="flex flex-col gap-4 border px-6 py-6 text-sm text-gray-500">
              <p>An e-commerce website is an online platform that facilitates the buying and selling of products or services over the internet. It serves as a virtual marketplace where businesses and individuals can showcase their products, interact with customers, and conduct transactions without the need for a physical presence. E-commerce websites have gained immense popularity due to their convenience, accessibility, and the global reach they offer.

E-commerce websites typically display products or services along with detailed descriptions, images, prices, and any available variations (e.g., sizes, colors). Each product usually has its own dedicated page with relevant information.</p>
          </div>
      </div>
      <div className="my-14">
        <div className="font-medium text-3xl text-center mt-10">
          <Title text1={'RELATED'} text2={'PRODUCTS'}/>
        </div>
        <div className="my-3">
            <RelatedProducts category={productData.category} subCategory={productData.subCategory}/>
        </div>
      </div>
    </div>
  ) : (
    <div className="opacity-0"></div>
  );
};

export default Product;
