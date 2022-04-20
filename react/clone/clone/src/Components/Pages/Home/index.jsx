import { useLocation } from "react-router-dom";
import HomeTemplates from "../../Templates/Home";
import FollowTemplate from "../../Templates/Home/follow";
import PictureTemplate from "../../Templates/Home/picture";

const HomePage = () => {
  const location = useLocation();

  const Navi = () => {
    switch (location.pathname) {
      case "/": {
        return <HomeTemplates />;
      }
      case "/contents/follow": {
        return <FollowTemplate />;
      }
      case "/contents/picture": {
        return <PictureTemplate />;
      }
      //no default
    }
  };

  return Navi();
};

export default HomePage;
