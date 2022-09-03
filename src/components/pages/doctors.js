import React, { useState, useEffect } from "react";
import { Container } from "react-bootstrap";
import { getDoctorsOnly } from "../../api/api";
import WidthContainer from "../customcomponent/widthContainer";
import "../../scss/pages/doctors.scss";
import MessageModal from "../customcomponent/messageModel";
import UseToken from "../../helper/useToken";

const Doctors = () => {
   const { User } = UseToken();
   const [doctorData, setDoctorData] = useState("");
   const [show, setShow] = useState(!User ? true : false);
   useEffect(() => {
      async function getdata() {
         const res = await getDoctorsOnly();
         if (res.status === 200) {
            setDoctorData(res?.data?.user);
         }
      }
      getdata();
   }, []);
   return (
      <WidthContainer>
         <MessageModal
            show={show}
            setShow={setShow}
            type={"error"}
            message="Please Login to view doctors"
            isNavigate={true}
            buttonText="Login"
            button2={"Go Home"}
            link="/login"
            link2={"/"}
         />
         <Container className="doctor__container fixed-width">
            <p className="title">
               Doctors available at <span className="logo"> serenity</span>
            </p>
            <div className="doctorContainer">
               {User &&
                  doctorData &&
                  Object?.entries(doctorData)?.map(([key, value]) => {
                     console.log(value);
                     return (
                        <DoctorCard
                           name={value?.name}
                           email={value?.email}
                           nmcNumber={value?.nmcNumber}
                           degree={value?.degree}
                        />
                     );
                  })}
            </div>
         </Container>
      </WidthContainer>
   );
};

export default Doctors;

export const DoctorCard = ({ name, email, nmcNumber, degree }) => {
   return (
      <div className="DoctorCard">
         <p className="name"> {name}</p>
         <p className="email">Email : {email}</p>
         <p className="nmcNumber">NMC Number : {nmcNumber}</p>
         <p className="degree">Degree : {degree}</p>
      </div>
   );
};
