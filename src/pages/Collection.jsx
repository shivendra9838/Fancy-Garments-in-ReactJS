import React, { useContext, useEffect, useState } from 'react'
import { ShopContext } from '../context/ShopContext'
import Title from '../components/Title';
import ProductItem from '../components/ProductItem';

const Collection = () => {
  const {products} = useContext(ShopContext);
  const [collectionItems,setCollectionItems] = useState([]);
  const [category,setCategory] = useState([]);
  const [subCategory,setSubCategory] = useState([]);
  const [sortType,setSortType] = useState("a");
  const {search,showSearch} = useContext(ShopContext);

  const toggleCategory = (e)=>{
    if(category.includes(e.target.value)){
      setCategory(prev=> prev.filter(item => item !== e.target.value))
    }
    else{
      setCategory(prev=> [...prev,e.target.value]);
    }
  }

  const toggleSubCategory = (e)=>{
    if(subCategory.includes(e.target.value)){
      setSubCategory(prev => prev.filter((item)=> item != e.target.value))
    }
    else{
      setSubCategory(prev => [...prev,e.target.value])
    }
  }
  
  const applyFilter = ()=>{
    let productCopy = products;
    if(category.length > 0)
      productCopy = productCopy.filter((item)=>category.includes(item.category));
  
    if(subCategory.length > 0)
      productCopy = productCopy.filter((item)=>subCategory.includes(item.subCategory))

    if(showSearch && search)
      productCopy = productCopy.filter((item)=>item.name.toLowerCase().includes(search));
    setCollectionItems(productCopy);
  }

  const sortProduct = ()=>{
    let fpCopy = collectionItems.slice();
    switch(sortType){
      case 'low-high':
        setCollectionItems(fpCopy.sort((a,b)=>(a.price - b.price)))
        break;
      case 'high-low':
        setCollectionItems(fpCopy.sort((a,b)=>(b.price - a.price)));
        break;
      default:
        applyFilter();
    }
  }

  useEffect(()=>{
    applyFilter();
  },[category,subCategory,search,showSearch])
  useEffect(()=>{
    sortProduct();
  },[sortType])

  return (
    <div className='flex flex-row gap-10 pt-10 border-t'>
      <div>
        <p className='my-2 text-xl flex items-center cursor-pointer gap-2'>FILTERS</p>
        <div className="border border-gray-300 pl-5 py-3 pr-20 mt-6">
          <p className='mb-3 text-sm font-medium'>CATEGORIES</p>
          <div className='flex flex-col gap-2 text-sm font-light text-gray-700'>
            <p className='flex gap-2'>
              <input type='checkbox' value={'Men'} onChange={toggleCategory}/>Men
            </p>
            <p className='flex gap-2'>
              <input type='checkbox' value={'Women'} onChange={toggleCategory}/>Women
            </p>
            <p className='flex gap-2'>
              <input type='checkbox' value={'Kids'} onChange={toggleCategory}/>Kids
            </p>

          </div>
        </div>
        <div className="border border-gray-300 pl-5 py-3 pr-20 my-6">
          <p className='mb-3 text-sm font-medium'>TYPE</p>
          <div className='flex flex-col gap-2 text-sm font-light text-gray-700'>
            <p className='flex gap-2'>
              <input type='checkbox' value={'Topwear'} onChange={toggleSubCategory}/>Topwear
            </p>
            <p className='flex gap-2'>
              <input type='checkbox' value={'Bottomwear'} onChange={toggleSubCategory}/>Bottomwear
            </p>
            <p className='flex gap-2'>
              <input type='checkbox' value={'Winterwear'} onChange={toggleSubCategory}/>Winterwear
            </p>
          </div>
        </div>
      </div>
      <div className='flex-1'>
        <div className='flex justify-between text-2xl mb-4'>
          <Title text1={'All'} text2={'COLLECTIONS'}/>
          <select onChange={(e)=>setSortType(e.target.value)} className='border-2 border-gray-300 text-sm px-2'>
            <option value="relevant">Sort By Relvance</option>
            <option value="low-high">Sort By Low to High</option>
            <option value="high-low">Sort By High to Low</option>
          </select>
          </div>
          <div className='grid grid-cols-4 gap-4'>
          {
            collectionItems.map((item)=>(
              <ProductItem key={item._id} item={item}/>
            ))
          }
        </div>
      </div>
    </div>
  )
}

export default Collection
