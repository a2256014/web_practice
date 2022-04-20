import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { Container, UItem } from "./style";

const UnderHeader = ({ location: { pathname: path } }) => {
  const [contents, setContents] = useState([]);
  const nav = useNavigate();
  let select = [false, false, false];

  contents.map((item, index) => {
    if (item.path === path) {
      select[index] = true;
    }
  });

  const GetData = async (path) => {
    if (path.match(/^\/([a-z]+)?$/)) {
      const data = await axios.get("./UnderHeaderData.json");
      setContents(data.data[`${path}`]);
    }
  };

  useEffect(() => {
    GetData(path);
  }, [path]);

  const onclick = (e) => {
    nav(e.currentTarget.id);
  };

  return (
    <Container>
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
    </Container>
  );
};

export default UnderHeader;
