import { createContext, useEffect, useState } from "react";
import { products } from "../assets/assets";
import {toast} from 'react-toastify'
export const ShopContext = createContext();

const ShopContextProvider = (props)=>{
    const currency = 'Rs.';
    const delivery_fee = 10;
    const [search,setSearch] = useState('');
    const [showSearch,setShowSearch] = useState(false);
    const [cartItems,setCartItems] = useState({});
    const addToCart = async (itemId,size)=>{
        if(!size){
            toast.error('Select Product Size');
            return;
        }
        let cartData = structuredClone(cartItems);
        if(cartData[itemId]){
            if(cartData[itemId][size]){
                cartData[itemId][size] += 1;
            }
            else{
                cartData[itemId][size] = 1;
            }
        }
        else{
            cartData[itemId] = {};
            cartData[itemId][size] = 1;
        }
        setCartItems(cartData);
    }
    const getCartCount = ()=>{
        let totalCount = 0;
        for(const i in cartItems){
            for(const j in cartItems[i]){
                totalCount += cartItems[i][j];
            }
        }
        return totalCount;
    }
    const updateQuantity=async (itemId,size,quantity)=>{
        let cartData = structuredClone(cartItems);
        cartData[itemId][size] = quantity;
        setCartItems(cartData)
    }
    const getCartAmount = ()=>{
        let totalAmount = 0;
        for(const item in cartItems){
            let itemInfo = products.find((i)=>i._id === item)
            for(const j in cartItems[item]){
                try{
                    if(cartItems[item][j] > 0){
                        totalAmount += itemInfo.price * cartItems[item][j];
                    }
                }
                catch(error){

                }
            }
        }
        return totalAmount;
    }
    const value = {
        products,currency,delivery_fee,
        search,setSearch,showSearch,setShowSearch,
        cartItems,addToCart,getCartCount,updateQuantity,
        getCartAmount
    }
    return (
        <ShopContext.Provider value={value}>
            {props.children}
        </ShopContext.Provider>
    )
}
export default ShopContextProvider