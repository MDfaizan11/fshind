import "../src/App.css";
import { useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Home from "./Pages/Home";
import About from "./Pages/About";
import Contact from "./Pages/Contact";
import Services from "./Pages/Services";
import Repair from "./Pages/Repair";
import NewSofa from "./Pages/NewSofa";
import Choose from "./Pages/Choose";
import Footer from "./components/Footer";
import TestimonialSlider from "./components/TestimonialSlider";
import Enquiry from "./components/Enquiry";
import Dashboard from "./components/Dashboard";
import Login from "./components/Login";
import ProtectedRoute from "./components/ProtectedRoute";
import List from "./Pages/List";
import Myenquiry from "./Pages/Myenquiry";
import Uplode from "./Pages/Uplode";
import Feedback from "./components/Feedback";
import ScrollToTop from "./components/ScrollToTop";
import SofaImg from "./components/SofaImg";
import Dining from "./components/Dining";
import Bed from "./components/Bed";
import Wardrobe from "./components/Wardrobe";
import Dressing from "./components/Dressing";
import Kitchen from "./components/Kitchen";
function App() {
  useEffect(() => {
    // Scroll to the top when this page is loaded
    window.scrollTo(0, 0);
  }, []);
  return (
    <>
      <BrowserRouter>
        <ScrollToTop />
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/services" element={<Services />} />
          <Route path="/repair" element={<Repair />} />
          <Route path="/newsofa" element={<NewSofa />} />
          <Route path="/choose" element={<Choose />} />
          <Route path="/testimonial" element={<TestimonialSlider />} />
          <Route path="/enquiry" element={<Enquiry />} />
          <Route
            path="/admin"
            element={
              <ProtectedRoute>
                <Dashboard />
              </ProtectedRoute>
            }
          >
            <Route path="upload" element={<Uplode />} />
            <Route path="list" element={<List />} />
            <Route path="myenquiry" element={<Myenquiry />} />
          </Route>
          <Route path="/login" element={<Login />} />
          <Route path="/feedback" element={<Feedback />} />
          <Route path="/sofaimg" element={<SofaImg />} />
          <Route path="/dining" element={<Dining />} />
          <Route path="/bed" element={<Bed />} />
          <Route path="/wardrobe" element={<Wardrobe />} />
          <Route path="/dressing" element={<Dressing />} />
          <Route path="/kitchen" element={<Kitchen />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
