import React, { useContext, useEffect, useState } from 'react'
import { ShopContext } from '../context/ShopContext'
import ProductItem from './ProductItem';
import Title from './Title';

const BestSeller = () => {
    const {products} = useContext(ShopContext);
    const [bestSeller,setBestSeller] = useState([]);
    useEffect(()=>{
        const temp = products.filter((item)=>(item.bestseller))
        setBestSeller(temp.slice(0,5))   //creates a new array containing the top 5 bestsellers, which is then set as the value of bestSeller
    },[])
  return (
    <div className='my-10'>
      <div className='text-center text-3xl py-8'>
        <Title text1={'BEST'} text2={'SELLER'} />
        <p className='w-3/4 m-auto text-xs text-gray-600'>
        From attending a casual hangout session with your friends and family to running errands, tees can come in handy for you in varied scenarios. So, check out the wide array of T-shirts that can meet your requirements. You can have a look at the various options with different sleeve lengths, ranging from half sleeves to full sleeves and more. On the other hand.
        </p>
        <div className='grid grid-cols-5 gap-4 pt-7'>
            {
                bestSeller.map((item)=>(
                    <ProductItem key={item._id} item={item} />
                ))
            }
        </div>
      </div>
    </div>
  )
}

export default BestSeller
