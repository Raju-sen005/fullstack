import React from "react";

function Services() {
  const services = [
    {
      id: 1,
      title: "Home Repair & Construction Services",
      desc: "Fix wiring, switchboards, fans",
      price: "₹199",
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQg8ZKOX71iFU_eFsq_2T3iyXy7pdwNkdr8_g&s",
    },
    {
      id: 2,
      title: "Cleaning & Maintenance Services",
      desc: "Leak repair, pipe fitting",
      price: "₹249",
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRUZvqPhDtrMBdLKzCoh2XvOXe0_zGWtA9aEg&s",
    },
    {
      id: 3,
      title: "Beauty & Personal Care Services",
      desc: "Furniture repair & installation",
      price: "₹299",
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRJ70Z0fuPygX8elpcGUNzBtEsoE8wBNv947w&s",
    },
    {
      id: 4,
      title: "Transportation & Other Services",
      desc: "Deep cleaning & dust removal",
      price: "₹499",
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS79XsD_LKRWfh4FKXC6Pc2DphhBwiANoX8Pg&s",
    },
     {
      id: 5,
      title: "Home Maintenance & Special Services",
      desc: "Fix wiring, switchboards, fans",
      price: "₹199",
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQg8ZKOX71iFU_eFsq_2T3iyXy7pdwNkdr8_g&s",
    },
    {
      id: 6,
      title: "Event & Lifestyle Services",
      desc: "Leak repair, pipe fitting",
      price: "₹249",
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRUZvqPhDtrMBdLKzCoh2XvOXe0_zGWtA9aEg&s",
    },
    {
      id: 7,
      title: "Pet Care Services",
      desc: "Furniture repair & installation",
      price: "₹299",
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRJ70Z0fuPygX8elpcGUNzBtEsoE8wBNv947w&s",
    },
    // {
    //   id: 8,
    //   title: "Home Cleaning",
    //   desc: "Deep cleaning & dust removal",
    //   price: "₹499",
    //   img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS79XsD_LKRWfh4FKXC6Pc2DphhBwiANoX8Pg&s",
    // },
  ];

  return (
    <section className="w-full pt-28 pb-16 bg-white min-h-screen">
      <div className="max-w-6xl mx-auto px-4">
        {/* Heading */}
        <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6">
          Book a Service
        </h2>

        {/* Subheading */}
        <p className="text-gray-600 mb-10">
          Choose from trusted local service providers near you.
        </p>

        {/* Services Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {services.map((service) => (
            <div
              key={service.id}
              className="bg-gray-50 p-5 rounded-xl  hover:shadow-sm transition cursor-pointer"
            >
              <img
                src={service.img}
                alt={service.title}
                className="w-20 h-20 mx-auto mb-4"
              />

              <h3 className="text-xl font-semibold text-gray-800 text-center">
                {service.title}
              </h3>

              {/* <p className="text-gray-600 text-sm text-center mt-2">
                {service.desc}
              </p> */}

              {/* <p className="text-blue-600 font-semibold text-center mt-3 text-lg">
                Starting at {service.price}
              </p> */}

              {/* <button className="w-full bg-blue-600 text-white py-2 rounded-lg mt-4 hover:bg-blue-700 transition">
                Book Now
              </button> */}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Services;
