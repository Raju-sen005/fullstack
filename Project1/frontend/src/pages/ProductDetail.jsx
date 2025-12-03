import React from "react";
import { StarIcon } from "@heroicons/react/20/solid";

const product = {
  name: "Basic Tee 6-Pack",
  price: "₹1,599",
  href: "#",
  breadcrumbs: [
    { id: 1, name: "Men", href: "#" },
    { id: 2, name: "Clothing", href: "#" },
  ],
  images: [
    {
      src: "https://tailwindcss.com/plus-assets/img/ecommerce-images/product-page-02-featured-product-shot.jpg",
      alt: "Model wearing plain white basic tee.",
    },
    {
      src: "https://tailwindcss.com/plus-assets/img/ecommerce-images/product-page-02-secondary-product-shot.jpg",
      alt: "Two each of gray, white, and black shirts laying flat.",
    },
    {
      src: "https://tailwindcss.com/plus-assets/img/ecommerce-images/product-page-02-tertiary-product-shot-01.jpg",
      alt: "Model wearing plain black basic tee.",
    },
    {
      src: "https://tailwindcss.com/plus-assets/img/ecommerce-images/product-page-02-tertiary-product-shot-02.jpg",
      alt: "Model wearing plain gray basic tee.",
    },
  ],
  colors: [
    { id: "white", name: "White", classes: "bg-white" },
    { id: "gray", name: "Gray", classes: "bg-gray-300" },
    { id: "black", name: "Black", classes: "bg-black" },
  ],
  sizes: ["S", "M", "L", "XL", "XXL"],
  description:
    "The Basic Tee 6-Pack allows you to fully express your personality with three grayscale options. Perfect for daily wear with ultra-soft 100% cotton.",
  highlights: [
    "Hand cut and sewn locally",
    "Pre-washed & pre-shrunk",
    "Ultra-soft cotton fabric",
    "Available in 3 colors",
  ],
  details:
    "Includes two black, two white, and two heather gray Basic Tees. Get new colors every month with our subscription service.",
};
const reviews = { href: "#", average: 4.5, totalCount: 117 };

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

// ✅ Single Function Declaration
function ProductDetail() {
  return (
    <div className="bg-white min-h-screen">
      <div className="pt-8">
        {/* 🔹 Breadcrumb */}
        <nav aria-label="Breadcrumb" className="mb-4">
          {/* <ol className="mx-auto max-w-7xl flex items-center space-x-2 px-4 sm:px-6 lg:px-8">
            {product.breadcrumbs.map((breadcrumb) => (
              <li key={breadcrumb.id} className="flex items-center">
                <a
                  href={breadcrumb.href}
                  className="text-sm font-medium text-gray-600 hover:text-indigo-600"
                >
                  {breadcrumb.name}
                </a>
                <svg
                  fill="currentColor"
                  viewBox="0 0 16 20"
                  className="h-5 w-4 text-gray-400 mx-1"
                >
                  <path d="M5.697 4.34L8.98 16.532h1.327L7.025 4.341H5.697z" />
                </svg>
              </li>
            ))}
            <li className="text-sm font-medium text-gray-900">
              {product.name}
            </li>
          </ol> */}
        </nav>

        {/* 🔹 Image Gallery + Info */}
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Left: Image Gallery */}
          <div className="grid grid-cols-2 gap-4">
            {product.images.map((image, index) => (
              <img
                key={index}
                src={image.src}
                alt={image.alt}
                className="rounded-lg object-cover w-full h-64 sm:h-80 hover:scale-105 transition-transform duration-500"
              />
            ))}
          </div>

          {/* Right: Product Info */}
          <div>
            <h1 className="text-3xl font-bold text-gray-900">{product.name}</h1>
            <p className="mt-2 text-2xl text-indigo-0 font-semibold">
              {product.price}
            </p>

            {/* Ratings */}
            <div className="flex items-center mt-4">
              {[0, 1, 2, 3, 4].map((rating) => (
                <StarIcon
                  key={rating}
                  className={classNames(
                    reviews.average > rating
                      ? "text-yellow-500"
                      : "text-gray-300",
                    "h-5 w-5"
                  )}
                />
              ))}
              <a
                href={reviews.href}
                className="ml-2 text-sm text-indigo-0 hover:underline"
              >
                ({reviews.totalCount} reviews)
              </a>
            </div>

            {/* Color Options */}
            <div className="mt-6">
              <h3 className="text-sm font-medium text-gray-900 mb-2">Color</h3>
              <div className="flex space-x-3">
                {product.colors.map((color) => (
                  <button
                    key={color.id}
                    className={`w-8 h-8 rounded-full border border-gray-300 ${color.classes} hover:scale-110 transition-transform`}
                  ></button>
                ))}
              </div>
            </div>

            {/* Size Options */}
            <div className="mt-6">
              <h3 className="text-sm font-medium text-gray-900 mb-2">Size</h3>
              <div className="flex flex-wrap gap-2">
                {product.sizes.map((size) => (
                  <button
                    key={size}
                    className="px-3 py-1 border border-gray-300 rounded-md hover:bg-indigo-600 hover:text-white transition text-sm"
                  >
                    {size}
                  </button>
                ))}
              </div>
            </div>

            {/* Add to Cart */}
            <div className="flex items-center space-x-4 justify-center">
              <button className="mt-8 w-70 bg-blue-600 hover:bg-blue-700 text-white font-medium py-3 rounded-md transition">
                Add to Cart
              </button>
              <a href="/checkout">
                <button className="mt-8 w-70 bg-blue-600 hover:bg-blue-700 text-white font-medium py-3 rounded-md transition">
                  Buy Now
                </button>
              </a>
            </div>

            {/* Description */}
            <div className="mt-10 border-t pt-6">
              <h2 className="text-lg font-semibold text-gray-800 mb-2">
                Description
              </h2>
              <p className="text-gray-600">{product.description}</p>

              <h3 className="text-md font-semibold text-gray-800 mt-6 mb-2">
                Highlights
              </h3>
              <ul className="list-disc pl-5 text-gray-600 space-y-1">
                {product.highlights.map((highlight, i) => (
                  <li key={i}>{highlight}</li>
                ))}
              </ul>

              <h3 className="text-md font-semibold text-gray-800 mt-6 mb-2">
                Details
              </h3>
              <p className="text-gray-600">{product.details}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

// ✅ Only One Default Export
export default ProductDetail;
