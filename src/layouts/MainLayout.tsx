import React from "react";
import Navbar from "../components/Shared/Navbar";
import Footer from "../components/Shared/Footer";
import { Outlet } from "react-router";
import ScrollToTop from "../components/Shared/ScrollToTop";

const MainLayout = () => {
  return (
    <div>
      <Navbar />
      <div className="min-h-[calc(100vh-300px)]">
        <Outlet />
        <ScrollToTop />
      </div>
      <Footer />
    </div>
  );
};

export default MainLayout;
