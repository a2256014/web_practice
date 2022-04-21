import { IconButton, TextField, styled } from "@mui/material";
import { BiSearch } from "react-icons/bi";

const HeaderSearch = ({ _case, modal }) => {
  const Reaction = () => {
    switch (_case) {
      case "Full":
        return (
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
        );
      case "Middle":
        return (
          <Button onClick={onclick}>
            <BiSearch />
          </Button>
        );
      default:
      //do nothing
    }
  };

  const onclick = () => {
    modal.setOpenModal(!modal.openModal);
  };

  return Reaction();
};

export default HeaderSearch;

const InputForm = styled(TextField)`
  display: flex;
  padding-left: 15px;
  width: 250px;

  outline: 0;
`;

const Button = styled(IconButton)`
  padding: 4px;
  font-size: 28px;
  opacity: 0.8;

  :hover {
    background-color: rgb(4, 167, 226);
    color: white;
  }
`;
