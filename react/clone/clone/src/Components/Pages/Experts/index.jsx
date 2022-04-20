import { useLocation } from "react-router-dom";
import ExpertTemplate from "../../Templates/Experts";
import CalculTemplate from "../../Templates/Experts/calculator";
import ConsultTemplate from "../../Templates/Experts/consultation";

const ExpertPage = () => {
  const location = useLocation();

  const Navi = () => {
    switch (location.pathname) {
      case "/experts": {
        return <ExpertTemplate />;
      }
      case "/experts/consultation": {
        return <ConsultTemplate />;
      }
      case "/experts/calculator": {
        return <CalculTemplate />;
      }
      //no default
    }
  };

  return Navi();
};

export default ExpertPage;
