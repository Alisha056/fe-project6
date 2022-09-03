import { Navigate } from "react-router-dom";
import UseToken from "../helper/useToken";

export const RouteWithoutLogin = ({ path, redirectPath, element }) => {
   const { User } = UseToken();
   if (User) {
      return <Navigate to="/" replace={true} />;
   }
   return element;
};
