import { useNavigate } from "react-router-dom";
import { Button } from "../Login/Style";

const MyTemplate = () => {
  const nav = useNavigate();
  const Logout = () => {
    localStorage.removeItem("accessToken");
    nav("/login");
  };
  return <Button onClick={Logout}>๋ก๊ทธ์์</Button>;
};

export default MyTemplate;
