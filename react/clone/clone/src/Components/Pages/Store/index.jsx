import { useLocation } from "react-router-dom";
import StoreTemplate from "../../Templates/Store";
import BestTemplate from "../../Templates/Store/best";
import CategoryTemplate from "../../Templates/Store/category";

const StorePage = () => {
  const location = useLocation();

  const Navi = () => {
    switch (location.pathname) {
      case "/store": {
        return <StoreTemplate />;
      }
      case "/store/category": {
        return <CategoryTemplate />;
      }
      case "/store/best": {
        return <BestTemplate />;
      }
      //no default
    }
  };

  return Navi();
};

export default StorePage;
