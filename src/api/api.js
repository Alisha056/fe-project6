import axios from "axios";

export const base = () => {
   const data = {
      baseURL: process.env.REACT_APP_API_URL,
      header: {
         "content-type": "application/json",
      },
   };
   return axios.create(data);
};

export const login = async (email, password) => {
   return await base()
      .post("/auth/login", { email: email, password: password })
      .then(function (response) {
         return response;
      })
      .catch(function (error) {
         return error;
      });
};

export const register = async (name, email, password, userType, nmcNumber, degree) => {
   return await base()
      .post("/auth/register", {
         name: name,
         email: email,
         password: password,
         isDoctor: userType,
         nmcNumber: nmcNumber,
         degree: degree,
      })
      .then(function (response) {
         return response;
      })
      .catch(function (error) {
         return error;
      });
};

export const getDoctorsOnly = async () => {
   return await base()
      .get("/users/doctors")
      .then(function (res) {
         return res;
      })
      .catch(function (error) {
         return error;
      });
};

export const getAllStories = async () => {
   return await base()
      .get("/story")
      .then(function (res) {
         return res;
      })
      .catch(function (error) {
         return error;
      });
};

export const postStory = async (userId, story) => {
   return await base()
      .post("/story", {
         userId: userId,
         story: story,
      })
      .then(function (response) {
         return response;
      })
      .catch(function (error) {
         return error;
      });
};
