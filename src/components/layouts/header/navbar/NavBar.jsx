import { Button } from "rsuite";
import AdminIcon from "@rsuite/icons/Admin";
import logo from "../../../../assets/png/logo-org.png";
import App from "../../../../App";

const NavBar = () => {
  return (
    <nav className="navbar">
      <div className="navbar_logo-login">
        <a href={<App />}>
          <img width={200} src={logo} alt="logo" />
        </a>
        <div className="navbar_menu">
          <ul>
            <li>
              <a href="#">Testlar</a>
            </li>
            <li>
              <a href="#">Natijalar</a>
            </li>
            <li>
              <a href="#">Yangiliklar</a>
            </li>
            <li>
              <a href="#">Oliygohlar</a>
            </li>
            <li>
              <a href="#">Takliflar</a>
            </li>
            <li>
              <a href="#">Biz haqimizda</a>
            </li>
          </ul>
        </div>
        <div className="navbar_profile">
          <Button startIcon={<AdminIcon />}>Kirish</Button>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
