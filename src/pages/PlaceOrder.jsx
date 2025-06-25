import React, { useState } from 'react';
import Title from '../components/Title';
import CartTotal from '../components/CartTotal';
import { assets } from '../assets/assets';
import { Link } from 'react-router-dom';
import 'animate.css';
import Confetti from 'react-confetti';  //adds the animation give ballon animation in congratulation page

const PlaceOrder = () => {
  const [method, setMethod] = useState('cod');
  const [orderPlaced, setOrderPlaced] = useState(false); // state to track order confirmation

  // Form data state
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    street: '',
    city: '',
    state: '',
    zipcode: '',
    country: '',
    phone: ''
  });

  // Error message state
  const [error, setError] = useState('');

  // Handle form input change
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value
    }));
  };

  const handlePlaceOrder = () => {
    const { firstName, lastName, email, street, city, state, zipcode, country, phone } = formData;

    if (!firstName || !lastName || !email || !street || !city || !state || !zipcode || !country || !phone) {
      setError('Please fill all the details correctly.');
      return;
    }

    // If all details are filled, place the order
    setError('');
    setOrderPlaced(true);
  };

  return (
    <div className='flex flex-row justify-between gap-4 pt-14 min-h-[80vh] border-t'>
      {!orderPlaced ? (
        <>
          <div className='flex flex-col gap-4 w-[480px]'>
            <div className='text-2xl my-3'>
              <Title text1={'DELIVERY'} text2={'INFORMATION'} />
            </div>
            <div className='flex gap-3'>
              <input
                type="text"
                name="firstName"
                className='border border-gray-300 rounded py-1.5 px-3.5 w-full'
                placeholder='First Name'
                value={formData.firstName}
                onChange={handleInputChange}
              />
              <input
                type="text"
                name="lastName"
                className='border border-gray-300 rounded py-1.5 px-3.5 w-full'
                placeholder='Last Name'
                value={formData.lastName}
                onChange={handleInputChange}
              />
            </div>
            <input
              type="email"
              name="email"
              className='border border-gray-300 rounded py-1.5 px-3.5 w-full'
              placeholder='Email Address'
              value={formData.email}
              onChange={handleInputChange}
            />
            <input
              type="text"
              name="street"
              className='border border-gray-300 rounded py-1.5 px-3.5 w-full'
              placeholder='Street'
              value={formData.street}
              onChange={handleInputChange}
            />
            <div className='flex gap-3'>
              <input
                type="text"
                name="city"
                className='border border-gray-300 rounded py-1.5 px-3.5 w-full'
                placeholder='City'
                value={formData.city}
                onChange={handleInputChange}
              />
              <input
                type="text"
                name="state"
                className='border border-gray-300 rounded py-1.5 px-3.5 w-full'
                placeholder='State'
                value={formData.state}
                onChange={handleInputChange}
              />
            </div>
            <div className='flex gap-3'>
              <input
                type="text"
                name="zipcode"
                className='border border-gray-300 rounded py-1.5 px-3.5 w-full'
                placeholder='Zipcode'
                value={formData.zipcode}
                onChange={handleInputChange}
              />
              <input
                type="text"
                name="country"
                className='border border-gray-300 rounded py-1.5 px-3.5 w-full'
                placeholder='Country'
                value={formData.country}
                onChange={handleInputChange}
              />
            </div>
            <input
              type="number"
              name="phone"
              className='border border-gray-300 rounded py-1.5 px-3.5 w-full'
              placeholder='Phone'
              value={formData.phone}
              onChange={handleInputChange}
            />
          </div>
          {error && <div className="text-red-500 text-sm mt-4">{error}</div>}
          <div className='mt-8'>
            <div className='mt-8 min-w-8'>
              <CartTotal />
            </div>
            <div className='mt-8'>
              <Title text1={'PAYMENT'} text2={'METHOD'} />
              <div className='flex gap-3'>
                <div onClick={() => setMethod('stripe')} className='flex items-center gap-3 border p-2 px-3 cursor-pointer'>
                  <p className={`min-w-3.5 h-3.5 border rounded-full ${method === 'stripe' ? 'bg-green-400' : ''}`}></p>
                  <img className='h-5 mx-4' src={assets.stripe_logo} alt="" />
                </div>
                <div onClick={() => setMethod('razorpay')} className='flex items-center gap-3 border p-2 px-3 cursor-pointer'>
                  <p className={`min-w-3.5 h-3.5 border rounded-full ${method === 'razorpay' ? 'bg-green-400' : ''}`}></p>
                  <img className='h-5 mx-4' src={assets.razorpay_logo} alt="" />
                </div>
                <div onClick={() => setMethod('cod')} className='flex items-center gap-3 border p-2 px-3 cursor-pointer'>
                  <p className={`min-w-3.5 h-3.5 border rounded-full ${method === 'cod' ? 'bg-green-400' : ''}`}></p>
                  <p className='text-gray-500 text-sm font-medium mx-4'>CASH ON DELIVERY</p>
                </div>
              </div>
              <div className='w-full mt-8 text-end'>
                <button onClick={handlePlaceOrder} className='bg-black text-white px-16 py-3 text-sm'>PLACE ORDER</button>
              </div>
            </div>
          </div>
        </>
      ) : (
        <>
          <Confetti />
          <div className="w-full max-w-screen-xl bg-green-100 shadow-xl rounded-3xl p-12 text-center animate__animated animate__fadeIn">
            <h1 className="text-5xl font-bold text-green-700">Congratulations!</h1>
            <p className="text-neutral-700 mt-4 text-lg max-w-md mx-auto">
              Your order has been accepted and is being processed. Thank you for shopping with us!
            </p>
            <Link
              to="/"
              className="text-blue-600 mt-6 inline-block underline text-lg hover:text-blue-800 transition-colors duration-300"
            >
              Go to Home Page
            </Link>
          </div>
        </>
      )}
    </div>
  );
};

export default PlaceOrder;
