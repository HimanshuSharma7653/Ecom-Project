import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Navbar from "./Components/Navbar";
import Footer from "./Components/Footer";
import Home from "./pages/Home";
import AboutPage from "./pages/AboutPage";
import FeaturesPage from "./pages/FeaturesPage";
import ShopPage from "./pages/ShopPage";
import ProductPage from "./pages/ProductPage";
import TestimonialPage from "./pages/TestimonialPage";
import FaqPage from "./pages/FaqPage";
import ContactusPage from "./pages/ContactusPage";
import Error404Page from "./pages/Error404Page";
import PrivacyPolicyPage from "./pages/policies/PrivacyPolicyPage";
import TermsAndCondtions from "./pages/policies/TermsAndConditions";
import LoginPage from "./pages/User/LoginPage";
import SignupPage from "./pages/User/SignupPage";
import ProfilePage from "./pages/User/ProfilePage";
import CartPage from "./pages/User/CartPage";
import CheckoutPage from "./pages/User/CheckoutPage";
import AdminHomePage from "./pages/admin/AdminHomePage";
import AdminCreateMaincategoryPage from "./pages/admin/Maincategory/AdminCreateMaincategoryPage";
import AdminMaincategoryPage from "./pages/admin/Maincategory/AdminMaincategoryPage";
import AdminUpdateMaincategoryPage from "./pages/admin/Maincategory/AdminUpdateMaincategoryPage";



export default function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="" element = {<Home/>}/>
          <Route path="/about" element = {<AboutPage/>}/>
          <Route path="/features" element={<FeaturesPage/>}/>
          <Route path="/shop" element={<ShopPage/>}/>   
          <Route path="/product/:id" element={<ProductPage/>}/>
          <Route path="/testimonial" element={<TestimonialPage/>}/>
          <Route path="/faq" element={<FaqPage/>}/>
          <Route path="/contact" element={<ContactusPage/>}/>
          <Route path="/shop" element={<ShopPage/>}/>
          <Route path="/privacy-policies" element={<PrivacyPolicyPage/>}/>
          <Route path="/terms-conditions" element={<TermsAndCondtions/>}/>


          {/* Admin routes */}
          <Route path="/admin" element={<AdminHomePage/>}/>
          <Route path="/admin/maincategory" element={<AdminMaincategoryPage/>}/>
          <Route path="/admin/maincategory/create" element={<AdminCreateMaincategoryPage/>}/>
          <Route path="/admin/maincategory/update/:id" element={<AdminUpdateMaincategoryPage/>}/>
          


          
          <Route path="/signup" element={<SignupPage/>}/>
          <Route path="/login" element={<LoginPage/>}/>``


          {/* ********* User Routes******* */}
          <Route path="/profile" element ={<ProfilePage/>}/>
          <Route path="/cart" element ={<CartPage/>}/> 
          <Route path="checkout" element={<CheckoutPage/>}/>

          

          <Route path="/*" element={<Error404Page/>}/>
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
}
