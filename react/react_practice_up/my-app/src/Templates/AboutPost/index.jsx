import { useParams } from "react-router-dom";

const AboutPostTemplate = () => {
  const _id = useParams();

  return _id.id === "1" ? (
    <div>
      <h2>AboutPost #1</h2>
    </div>
  ) : (
    <div>
      <h2>AboutPost #2</h2>
    </div>
  );
};

export default AboutPostTemplate;
