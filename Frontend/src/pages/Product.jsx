import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useContext } from "react";
import { ShopContext } from "../context/ShopContext";
import { assets } from "../assets/assets";
import RelatedProducts from "../components/RelatedProducts";

const Product = () => {
  const { productId } = useParams();
  const { products, currency, addToCart} = useContext(ShopContext);
  const [productData, setProductData] = useState(null); // Change initial state to null
  const [image, setImage] = useState("");
  const [size, setSize] = useState("");

  const fetchProductData = () => {
    const foundProduct = products.find((item) => item._id === productId); // Use `find` to get the product
    if (foundProduct) {
      setProductData(foundProduct);
      setImage(foundProduct.image[0]); // Set the first image
    }
  };

  useEffect(() => {
    fetchProductData();
  }, [productId, products]);

  return productData ? (
    <div className="border-t-2 pt-10 transition-opacity ease-in duration-500 opacity-100">
      {/* Product Data */}
      <div className="flex gap-12 sm:gap-12 flex-col sm:flex-row">
        {/* Product Images */}
        <div className="flex-1 flex flex-col-reverse gap-3 sm:flex-row">
          <div className="flex sm:flex-col overflow-x-auto sm:overflow-y-scroll justify-between sm:justify-normal sm:w-[18.7%] w-full">
            {productData.image.map((item, index) => (
              <img
                src={item}
                alt={`Product Image ${index + 1}`}
                key={index}
                className="w-[24%] sm:w-full sm:mb-3 flex-shrink-0 cursor-pointer"
                onClick={() => setImage(item)} // Update main image on click
              />
            ))}
          </div>
          <div className="w-full sm:w-[80%]">
            <img src={image} alt="Main product" className="w-full h-auto" />
          </div>
        </div>
        {/* Product Info */}
        <div className="flex-1 mt-16">
          <h1 className=" font-medium text-2xl mt-2">{productData.name}</h1>
          <div className="flex items-center gap-1 mt-2 ">
            <img src={assets.star_icon} alt="" className="w-3" />
            <img src={assets.star_icon} alt="" className="w-3" />
            <img src={assets.star_icon} alt="" className="w-3" />
            <img src={assets.star_icon} alt="" className="w-3" />
            <img src={assets.star_dull_icon} alt="" className="w-3" />
            <p className="pl-2">(122)</p>
          </div>
          <p className="text-3xl font-medium mt-5">
            {currency}
            {productData.price}
          </p>
          <p className="text-gray-500md:w-4/5 mt-5">
            {productData.description}
          </p>
          <div className="flex flex-col gap-4 my-5 ">
            <p>Select Size</p>
            <div className="flex gap-2">
              {productData.sizes.map((item, index) => (
                <button
                  onClick={() => setSize(item)}
                  key={index}
                  className={`w-10 h-10 border border-gray-400 rounded-full flex justify-center items-center ${
                    size === item ? "bg-black text-white" : ""
                  }`}
                >
                  {item}
                </button>
              ))}
            </div>
          </div>
          <button onClick={() => addToCart(productData._id, size)} className=" bg-black text-white px-8 py-3 text-sm active:bg-gray-700">
            Add to cart
          </button>
          <hr className="mt-8 sm:w-4/5" />
          <div className="text-sm text-gray-500 mt-5 flex flex-col gap-1">
            <p>100% original product.</p>
            <p>Cash on delivery is available on this product.</p>
            <p>Easy return and exchange policy in 7 days.</p>
          </div>
        </div>
      </div>
      {/* Description & review section */}
      <div className="mt-20">
        <div className="flex">
          <b className="border px-5 py-3 text-sm">Description</b>
          <p className="border px-5 py-3 text-sm">Reviews (122)</p>
        </div>
        <div className="flex flex-col gap-4 border py-6 px-6 text-sm text-gray-500">
          <p>{productData.description}</p>
        </div>
      </div>

      {/* Related Products */}
      <RelatedProducts
        category={productData.category}
        subCategory={productData.subCategory}
      />
    </div>
  ) : (
    <div className="opacity-100">Loading...</div> // Make sure there is content during loading
  );
};

export default Product;
