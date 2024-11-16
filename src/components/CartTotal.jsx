import React, { useContext } from 'react'
import { ShopContext } from '../context/ShopContext'
import Title from './Title';

const CartTotal = () => {
    const {currency,delivery_fee,getCartAmount} = useContext(ShopContext);
  return (
    <div className='w-[480px]'>
      <div className='text-2xl'>
        <Title text1={'CART'} text2={'TOTAL'}/>
      </div>
      <div className='flex- flex-col gap-2 mt-2 text-sm'>
        <div className='flex justify-between'>
            <p>SubTotal</p>
            <p>{currency} {getCartAmount()}.00</p>
        </div>
        <br />
        <hr />
        <br />
        <div className='flex justify-between'>
            <p>Shipping Fee</p>
            <p>{currency} {delivery_fee}.00</p>
        </div>
        <br />
        <hr />
        <br />
        <div className='flex justify-between font-bold'>
            <p>Total</p>
            <p>{currency} {getCartAmount() === 0 ? 0 : getCartAmount()+delivery_fee}.00</p>
        </div>
        <br />
        <hr />
      </div>
    </div>
  )
}

export default CartTotal
