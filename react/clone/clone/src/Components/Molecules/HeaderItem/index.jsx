import { useNavigate } from "react-router-dom";
import { Container, Item } from "../../../Common/Styled/headeritem";

const HeaderItem = ({ select }) => {
  const nav = useNavigate();

  const onclick = (e) => {
    nav(`${e.currentTarget.id}`);
  };

  return (
    <Container>
      <Item id="/" select={select[0]} onClick={onclick}>
        커뮤니티
      </Item>
      <Item id="/store" select={select[1]} onClick={onclick}>
        스토어
      </Item>
      <Item id="/experts" select={select[2]} onClick={onclick}>
        인테리어시공
      </Item>
    </Container>
  );
};

export default HeaderItem;
