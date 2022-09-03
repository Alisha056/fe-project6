import React from "react";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import App from "../App";
import ErrorPage from "../components/customcomponent/error";
import Doctors from "../components/pages/doctors";
import Login from "../components/pages/login";
import MentalHealth from "../components/pages/mentalHealth";
import Register from "../components/pages/register";
import Stories from "../components/pages/stories";
import { RouteWithoutLogin } from "./protected.routes";

const RoutePath = () => {
   return (
      <Router>
         <Routes>
            <Route path="/*" element={<ErrorPage />} />
            <Route exact path={"/"} element={<App />} />
            <Route exact path="/login" element={<RouteWithoutLogin element={<Login />} />} />
            <Route exact path="/register" element={<RouteWithoutLogin element={<Register />} />} />
            <Route exact path="/doctors" element={<Doctors />} />
            <Route exact path="/stories" element={<Stories />} />
            <Route exact path="/mentalHealth" element={<MentalHealth />} />
         </Routes>
      </Router>
   );
};

export default RoutePath;
