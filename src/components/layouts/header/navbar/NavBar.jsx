import { Button, ButtonToolbar, Dropdown, Form, Message, Schema } from "rsuite";
import ExitIcon from "@rsuite/icons/Exit";
import AdminIcon from "@rsuite/icons/Admin";
import MemberIcon from "@rsuite/icons/Member";
import ArrowDownIcon from "@rsuite/icons/ArrowDown";
import { useEffect, useState } from "react";
import axios from "axios";

import { NavLink } from "react-router-dom";
import logo from "../../../../assets/png/logo-org.png";
import USER_URL from "../../../../api";

const NavBar = () => {
  const [data, setData] = useState({});
  const [isLoading, setLoading] = useState(false);
  const [isLoadingReg, setLoadingReg] = useState(false);
  const [isValidate, setValidate] = useState(false);
  const [info, setInfo] = useState([]);

  const privateToken = JSON.parse(localStorage.getItem("oauth-token"));

  useEffect(() => {
    const fetchUser = async () => {
      try {
        await axios
          .get(`${USER_URL}/me`, {
            headers: {
              "x-auth-token": `${privateToken}`,
            },
          })
          .then((res) => setInfo(res.data.name));
      } catch (error) {
        console.error("Error fetching user", error);
      }
    };
    fetchUser();
  }, [privateToken]);

  const loginUser = async () => {
    try {
      await axios.post(`${USER_URL}/user/login`, data).then((res) => {
        console.log(res.data.access_token);
        setLoading(false);
        setValidate(false);

        localStorage.setItem(
          "oauth-token",
          JSON.stringify(res.data.access_token)
        );

        window.location.reload();
      });
    } catch (error) {
      setValidate(true);
      setLoading(false);
      setTimeout(() => {
        setValidate(false);
      }, 5000);
    }
  };
  function handleSubmit() {
    loginUser();
    setLoading(true);
  }

  const exist = JSON.parse(localStorage.getItem("oauth-token")) || [];
  function handleLogOut() {
    localStorage.clear();
    window.location.reload();
  }

  const { email, password } = data;
  const formValid = email && email.length && password && password.length > 5;

  const { StringType } = Schema.Types;
  const model = Schema.Model({
    email: StringType()
      // Checks for email format on default trigger
      .isEmail("Please enter a valid email address.")
      .isRequired("This field is required."),
    password: StringType().isRequired("This field is required.").minLength(6),
  });

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
          {!exist.length ? (
            <Dropdown
              toggleAs={Button}
              appearance="primary"
              placement="bottomEnd"
              color="green"
              icon={<AdminIcon />}
              title="Kirish &nbsp;"
              style={{ width: "110px" }}
              noCaret
            >
              <Dropdown.Item>
                <Form model={model} onChange={(e) => setData(e)}>
                  {isValidate && (
                    <Message type="error" style={{ color: "red" }}>
                      Bunday foydalanuvchi mavjud emas.
                    </Message>
                  )}
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
                    <Form.HelpText tooltip>Password is required</Form.HelpText>
                  </Form.Group>
                  <Form.Group>
                    <ButtonToolbar>
                      {isLoading ? (
                        <Button
                          appearance="primary"
                          type="submit"
                          color="green"
                          block
                          loading
                        >
                          Kirish
                        </Button>
                      ) : (
                        <Button
                          appearance="primary"
                          type="submit"
                          color="green"
                          block
                          onClick={handleSubmit}
                          disabled={!formValid}
                        >
                          Kirish
                        </Button>
                      )}
                      {isLoadingReg ? (
                        <Button appearance="primary" block loading>
                          Ro`yhatdan o`tish
                        </Button>
                      ) : (
                        <Button
                          appearance="primary"
                          block
                          onClick={() => {
                            setTimeout(
                              (window.location =
                                "http://localhost:5173/register"),
                              2000
                            ),
                              setLoadingReg(true);
                          }}
                        >
                          Ro`yhatdan o`tish
                        </Button>
                      )}
                    </ButtonToolbar>
                    <p>
                      <a href="#">Parolni unutdingizmi?</a>
                    </p>
                  </Form.Group>
                </Form>
              </Dropdown.Item>
            </Dropdown>
          ) : (
            <Dropdown
              title={info.length ? info : "Profile"}
              noCaret
              style={{ width: "110px" }}
              toggleAs={Button}
              placement="bottomEnd"
              icon={<MemberIcon />}
            >
              <Dropdown.Item>Akkauntni tahrirlash</Dropdown.Item>
              <Dropdown.Item>Sozlamalar</Dropdown.Item>
              <Dropdown.Item onClick={handleLogOut}>
                <NavLink to={"/"} style={{ color: "#575757" }}>
                  Chiqish &nbsp; <ExitIcon />
                </NavLink>
              </Dropdown.Item>
            </Dropdown>
          )}
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
