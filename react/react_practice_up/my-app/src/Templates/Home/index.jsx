import { useNavigate } from "react-router-dom";
import { Button } from "../Home/style";

const HomeTemplate = () => {
  console.log({ Response });
  const nav = useNavigate();
  const onclick = () => {
    nav("/login");
  };

  return (
    <div>
      <Button onClick={onclick}>로그인 페이지</Button>
      <h1>Home</h1>
    </div>
  );
};

export default HomeTemplate;
