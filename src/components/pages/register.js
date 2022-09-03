import React, { useState } from "react";
import { Container, Form } from "react-bootstrap";
import WidthContainer from "../customcomponent/widthContainer";
import "../../scss/pages/register.scss";
import { Formik } from "formik";
import { register } from "../../api/api";
import MessageModal from "../customcomponent/messageModel";

const Register = () => {
   const [registerasUser, setRegisterasUser] = useState(true);
   const [show, setShow] = useState(false);

   const handleRegister = async (values) => {
      const response = registerasUser
         ? await register(values?.fname, values?.email, values?.password, registerasUser)
         : await register(
              values?.fname,
              values?.email,
              values?.password,
              registerasUser,
              values?.nmcNumber,
              values?.degree,
           );
      if (response?.status === 201) {
         setShow(true);
      } else {
         alert(response?.response?.data?.message);
      }
   };
   return (
      <WidthContainer>
         <MessageModal
            show={show}
            setShow={setShow}
            heading={"Thank You"}
            message={"You Have Scuessfully Registered"}
            isNavigate={true}
            link={"/login"}
            buttonText="OK"
         />
         <Container className="register__container fixed-width">
            <div className="registerWrapper">
               <p className="title">
                  Register in <span className="logo font-small">Serenity</span>
               </p>
               <Formik
                  initialValues={{
                     fname: "",
                     email: "",
                     password: "",
                     nmcNumber: "",
                     degree: "",
                  }}
                  onSubmit={(values, action) => {
                     handleRegister(values);
                  }}
               >
                  {({ handleSubmit, handleChange, values, touched, errors }) => (
                     <Form className="loginForm" onSubmit={handleSubmit}>
                        <p className="registerAsText">Register as</p>
                        <div className={"d-flex mb-2"} style={{ gap: "25px" }}>
                           <div className="checkboxGroup">
                              <label htmlFor="userCheckbox">User</label>
                              <input
                                 type="checkbox"
                                 name="userCheckbox"
                                 id="userCheckbox"
                                 checked={registerasUser}
                                 onChange={() => setRegisterasUser(true)}
                              />
                           </div>
                           <div className="checkboxGroup">
                              <label htmlFor="userCheckbox">Doctor</label>
                              <input
                                 type="checkbox"
                                 name="userCheckbox"
                                 id="doctorCheckbox"
                                 checked={!registerasUser}
                                 onChange={() => setRegisterasUser(false)}
                              />
                           </div>
                        </div>
                        <label htmlFor="fname">Full Name</label>
                        <input type="text" name="fname" id="name_input" onChange={handleChange} />
                        <label htmlFor="email">Email</label>
                        <input type="email" name="email" id="email_input" onChange={handleChange} />
                        <label htmlFor="password">Password</label>
                        <input
                           type="password"
                           name="password"
                           id="password_input"
                           onChange={handleChange}
                        />
                        {!registerasUser && (
                           <>
                              <label htmlFor="nmcNumber">NMC Number</label>
                              <input
                                 type="text"
                                 name="nmcNumber"
                                 id="nmvNumber_input"
                                 onChange={handleChange}
                              />
                              <label htmlFor="degree">Degree</label>
                              <input
                                 type="text"
                                 name="degree"
                                 maxLength={8}
                                 id="degree_input"
                                 onChange={handleChange}
                              />
                           </>
                        )}
                        <button type="submit">Register</button>
                        <p className="registerText">
                           Already Have an account?
                           <a className="linkText" href="/login">
                              {" "}
                              Login
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

export default Register;
