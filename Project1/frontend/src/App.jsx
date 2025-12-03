import { Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import Cart from "./pages/Cart";
import WishList from "./pages/WishList";
import ProductDetail from "./pages/ProductDetail";
import Fashion from "./pages/Fashion";
import "./App.css";
import Sports from "./pages/Sports";
import Stationary from "./pages/Stationary";
import Bakery from "./pages/Backery";
import Electronics from "./pages/Electronics";
import Grocery from "./pages/Grocery";
import Furniture from "./pages/Furniture";
import HomeAppliances from "./pages/HomeApplines";
import Mobile from "./pages/Mobile";
import FastFood from "./pages/FastFood";
import Toys from "./pages/Toys";
import CheckOut from "./pages/CheckOut";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import ReturnRefundPolicy from "./pages/ReturnRefundPolicy";
import TermsOfService from "./pages/TermsOfService";
import FAQ from "./pages/FAQ";
import AboutUs from "./pages/AboutUs";
function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/wishlist" element={<WishList />} />
        <Route path="/product" element={<ProductDetail />} />
        <Route path="/fashion" element={<Fashion />} />
        <Route path="/sports" element={<Sports />} />
        <Route path="/stationary" element={<Stationary />} />
        <Route path="/bakery" element={<Bakery />} />
        <Route path="/electronics" element={<Electronics />} />
        <Route path="/grocery" element={<Grocery />} />
        <Route path="/furniture" element={<Furniture />} />
        <Route path="/home-appliances" element={<HomeAppliances />} />
        <Route path="/mobile" element={<Mobile />} />
        <Route path="/fast-food" element={<FastFood />} />
        <Route path="/toys" element={<Toys />} />
        <Route path="/checkout" element={<CheckOut />} />
        <Route path="/privacy-policy" element={<PrivacyPolicy />} />
        <Route path="/refund-policy" element={<ReturnRefundPolicy />} />
        <Route path="/terms" element={<TermsOfService />} />
        <Route path="/faq" element={<FAQ />} />
        <Route path="/about" element={<AboutUs />} />
      </Routes>
    </>
  );
}

export default App;
