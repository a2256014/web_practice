import { Route, Navigate } from "react-router-dom";
import IsLogin from "../../Util/IsLogin";

const PrivateRoute = ({ component: Component, ...parentProps }) => {
  return IsLogin() ? (
    Component //로그인 됐으면 컴포넌트 내용 보여주기
  ) : (
    <Navigate to="/login" /> //아니면 로그인 페이지
  );
};

export default PrivateRoute;
