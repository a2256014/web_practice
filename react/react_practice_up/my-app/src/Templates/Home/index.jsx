import { Link } from "react-router-dom";
import LoginPage from "../../Pages/LoginPage";

const HomeTemplate = () => {
  return (
    <div>
      <h2>Home</h2>
      <LoginPage />
      <Link to="/about">About</Link>
    </div>
  );
};

export default HomeTemplate;
