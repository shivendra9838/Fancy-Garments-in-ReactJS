import React, { useContext, useEffect, useState } from 'react'
import { ShopContext } from '../context/ShopContext'
import ProductItem from './ProductItem';
import { Link } from 'react-router-dom';

const RelatedProducts = ({category,subCategory}) => {
    const {products} = useContext(ShopContext);
    const [related,setRelated] = useState([]);
    useEffect(()=>{
        if(products.length > 0){
            let productCopy = products.slice();
            productCopy = productCopy.filter((item)=>category === item.category || item.subCategory === subCategory)

            setRelated(productCopy.slice(0,5));
            console.log(related)
        }
    },[products])
  return (
    <div className='flex flex-row gap-4 gap-y-6'>
        {
          related.map((item)=>
            <ProductItem key={item._id} item={item}/>
          )
        }
    </div>
  )
}

export default RelatedProducts
