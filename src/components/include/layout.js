import React from "react";
import Nav from "./navbar";
import Footer from "./footer";

const Layout = ({ children }) => {
   return (
      <>
         <Nav />
         {children}
         <Footer />
      </>
   );
};

export default Layout;
