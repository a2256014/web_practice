import { useNavigate, useParams } from "react-router-dom";

const AboutPostTemplate = () => {
  let location = useNavigate();
  const _id = useParams();
  console.log(_id);

  const onClick = () => {
    location("/");
  };
  return _id.name === "1" ? (
    <div>
      <h2>AboutPost #1</h2>
      <button onClick={onClick}>Go Home</button>
    </div>
  ) : (
    <div>
      <h2>AboutPost #2</h2>
      <button onClick={onClick}>Go Home</button>
    </div>
  );
};

export default AboutPostTemplate;
