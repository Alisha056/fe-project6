import React, { useState } from "react";
import { Container, Form } from "react-bootstrap";
import WidthContainer from "../customcomponent/widthContainer";
import "../../scss/pages/login.scss";
import { Formik } from "formik";
import { login } from "../../api/api";
// import { useNavigate } from "react-router-dom";
import UseToken from "../../helper/useToken";

const Login = () => {
   const [apiCall, setApiCall] = useState(false);
   const { setToken } = UseToken();
   // let navigate = useNavigate();
   const handelLogin = async (values) => {
      setApiCall(true);
      const response = await login(values?.email, values?.password);
      if (response.status === 200) {
         setApiCall(false);
         setToken(response?.data?.user);
         window.location.reload();
      } else {
         alert(response?.response?.data?.message);
         setApiCall(false);
      }
   };
   return (
      <WidthContainer>
         <Container className="login__container fixed-width">
            <div className="loginWrapper">
               <p className="title">
                  Login to <span className="logo font-small">Serenity</span>
               </p>
               <Formik
                  initialValues={{
                     email: "",
                     password: "",
                  }}
                  onSubmit={(values, action) => {
                     handelLogin(values);
                  }}
               >
                  {({ handleSubmit, handleChange, values, touched, errors }) => (
                     <Form className="loginForm" onSubmit={handleSubmit}>
                        <label htmlFor="email">Email</label>
                        <input type="email" name="email" id="email_input" onChange={handleChange} />
                        <label htmlFor="password">Password</label>
                        <input
                           type="password"
                           name="password"
                           id="password_input"
                           onChange={handleChange}
                        />
                        <button type="submit" className={apiCall ? "btn_processing" : "btn_normal"}>
                           {apiCall ? "Loading..." : "Login"}
                        </button>
                        <p className="registerText">
                           Don't Have an account?
                           <a className="linkText" href="/register">
                              {" "}
                              Register
                           </a>
                        </p>
                     </Form>
                  )}
               </Formik>
            </div>
         </Container>
      </WidthContainer>
   );
};

export default Login;
