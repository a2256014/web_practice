import styled from "@emotion/styled";
import { Footer } from "../../../Common/Styled/footer";

const Footers = () => {
  return (
    <Footer>
      <Div>
        <Contents src="./footer.jpg" />
      </Div>
    </Footer>
  );
};

export default Footers;

const Contents = styled("img")`
  width: 100%;
`;
const Div = styled("div")`
  padding: 30px;
`;
