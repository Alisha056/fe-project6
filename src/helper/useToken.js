import { useState } from "react";

export default function UseToken() {
   const getToken = () => {
      let tokenString;
      tokenString = localStorage.getItem("user");
      const userToken = JSON.parse(tokenString);
      return userToken;
   };
   const [token, setToken] = useState(getToken());

   const SaveToken = (token) => {
      localStorage.setItem("user", JSON.stringify(token));
      setToken(token);
   };

   const clearToken = () => {
      localStorage.removeItem("user");
      setToken(null);
   };

   return {
      setToken: SaveToken,
      User: token,
      clearToken: clearToken,
   };
}
