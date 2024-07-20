import "../components/Header.css";
import testImage from "../assets/logo_practise_react.png";

function Header() {
  return (
    <div className="header">
      <img className="header__logo" src={testImage} alt="imagen de prueba" />
      <h1 className="header__title ">Hello Vite!</h1>
    </div>
  );
}

export default Header;
