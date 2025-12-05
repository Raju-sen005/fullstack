import React from "react";
import Navbar from "../components/Navbar";

function Booking() {
  // **Example Selected Service Data** (Later you can pass via props or URL params)
  const selectedService = {
    title: "Electrician",
    price: "₹199",
    desc: "Basic wiring, fan & light installation",
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQg8ZKOX71iFU_eFsq_2T3iyXy7pdwNkdr8_g&s",
  };

  const onsubmit = () => {
    alert("Booking Confirmed!");
  };
  return (
    <>
      <Navbar />

      <div className="pt-28 max-w-6xl mx-auto px-4">
        {/* Heading */}
        {/* <h1 className="text-3xl md:text-4xl font-bold text-gray-800 mb-2">
          Booking Page
        </h1> */}

        {/* <p className="text-gray-600 text-lg mb-6">
          Review your selected service and fill in your details to proceed.
        </p> */}

        {/* ==== MAIN GRID ==== */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* ==== Selected Service Summary ==== */}
          <div className="md:col-span-1">
            <div
              className="bg-white rounded-xl shadow-sm p-5  sticky top-28"
              style={{ border: "1px solid #b9b9b9" }}
            >
              <h2 className="text-xl font-semibold text-gray-800 mb-4">
                Selected Service
              </h2>

              <div className="flex items-center gap-4">
                <img
                  src={selectedService.img}
                  alt={selectedService.title}
                  className="w-20 h-20 object-contain"
                />
                <div>
                  <h3 className="text-lg font-bold text-gray-800">
                    {selectedService.title}
                  </h3>
                  <p className="text-gray-600 text-sm">
                    {selectedService.desc}
                  </p>
                  <p className="text-blue-600 font-bold text-lg mt-1">
                    {selectedService.price}
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* ==== Booking Form ==== */}
          <div className="md:col-span-2">
            <div
              className="bg-white p-6 rounded-xl shadow-sm "
              style={{ border: "1px solid #b9b9b9" }}
            >
              {/* Name */}
              <div className="mb-5">
                <label className="block text-gray-700 font-semibold mb-2">
                  Full Name
                </label>
                <input
                  type="text"
                  className="w-full px-4 py-3 rounded-lg focus:outline-none focus:ring-1 focus:ring-blue-500"
                  placeholder="Enter your name"
                  style={{ border: "1px solid #b9b9b9" }}
                />
              </div>

              {/* Phone */}
              <div className="mb-5">
                <label className="block text-gray-700 font-semibold mb-2">
                  Phone Number
                </label>
                <input
                  //   type="number"
                  type="text"
                  className="w-full px-4 py-3  rounded-lg focus:outline-none focus:ring-1 focus:ring-blue-500"
                  placeholder="Enter your phone"
                  style={{ border: "1px solid #b9b9b9" }}
                />
              </div>

              {/* Address */}
              <div className="mb-5">
                <label className="block text-gray-700 font-semibold mb-2">
                  Address
                </label>
                <textarea
                  className="w-full px-4 py-3  rounded-lg focus:outline-none focus:ring-1 focus:ring-blue-500"
                  placeholder="Enter your full address"
                  rows={3}
                  style={{ border: "1px solid #b9b9b9" }}
                />
              </div>

              {/* Date */}
              <div className="mb-5">
                <label className="block text-gray-700 font-semibold mb-2">
                  Booking Date
                </label>
                <input
                  type="date"
                  className="w-full px-4 py-3  rounded-lg focus:outline-none focus:ring-1 focus:ring-blue-500"
                  style={{ border: "1px solid #b9b9b9" }}
                />
              </div>

              <div className="mb-5">
                <label className="block text-gray-700 font-semibold mb-2">
                  Payment Summary
                </label>

                <div className="bg-gray-50 p-4 rounded-lg ">
                  <div className="flex justify-between text-gray-700 mb-2">
                    <span>Service Charge</span>
                    <span>{selectedService.price}</span>
                  </div>

                  <div className="flex justify-between text-gray-700 mb-2">
                    <span>Platform Fee</span>
                    <span>₹50</span>
                  </div>

                  <hr className="my-2" />

                  {/* Total Calculation */}
                  <div className="flex justify-between text-gray-900 font-bold text-lg">
                    <span>Total</span>
                    <span>
                      ₹{parseInt(selectedService.price.replace("₹", "")) + 50}
                    </span>
                  </div>
                </div>
              </div>

              {/* Submit */}
              <button
                type="submit"
                className="w-full bg-blue-600 text-white py-3 rounded-lg shadow hover:bg-blue-700 text-lg font-semibold transition"
                onClick={ onsubmit }
              >
                Confirm Booking
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Booking;
