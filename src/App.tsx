import React, { useEffect } from 'react';
import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Header from './shared/layout/header';
import LandingPage from './page/landing_page';
import ActivityPage from './page/howitwork_page';
import ContactPage from './page/contact';
import BlogPage from './page/blog';
import ProductPage from './page/booking_page';
import Footer from './shared/layout/footer';


function App() {

  useEffect(() => {
    document.title = "Kidgo"
  }, [])
  return (
    <BrowserRouter>
      <Header />
      <div style={{ width: "1170px", margin: "0 auto" }}>
        <Routes>
          <Route index path='/' element={<LandingPage />} />
          <Route path='/hoat-dong' element={<ActivityPage />} />
          <Route path='/lien-he' element={<ContactPage />} />
          <Route path='/bai-viet' element={<BlogPage />} />
          <Route path='/dat-xe' element={<ProductPage />} />
        </Routes>
      </div>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
