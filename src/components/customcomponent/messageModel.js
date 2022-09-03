import React from "react";
import { Modal } from "react-bootstrap";
import { useNavigate } from "react-router";
import success from "../../assets/success.png";
import errorIcon from "../../assets/error.png";
import "../../scss/customcomponent/messageModal.scss";

//For Showing Success and Error Message

const MessageModal = ({
   // props
   show,
   setShow,
   heading,
   message,
   link,
   buttonText,
   type,
   reload,
   isNavigate,
   replace,
   button2,
   link2,
}) => {
   let navigate = useNavigate();
   return (
      <div className="MessageModal">
         <Modal
            show={show}
            onHide={() => {
               setShow(false);
               reload === true ? window.location.reload() : setShow(false);
               isNavigate === true
                  ? navigate(link, { replace: replace ? replace : false })
                  : setShow(false);
            }}
            dialogClassName={"MessageModal"}
            centered
         >
            <Modal.Body>
               <div className="message_modal_wrapper">
                  <img src={type === "error" ? errorIcon : success} alt="" height={80} width={80} />
                  <h3 className="message_title">{heading}</h3>
                  <p className="message_text">{message}</p>
                  <div style={{ display: "flex", gap: "8px", marginTop: "12px" }}>
                     <button
                        className="message_button"
                        onClick={() => {
                           setShow(false);
                           link === undefined ? setShow(false) : navigate(link);
                           reload === true ? window.location.reload() : setShow(false);
                        }}
                     >
                        {buttonText}
                     </button>
                     {button2 && (
                        <button
                           className="message_button"
                           onClick={() => {
                              setShow(false);
                              link === undefined ? setShow(false) : navigate(link2);
                              reload === true ? window.location.reload() : setShow(false);
                           }}
                        >
                           {button2}
                        </button>
                     )}
                  </div>
               </div>
            </Modal.Body>
         </Modal>
      </div>
   );
};

export default MessageModal;
