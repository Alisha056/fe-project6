import React from "react";
import "../../scss/customcomponent/error.scss";
import notFound from "../../assets/notFound.png";

const ErrorPage = () => {
   return (
      <div id="notfound">
         <div class="notfound">
            <div class="notfound-404">
               <img src={notFound} alt="" />
               <p className="notFoundText">Something’s Missing Page Not Found</p>
            </div>
            <a href="/">Go Home</a>
         </div>
      </div>
   );
};

export default ErrorPage;
