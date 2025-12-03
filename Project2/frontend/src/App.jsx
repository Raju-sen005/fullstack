import { useState } from "react";
import "./App.css";
import Home from "./components/Home.jsx";
import { Route, Routes } from "react-router-dom";
import ServiceList from "./pages/ServiceList.jsx";
import ServiceFilter from "./pages/ServiceFilter.jsx";
function App() {
  return (
    <>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/services" element={<ServiceList />} />
      <Route path="/services/filter" element={<ServiceFilter />} />
    </Routes>
    </>
  );
}

export default App;
