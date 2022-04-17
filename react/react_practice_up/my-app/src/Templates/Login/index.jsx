import { useState } from "react";
import { Button, Container, Input } from "./Style";
import axios from "axios";
import onLoginSuccess from "../../Util/onLoginSuccess";
import { useNavigate } from "react-router-dom";

const LoginTemplate = () => {
  const nav = useNavigate();
  const [login, setlogin] = useState({
    id: "",
    password: "",
  });
  const changeId = (e) => {
    setlogin((prev) => ({ ...prev, id: e.target.value }));
  };
  const changePassword = (e) => {
    setlogin((prev) => ({ ...prev, password: e.target.value }));
  };

  const onclick = async () => {
    const {
      data: { users },
    } = await axios.get("/users.json");

    const { id, password, name } = users[0];
    if (id === login.id && password === login.password) {
      const { data } = await axios.get("/token.json");
      onLoginSuccess(data);
      nav("/mypage");
    } else {
      console.log("실패");
    }
  };

  return (
    <Container>
      <Input
        description="Id"
        placeholder="아이디를 입력해주세요"
        onChange={changeId}
      />
      <Input
        description="Password"
        type="password"
        placeholder="비밀번호를 입력해주세요"
        onChange={changePassword}
      />
      <Button onClick={onclick}>로그인</Button>
    </Container>
  );
};

export default LoginTemplate;
