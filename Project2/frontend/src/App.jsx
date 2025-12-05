import { useState } from "react";
import "./App.css";
import Home from "./components/Home.jsx";
import { Route, Routes } from "react-router-dom";
import ServiceList from "./pages/ServiceList.jsx";
import ServiceFilter from "./pages/ServiceFilter.jsx";
import Booking from "./pages/Booking.jsx";
function App() {
  return (
    <>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/services" element={<ServiceList />} />
      <Route path="/services/filter" element={<ServiceFilter />} />
      <Route path="//booking/:id" element={<Booking />} />
    </Routes>
    </>
  );
}

export default App;
