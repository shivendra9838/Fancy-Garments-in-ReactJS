import React, { useState } from 'react';

const NewsLetterBox = () => {
  const [isSubscribed, setIsSubscribed] = useState(false);
  const [email, setEmail] = useState('');

  const onSubmitHandler = (event) => {
    event.preventDefault();
    
    // Simulate a subscription action
    if (email) {
      setIsSubscribed(true);
      setEmail(''); // Clear email input

      // Reset the subscription state after 5 seconds to allow resubscription
      setTimeout(() => setIsSubscribed(false), 5000);
    }
  };

  return (
    <div className='text-center'>
      <p className='text-2xl font-medium text-gray-800'>Subscribe now & get 20% off</p>
      <p className='mt-3 text-gray-400'>
        Flat ₹1,200 off on HDFC Bank Credit Card EMI Txns on 6 and 9 months tenure, Min. Txn Value: ₹15,000
      </p>

      {isSubscribed ? (
        <p className='mt-6 text-green-600 text-lg font-semibold transition-opacity duration-700 ease-in-out'>
          🎉😀Thank you for subscribing! You’ll receive the latest updates soon.
        </p>
      ) : (
        <form onSubmit={onSubmitHandler} className='w-1/2 flex items-center mx-auto my-6 border pl-3 shadow-md rounded-md'>
          <input
            className='w-full outline-none py-2 px-4 text-gray-700'
            type='email'
            placeholder='Enter your e-mail'
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <button type='submit' className='bg-black text-white text-sm font-medium px-8 py-3 rounded-r-md transition-transform hover:scale-105'>
            SUBSCRIBE
          </button>
        </form>
      )}
    </div>
  );
};

export default NewsLetterBox;
