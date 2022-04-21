import {
  DItem,
  DItemContent,
  DItemData,
  DItemImg,
  DItemName,
  DropContiner,
  DropItems,
} from "./style";
import axios from "axios";
import { useEffect } from "react";
import { useState } from "react";
import { LOCAL_URL } from "../../../Common/Constant";
const DropMenu = ({ drop, visible }) => {
  const [contents, setContents] = useState();
  const getData = async () => {
    const { data } = await axios.get(`${LOCAL_URL}/DropData.json`);
    setContents(data.datas);
  };
  useEffect(() => {
    getData();
  }, []);

  const handleOnClick = (e) => {
    if (!drop.isDrop) {
      drop.setIsDrop(!drop.isDrop);
      visible.setVisible(!visible.visible);
    } else {
      visible.setVisible(!visible.visible);
      setTimeout(() => {
        drop.setIsDrop(!drop.isDrop);
      }, 200);
    }
  };

  useEffect(() => {
    if (drop.isDrop) {
      document.body.addEventListener("click", handleOnClick);
      return () => {
        document.body.removeEventListener("click", handleOnClick);
      };
    }
  }, [drop]);

  return (
    <DropContiner
      visible={visible.visible}
      onClick={(e) => e.stopPropagation()}
    >
      <DropItems>
        {contents &&
          contents.map((item, index) => {
            return (
              <DItem key={index}>
                <DItemImg src={item.path} />
                <DItemContent>
                  <DItemName>{item.name}</DItemName>
                  <DItemData>{item.data}</DItemData>
                </DItemContent>
              </DItem>
            );
          })}
      </DropItems>
    </DropContiner>
  );
};

export default DropMenu;
