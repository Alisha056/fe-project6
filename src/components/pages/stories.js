import React, { useState, useEffect } from "react";
import { Container, Form, Modal } from "react-bootstrap";
import { getAllStories, postStory } from "../../api/api";
import UseToken from "../../helper/useToken";
import "../../scss/pages/stories.scss";
import WidthContainer from "../customcomponent/widthContainer";
import moment from "moment";

const Stories = () => {
   const [stories, setStories] = useState("");
   const [show, setShow] = useState(false);
   useEffect(() => {
      async function getStories() {
         const res = await getAllStories();
         if (res?.status === 200) {
            setStories(res?.data?.stories);
         }
      }
      getStories();
   }, []);
   console.log(stories);
   return (
      <WidthContainer>
         <PostStoryModal show={show} setShow={setShow} />
         <Container className="StoriesContainer fixed-width">
            <p className="titleText">
               Your Stories are <span className="logo"> Alive</span> here
            </p>
            <p className="shareText" onClick={() => setShow(true)}>
               Share your story{" "}
            </p>
            <div className="storiesWrapper">
               {stories &&
                  Object.entries(stories).map(([key, value]) => {
                     return <StoryCard story={value?.text} time={value?.date} />;
                  })}
            </div>
         </Container>
      </WidthContainer>
   );
};

export default Stories;

export const StoryCard = ({ story, time }) => {
   return (
      <div className="storyCard">
         <p className="time">{moment(time).format("MMMM DD, YYYY  kk:mm:ss")}</p>
         <p className="story">{story}</p>
      </div>
   );
};

export const PostStoryModal = ({ show, setShow }) => {
   const [story, setStory] = useState("");
   const { User } = UseToken();

   const handleSubmit = async (e) => {
      e.preventDefault();
      const res = await postStory(User?._id, story);
      if (res.status === 201) {
         alert("Story Created");
         setShow(false);
      } else {
         alert(Response?.response?.data?.message);
      }
   };
   return (
      <Modal
         show={show}
         onHide={() => {
            setShow(false);
         }}
         dialogClassName="storyModal"
         centered
         size="lg"
      >
         <Modal.Body>
            <div className="StoryForm__wrapper">
               <p className="text">Post Your Story</p>
               <Form onSubmit={handleSubmit} className={"StoryForm"}>
                  <textarea
                     name="story"
                     id="story"
                     rows="15"
                     value={story}
                     required
                     onChange={(e) => {
                        setStory(e?.target?.value);
                     }}
                  />
                  <button type="submit">Submit</button>
               </Form>
            </div>
         </Modal.Body>
      </Modal>
   );
};
