import { BENNER_URL } from "../../../Common/Constant";
import { Container, Content, InfoContent, InfoImg } from "./style";

const BennerInfo = () => {
  return (
    <Container>
      <InfoContent>
        <Content opacity={"0.7"}>오늘의집은 처음이세요?</Content>
        <Content size={20}>첫 구매 최대 10만원 할인</Content>
      </InfoContent>
      <InfoImg src={BENNER_URL} />
    </Container>
  );
};

export default BennerInfo;
