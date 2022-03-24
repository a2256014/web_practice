import { useEffect, useState } from "react";
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

  //   useEffect(() => {
  //     const fetchUsers = async () => {
  //       const fetchUsers = {
  //         method: "POST",
  //         header: { "Contect-Type": "/users.json" },
  //         body: JSON.stringify({ title: "React POST Request Example" }),
  //       };
  //       const response = await fetch("https://reqres.in/api/posts", fetchUsers);
  //       const _data = await response.json();
  //       this.setState({ postId: _data.id });
  //     };
  //     fetchUsers();
  //   }, []);

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
