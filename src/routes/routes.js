import React from "react";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import App from "../App";
import ErrorPage from "../components/customcomponent/error";

const RoutePath = () => {
   return (
      <Router>
         <Routes>
            <Route path="/*" element={<ErrorPage />} />
            <Route exact path={"/"} element={<App />}></Route>
         </Routes>
      </Router>
   );
};

export default RoutePath;
