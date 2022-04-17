import { useNavigate } from "react-router-dom";
import { Button } from "../Login/Style";

const MyTemplate = () => {
  const nav = useNavigate();
  const Logout = () => {
    localStorage.removeItem("accessToken");
    nav("/login");
  };
  return <Button onClick={Logout}>로그아웃</Button>;
};

export default MyTemplate;
