import { useLocation, Link } from "react-router-dom";

const CustomButton = () => {
  const location = useLocation();

  const buttonConfig = {
    "/": {
      text: "Daha Fazla Öğren",
      target: "/resume",
    },
    "/resume": {
      text: "Hakkımda",
      target: "/aboutme",
    },
    "/aboutme": {
      text: "Projelerim",
      target: "/project",
    },
    "/project": {
      text: "İletişim",
      target: "/contact",
    },
    "/contact": {
      text: "Ana Sayfa",
      target: "/",
    },
  };

  const { text = "Devamını Gör", target = "/" } =
    buttonConfig[location.pathname] || {};

  return (
    <Link to={target} className="btn btn-outline-dark">
      {text}
    </Link>
  );
};

export default CustomButton;
