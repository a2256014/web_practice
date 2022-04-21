import { useState } from "react";
import { InputForm, ModalBoard, ModalContainer } from "./style";
import { BiSearch } from "react-icons/bi";

const Modal = ({ modal }) => {
  const [visible, setVisible] = useState(false);
  const onclick = (e) => {
    if (!modal.openModal) {
      setVisible(false);
      modal.setOpenModal(!modal.openModal);
    } else {
      setVisible(true);
      setTimeout(() => {
        modal.setOpenModal(!modal.openModal);
      }, 150);
    }
  };
  return (
    <ModalContainer onClick={onclick}>
      <ModalBoard onClick={(e) => e.stopPropagation()} visible={visible}>
        <InputForm
          size="small"
          placeholder="오늘의집 통합검색"
          InputProps={{
            style: {
              padding: 0,
              paddingLeft: 8,
              opacity: 0.6,
            },
            startAdornment: <BiSearch size={28} />,
          }}
        />
      </ModalBoard>
    </ModalContainer>
  );
};

export default Modal;
