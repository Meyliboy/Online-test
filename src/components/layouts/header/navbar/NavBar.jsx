import { Button, ButtonToolbar, Dropdown, Form } from "rsuite";
import AdminIcon from "@rsuite/icons/Admin";
import ArrowDownIcon from "@rsuite/icons/ArrowDown";
import { NavLink } from "react-router-dom";
import logo from "../../../../assets/png/logo-org.png";

const NavBar = () => {
  return (
    <nav className="navbar">
      <div className="navbar__logo-login">
        <NavLink to={"/"}>
          <img width={150} src={logo} alt="logo" />
        </NavLink>
        <div className="navbar__menu">
          <ul>
            <li className="test__link">
              <NavLink to={"/test"}>
                Testlar &nbsp; <ArrowDownIcon />
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
        <div className="navbar__profile">
          <Dropdown
            toggleAs={Button}
            appearance="primary"
            placement="bottomEnd"
            color="green"
            icon={<AdminIcon />}
            title="Kirish"
          >
            <Dropdown.Item>
              <Form>
                <Form.Group controlId="email">
                  <Form.ControlLabel>Email</Form.ControlLabel>
                  <Form.Control
                    name="email"
                    type="email"
                    placeholder="Email:"
                  />
                  <Form.HelpText tooltip>Email is required</Form.HelpText>
                </Form.Group>
                <Form.Group controlId="password">
                  <Form.ControlLabel>Parol</Form.ControlLabel>
                  <Form.Control
                    name="password"
                    type="password"
                    autoComplete="off"
                    placeholder="Parol:"
                  />
                </Form.Group>
                <Form.Group>
                  <ButtonToolbar>
                    <NavLink style={{ width: "100%" }} to={"/login"}>
                      <Button
                        appearance="primary"
                        type="submit"
                        color="green"
                        block
                      >
                        Kirish
                      </Button>
                    </NavLink>
                    <NavLink style={{ width: "100%" }} to={"/register"}>
                      <Button appearance="primary" type="submit" block>
                        Ro'yhatdan o'tish
                      </Button>
                    </NavLink>
                  </ButtonToolbar>
                  <p>
                    <a href="#">Parolni unutdingizmi?</a>
                  </p>
                </Form.Group>
              </Form>
            </Dropdown.Item>
          </Dropdown>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
