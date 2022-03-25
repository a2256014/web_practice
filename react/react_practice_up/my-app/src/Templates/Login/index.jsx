import { useState } from "react";
import { Button, Container, Input } from "./Style";
import axios from "axios";

const LoginTemplate = () => {
  const [login, setlogin] = useState({
    id: "",
    password: "",
  });
  const changeId = (e) => {
    setlogin((prev) => ({ ...prev, id: e.target.value }));
    console.log(login);
  };
  const changePassword = (e) => {
    console.log(e);
    setlogin((prev) => ({ ...prev, password: e.target.value }));
    console.log(login);
  };

  const onclick = async () => {
    const {
      data: { users },
    } = await axios.get("/users.json");

    const { id, password, name } = users[0];
    if (id === login.id && password === login.password) {
      console.log("로그인 성공 : " + name);
    } else {
      console.log("실패");
    }
  };

  return (
    <Container>
      <Input placeholder="아이디를 입력해주세요" onChange={changeId} />
      <Input
        type="password"
        placeholder="비밀번호를 입력해주세요"
        onChange={changePassword}
      />
      <Button onClick={onclick}>로그인</Button>
    </Container>
  );
};

export default LoginTemplate;
