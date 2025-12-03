import React, { useEffect, useState } from "react";

function Slider() {
  const slides = [
    {
      img: "https://images.unsplash.com/photo-1512295767273-ac109ac3acfa?auto=format&fit=crop&w=1400&q=80",
      text: "Welcome to E-Commerce",
      color: "bg-black/50",
    },
    {
      img: "https://images.unsplash.com/photo-1503602642458-232111445657?auto=format&fit=crop&w=1400&q=80",
      text: "Shop Local, Go Global",
      color: "bg-black/50",
    },
    {
      img: "https://images.unsplash.com/photo-1515168833906-d2a3b82b302a?auto=format&fit=crop&w=1400&q=80",
      text: "Find Everything You Love",
      color: "bg-black/50",
    },
  ];

  const [current, setCurrent] = useState(0);

  // 🔹 Auto slide every 4 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length);
    }, 4000);
    return () => clearInterval(interval);
  }, [slides.length]);

  return (
    <div
      className="relative w-full h-[400px] md:h-[350px] overflow-hidden"
      style={{ marginTop: "147px" }}
    >
      {/* 🔹 Slides Container */}
      <div
        className="flex transition-transform duration-700 ease-in-out"
        style={{ transform: `translateX(-${current * 100}%)` }}
      >
        {slides.map((slide, index) => (
          <div
            key={index}
            className="min-w-full h-[400px] md:h-[500px] relative"
          >
            {/* 🔹 Background Image */}
            <img
              src={slide.img}
              alt={slide.text}
              className="w-full h-full object-cover"
            />
            {/* 🔹 Overlay */}
            <div
              className={`absolute inset-0 ${slide.color} flex items-center justify-center`}
            >
              <h2 className="text-white text-3xl md:text-5xl font-bold drop-shadow-lg text-center px-4">
                {slide.text}
              </h2>
            </div>
          </div>
        ))}
      </div>

      {/* 🔹 Dots Indicator */}
      <div className="absolute bottom-5 left-1/2 transform -translate-x-1/2 flex space-x-3 z-20">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrent(index)}
            className={`w-3 h-3 rounded-full ${
              current === index ? "bg-white" : "bg-white/50"
            } transition-all duration-300`}
          />
        ))}
      </div>

      {/* 🔹 Prev Button */}
      <button
        onClick={() =>
          setCurrent((prev) => (prev - 1 + slides.length) % slides.length)
        }
        className="absolute top-1/2 left-5 transform -translate-y-1/2 bg-black/0 hover:bg-black/50 text-white rounded-full p-3 transition z-20"
      >
        ❮
      </button>

      {/* 🔹 Next Button */}
      <button
        onClick={() => setCurrent((prev) => (prev + 1) % slides.length)}
        className="absolute top-1/2 right-5 transform -translate-y-1/2 bg-black/0 hover:bg-black/50 text-white rounded-full p-3 transition z-20"
      >
        ❯
      </button>
    </div>
  );
}

export default Slider;
