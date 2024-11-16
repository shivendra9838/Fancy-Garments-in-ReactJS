import React, { useContext, useEffect } from 'react'
import { ShopContext } from '../context/ShopContext'
import { assets } from '../assets/assets';
import { useLocation } from 'react-router-dom';

const SearchBar = () => {
  const {search , setSearch, showSearch,setShowSearch} = useContext(ShopContext)
  const location = useLocation();
  useEffect(()=>{
    if(!location.pathname.includes('/collection'))
      setShowSearch(false)
  },[location])
  return showSearch ?  (
    <div className='border border-b bg-gray-50 text-center m-3'>
      <div className='inline-flex items-center border border-gray-400 px-5 py-2 my-5 mx-3 rounded-full w-1/2' >
        <input className='flex-1 outline-none bg-inherit text-sm' type="text" placeholder='Search' value={search} onChange={(e)=>setSearch(e.target.value)} />
        <img className='w-4' src={assets.search_icon} alt="" />
      </div>
      <img onClick={()=>setShowSearch(false)} className='inline w-3 cursor-pointer' src={assets.cross_icon} alt="" />
    </div>
  ) : null;
}

export default SearchBar
