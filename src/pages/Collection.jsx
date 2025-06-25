import React, { useContext, useEffect, useState } from 'react';
import { ShopContext } from '../context/ShopContext';
import Title from '../components/Title';
import ProductItem from '../components/ProductItem';
import yash1 from '../assets/about_img.png';
import yash2 from '../assets/p_img2_1.png';
import yash3 from '../assets/p_img46.png';

const Collection = () => {
  const { products } = useContext(ShopContext);
  const [collectionItems, setCollectionItems] = useState([]);
  const [category, setCategory] = useState([]);
  const [subCategory, setSubCategory] = useState([]);
  const [sortType, setSortType] = useState("a");
  const { search, showSearch } = useContext(ShopContext);
  const [offerTime, setOfferTime] = useState(3600);
  const [offerItems, setOfferItems] = useState([]);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);


  const toggleCategory = (e) => {
    if (category.includes(e.target.value)) {   //includes() is a method checks if a particular value (e.target.value) is present in the array.
      setCategory(prev => prev.filter(item => item !== e.target.value)); // Remove category if already selected
    } else {
      setCategory(prev => [...prev, e.target.value]); // Add category to selection
    }
  };

  const toggleSubCategory = (e) => {
    if (subCategory.includes(e.target.value)) {
      // if the category is already in the list ,it will remove
      setSubCategory(prev => prev.filter(item => item !== e.target.value));
    } else {
      // if the category is not found in list it will added  the category state 
      setSubCategory(prev => [...prev, e.target.value]); // using spreed operator it will new array
    }
  };

  // when we click men category it will show all the men category
  const applyFilter = () => {
    let productCopy = products;
    if (category.length > 0)
      productCopy = productCopy.filter(item => category.includes(item.category));

    if (subCategory.length > 0)
      productCopy = productCopy.filter(item => subCategory.includes(item.subCategory));

    if (showSearch && search)
      productCopy = productCopy.filter(item => item.name.toLowerCase().includes(search.toLowerCase()));

    setCollectionItems(productCopy);
  };

  const sortProduct = () => {
    let fpCopy = collectionItems.slice(); //it will create filter copy item
    switch (sortType) {
      case 'low-high':
        setCollectionItems(fpCopy.sort((a, b) => (a.price - b.price)));
        break;
      case 'high-low':
        setCollectionItems(fpCopy.sort((a, b) => (b.price - a.price)));
        break;
      default:
        applyFilter();
    }
  };

  // Countdown for offer time
  useEffect(() => {
    const timer = setInterval(() => {
      setOfferTime(prev => (prev > 0 ? prev - 1 : 0));
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  // Filter products with discounts for offers
  useEffect(() => {
    const discountedProducts = products.filter(product => product.discount > 0);
    setOfferItems(discountedProducts);
  }, [products]);

  useEffect(() => {
    applyFilter();
  }, [category, subCategory, search, showSearch]);

  useEffect(() => {
    sortProduct();
  }, [sortType]);

  const formatTime = (seconds) => {
    const h = Math.floor(seconds / 3600);
    const m = Math.floor((seconds % 3600) / 60);
    const s = seconds % 60;
    return `${h.toString().padStart(2, '0')}:${m.toString().padStart(2, '0')}:${s.toString().padStart(2, '0')}`;
  };  //two-digit format using padStart like "01:23:12"     (2, '0) is the 2 string it will take 1st one ensuring 2 string taken 0 is start with 0

  // Array of images for the carousel
  const images = [yash1, yash2, yash3];
  const handleNext = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
  };
  const handlePrev = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
  };
  return (
    <div className="flex flex-col gap-10 pt-10 border-t">
      {/* Offers & Discounts Section */}
      <div
        className="mb-10 p-6 bg-yellow-100 rounded-lg relative text-white"
        style={{
          backgroundImage: `url(${images[currentImageIndex]})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
        }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-50 rounded-lg"></div>
        <div className="relative">
          <h2 className="text-xl font-semibold mb-4 text-center">Special Offers & Discounts</h2>
          <p className="text-center mb-4">
            Hurry! Limited time offers. Discounts available for:
          </p>
          <p className="text-center text-red-500 text-2xl font-bold">{formatTime(offerTime)}</p>
          <div className="grid grid-cols-4 gap-4 mt-6">
            {offerItems.map(item => (
              <ProductItem key={item._id} item={item} />
            ))}
          </div>
        </div>
        {/* Navigation Arrows */}
        <button
          onClick={handlePrev}
          className="absolute top-1/2 left-4 transform -translate-y-1/2 bg-black bg-opacity-50 text-white rounded-full p-2 hover:bg-opacity-75 transition"
        >
          &larr; {/* Left Arrow */}
        </button>
        <button
          onClick={handleNext}
          className="absolute top-1/2 right-4 transform -translate-y-1/2 bg-black bg-opacity-50 text-white rounded-full p-2 hover:bg-opacity-75 transition"
        >
          &rarr; {/* Right Arrow */}
        </button>
      </div>
      {/* Collection Section */}
      <div className="flex flex-row gap-10">
        {/* Filters */}
        <div>
          <p className="my-2 text-xl flex items-center cursor-pointer gap-2">FILTERS</p>
          <div className="border border-gray-300 pl-5 py-3 pr-20 mt-6">
            <p className="mb-3 text-sm font-medium">CATEGORIES</p>
            <div className="flex flex-col gap-2 text-sm font-light text-gray-700">
              <p className="flex gap-2">
                <input type="checkbox" value="Men" onChange={toggleCategory} />Men
              </p>
              <p className="flex gap-2">
                <input type="checkbox" value="Women" onChange={toggleCategory} />Women
              </p>
              <p className="flex gap-2">
                <input type="checkbox" value="Kids" onChange={toggleCategory} />Kids
              </p>
            </div>
          </div>
          <div className="border border-gray-300 pl-5 py-3 pr-20 my-6">
            <p className="mb-3 text-sm font-medium">TYPE</p>
            <div className="flex flex-col gap-2 text-sm font-light text-gray-700">
              <p className="flex gap-2">
                <input type="checkbox" value="Topwear" onChange={toggleSubCategory} />Topwear
              </p>
              <p className="flex gap-2">
                <input type="checkbox" value="Bottomwear" onChange={toggleSubCategory} />Bottomwear
              </p>
              <p className="flex gap-2">
                <input type="checkbox" value="Winterwear" onChange={toggleSubCategory} />Winterwear
              </p>
            </div>
          </div>
        </div>

        {/* Products */}
        <div className="flex-1">
          <div className="flex justify-between text-2xl mb-4">
            <Title text1="All" text2="COLLECTIONS" />
            <select onChange={(e) => setSortType(e.target.value)} className="border-2 border-gray-300 text-sm px-2">
              <option value="relevant">Sort By Relevant</option>
              <option value="low-high">Sort By Low to High</option>
              <option value="high-low">Sort By High to Low</option>
            </select>
          </div>
          <div className="grid grid-cols-4 gap-4">
            {collectionItems.map(item => (
              <ProductItem key={item._id} item={item} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Collection;
