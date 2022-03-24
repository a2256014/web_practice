import { Link } from "react-router-dom";

const AboutTemplate = () => {
  return (
    <div>
      <h2>About</h2>
      <Link to="1">Post#1</Link>
      <Link to="2">Post#2</Link>
    </div>
  );
};

export default AboutTemplate;
