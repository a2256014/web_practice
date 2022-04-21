import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { Container, UItem, UItems } from "./style";
import { LOCAL_URL } from "../../../Common/Constant";

const UnderHeader = ({ location: { pathname: path }, _case }) => {
  const [contents, setContents] = useState([]);
  const nav = useNavigate();
  let select = [false, false, false];

  contents.map((item, index) => {
    if (item.path === path) {
      select[index] = true;
    }
  });

  const GetData = async (path) => {
    let _path = path;
    if (path.indexOf("/", 1) !== -1) {
      _path = path.slice(0, path.indexOf("/", 1));
    }
    console.log(_path);
    const data = await axios.get(`${LOCAL_URL}/UnderHeaderData.json`);
    console.log("data: ", data);
    setContents(data.data[`${_path}`]);
  };

  useEffect(() => {
    GetData(path);
  }, [path]);

  const onclick = (e) => {
    nav(e.currentTarget.id);
  };

  return (
    <Container>
      <UItems _case={_case}>
        {contents.map((data, index) => {
          return (
            <UItem
              key={index}
              id={data.path}
              onClick={onclick}
              select={select[index]}
            >
              {data.name}
            </UItem>
          );
        })}
      </UItems>
    </Container>
  );
};

export default UnderHeader;
