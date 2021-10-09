import { Link } from "react-router-dom";

const Title = ({ ...props }) => {
  return (
    <>
      <div className="about-title">
        <Link to="/" className="about-title__link">
          Home
        </Link>
        <div className="about-title-text">{props.page}</div>
      </div>
    </>
  );
};

export default Title;
