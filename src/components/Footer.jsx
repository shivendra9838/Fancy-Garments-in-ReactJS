import React from 'react'
import { assets } from '../assets/assets'

const Footer = () => {
  return (
    <div>
      <div className='grid grid-cols-[3fr_1fr_1fr] gap-14 my-10 mt-40 text-sm'>
        <div>
            <img src={assets.logo} className='mb-5 w-32' alt="" />
            <p className='w-2/3 text-gray-600'>
            From attending a casual hangout session with your friends and family to running errands, tees can come in handy for you in varied scenarios. So, check out the wide array of T-shirts that can meet your requirements. 
            </p>
        </div>
        <div>
            <p className='text-xl font-medium mb-5'>COMPANY</p>
            <ul className='flex flex-col gap-1 text-gray-600'>
                <li>Home</li>
                <li>About Us</li>
                <li>Delivery</li>
                <li>Privacy Policy</li>
            </ul>
        </div>
        <div>
            <p className='text-xl font-medium mb-5'>GET IN TOUCH</p>
            <ul className='flex flex-col gap-1 text-slate-600'>
                <li>+91 8318407559</li>
                <li>Anupampatel21661@gmail.com</li>
                <li>Instagram</li>
            </ul>
        </div>
      </div>
      <div>
        <hr/>
        <p className='text-center my-4 text-sm'>Copyright2024@ fancygarments.com - All Right Reserved</p>
      </div>
    </div>
  )
}

export default Footer
