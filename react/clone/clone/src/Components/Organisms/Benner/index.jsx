import { useState } from "react";
import BennerButton from "../../Atoms/Button/BennerButton";
import BennerInfo from "../../Molecules/BennerInfo";
import { BennerForm } from "./style";

const Benner = () => {
  const [display, setDisplay] = useState("true");

  return (
    <div>
      <BennerForm display={display}>
        <div />
        <BennerInfo />
        <BennerButton setDisplay={setDisplay} />
      </BennerForm>
    </div>
  );
};

export default Benner;
