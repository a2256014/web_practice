import { Route, Navigate } from "react-router-dom";
import IsLogin from "../../Util/IsLogin";

const PublicRoute = ({ component: Component, ...parentProps }) => {
  return IsLogin() ? <Navigate to="/mypage" /> : Component;
};

export default PublicRoute;
