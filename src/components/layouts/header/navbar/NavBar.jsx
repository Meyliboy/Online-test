import { Button } from "rsuite";
import AdminIcon from "@rsuite/icons/Admin";
import logo from "../../../../assets/png/logo-org.png";
import { NavLink } from "react-router-dom";

const NavBar = () => {
  return (
    <nav className="navbar">
      <div className="navbar__logo-login">
        <NavLink to={"/"}>
          <img width={200} src={logo} alt="logo" />
        </NavLink>
        <div className="navbar__menu">
          <ul>
            <li className="test__link">
              <NavLink to={"/test"}>
                Testlar
                <div className="test__category-box">
                  <NavLink className="category-link" to={"/test/matematika"}>
                    Matematika
                  </NavLink>
                  <NavLink className="category-link" to={"/test/onatili"}>
                    Onatili
                  </NavLink>
                  <NavLink className="category-link" to={"/test/tarix"}>
                    Tarix
                  </NavLink>
                </div>
              </NavLink>
            </li>
            <li>
              <NavLink to={"/results"}>Natijalar</NavLink>
            </li>
            <li>
              <NavLink to={"/news"}>Yangiliklar</NavLink>
            </li>
            <li>
              <NavLink to={"/universities"}>Oliygohlar</NavLink>
            </li>
            <li>
              <NavLink to={"/aboutas"}>Biz haqimizda</NavLink>
            </li>
            <li>
              <NavLink className="last-link" to={"/suggestions"}>
                Takliflar
              </NavLink>
            </li>
          </ul>
        </div>
        <div className="navbar_profile">
          <Button color="green" appearance="primary" startIcon={<AdminIcon />}>
            Kirish
          </Button>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
