import ReactDOM from "react-dom";
import React from "react";
import RoutePath from "./routes/routes";
import Layout from "./components/include/layout";

const rootElement = document.getElementById("root");

ReactDOM.render(
   <React.StrictMode>
      <Layout>
         <RoutePath />
      </Layout>
   </React.StrictMode>,
   rootElement,
);
