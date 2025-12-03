import React from "react";
import Navbar from "./Navbar";
import Header from "./Header";
import Slider from "./Slider";
import ProductList from "./ProductList";
import Footer from "./Footer";
function Home() {
  return (
    <>
      <Navbar />
      <Header />
      <Slider />
      <ProductList />
      <Footer />
    </>
  );
}

export default Home;
