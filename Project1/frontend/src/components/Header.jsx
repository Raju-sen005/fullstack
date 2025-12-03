import React, { useState } from "react";
import { ChevronDown, X } from "lucide-react";
import { Link } from "react-router-dom";

function Header() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const categories = [
    {
      name: "All Categories",
      icon: "https://cdn-icons-png.flaticon.com/128/16955/16955061.png",
    },
    {
      name: "Fashion",
      icon: "https://cdn-icons-png.flaticon.com/512/892/892458.png",
      path: "/fashion",
    },
    {
      name: "Sports",
      icon: "https://cdn-icons-png.flaticon.com/128/3311/3311579.png",
      path: "/sports",
    },
    {
      name: "Stationary",
      icon: "https://cdn-icons-png.flaticon.com/128/7340/7340650.png",
      path: "/stationary",
    },
    {
      name: "Bakery",
      icon: "https://cdn-icons-png.flaticon.com/128/992/992747.png",
      path: "/bakery",
    },
    {
      name: "Electronics",
      icon: "https://cdn-icons-png.flaticon.com/128/2278/2278984.png",
      path: "/electronics",
    },
    {
      name: "Grocery",
      icon: "https://cdn-icons-png.flaticon.com/128/3514/3514242.png",
      path: "/grocery",
    },
    {
      name: "Furniture",
      icon: "https://cdn-icons-png.flaticon.com/128/2251/2251911.png",
      path: "/furniture",
    },
    {
      name: "Mobile",
      icon: "https://cdn-icons-png.flaticon.com/128/5217/5217391.png",
      path: "/mobile",
    },
    {
      name: "Home Appliances",
      icon: "https://cdn-icons-png.flaticon.com/128/1530/1530399.png",
      path: "/home-appliances",
    },
    {
      name: "Fast Food",
      icon: "https://cdn-icons-png.flaticon.com/128/9718/9718703.png",
      path: "/fast-food",
    },
    {
      name: "Toys",
      icon: "https://cdn-icons-png.flaticon.com/128/4287/4287470.png",
      path: "/toys",
    },
  ];

  return (
    <>
      {/* 🔹 Header */}
      <header className="w-full bg-white shadow-sm fixed top-[70px] left-0 z-40">
        <div className="max-w-7xl mx-auto flex items-center px-4 py-3 overflow-x-hidden scrollbar-hide space-x-6">
          {categories.map((cat, index) => (
            <div key={index}>
              {cat.name === "All Categories" ? (
                <button
                  onClick={() => setIsSidebarOpen(true)}
                  className="flex flex-col items-center justify-center text-black hover:text-indigo-0 transition-all duration-200 min-w-[80px]"
                >
                  <img
                    src={cat.icon}
                    alt={cat.name}
                    className="h-8 w-8 mb-1 object-contain"
                  />
                  <span className="text-xs font-medium whitespace-nowrap flex items-center gap-1">
                    {cat.name} <ChevronDown className="w-3 h-3" />
                  </span>
                </button>
              ) : (
                <Link
                  to={cat.path}
                  className="flex flex-col items-center justify-center text-black hover:text-indigo-0 transition-all duration-200 min-w-[80px]"
                >
                  <img
                    src={cat.icon}
                    alt={cat.name}
                    className="h-8 w-8 mb-1 object-contain"
                  />
                  <span className="text-xs font-medium whitespace-nowrap">
                    {cat.name}
                  </span>
                </Link>
              )}
            </div>
          ))}
        </div>
      </header>

      {/* 🔹 Sidebar Overlay */}
      {isSidebarOpen && (
        <div
          className="fixed inset-0 bg-black/40 z-40"
          onClick={() => setIsSidebarOpen(false)}
        ></div>
      )}

      {/* 🔹 Sidebar Drawer */}
      <div
        className={`fixed top-0 left-0 h-full w-72 bg-white shadow-lg transform ${
          isSidebarOpen ? "translate-x-0" : "-translate-x-full"
        } transition-transform duration-300 ease-in-out z-50`}
      >
        <div className="flex items-center justify-between px-5 py-4 border-b">
          <h2 className="text-lg font-semibold text-gray-800">
            All Categories
          </h2>
          <button onClick={() => setIsSidebarOpen(false)}>
            <X className="w-6 h-6 text-gray-600 hover:text-[#66b2b2]" />
          </button>
        </div>

        <div className="p-4 space-y-4 overflow-y-auto h-[calc(100%-60px)]">
          {categories.slice(1).map((cat, index) => (
            <Link
              key={index}
              to={cat.path}
              onClick={() => setIsSidebarOpen(false)}
              className="flex items-center space-x-3 hover:bg-[#fff5ee] rounded-md p-2 transition"
            >
              <img
                src={cat.icon}
                alt={cat.name}
                className="h-8 w-8 object-contain"
              />
              <span className="text-gray-800 font-medium">{cat.name}</span>
            </Link>
          ))}
        </div>
      </div>
    </>
  );
}

export default Header;
