import { Button, Form, Message, Schema } from "rsuite";
import { NavLink } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";
import USER_URL from "../../api/index";

const LogIn = () => {
  const [data, setData] = useState({});
  const [isLoading, setLoading] = useState(false);
  const [isValidate, setValidate] = useState(false);

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
      console.error(error);
    }
  };

  const auth_token = JSON.parse(localStorage.getItem("oauth-token"));

  useEffect(() => {
    const getUser = async () => {
      await axios
        .get(`${USER_URL}/me`, {
          headers: {
            "x-auth-token": JSON.parse(localStorage.getItem("oauth-token")),
          },
        })
        .then((res) => console.log(res));
    };
    getUser();
  }, [auth_token]);

  function handleSubmit() {
    loginUser();
    setLoading(true);
  }
  return (
    <div>
      <div className="login__title">BANNER</div>
      <div className="login__wrapper">
        <div className="login__container">
          <div className="form__title">KIRISH</div>
          {isValidate && (
            <Message
              style={{ marginBottom: "10px", color: "red" }}
              type="error"
            >
              Eamil yoki parol xato kiritilgan.
            </Message>
          )}

          <Form fluid onChange={(e) => setData(e)} model={model}>
            <Form.Group controlId="email">
              <Form.ControlLabel>Email</Form.ControlLabel>
              <Form.Control name="email" type="email" placeholder="Email:" />
            </Form.Group>
            <Form.Group controlId="password">
              <Form.ControlLabel>Password</Form.ControlLabel>
              <Form.Control
                name="password"
                type="password"
                autoComplete="off"
                placeholder="Parol:"
              />
            </Form.Group>

            <Form.Group>
              <div className="login__btns">
                {isLoading ? (
                  <Button appearance="primary" color="green" loading>
                    Kirish
                  </Button>
                ) : (
                  <Button
                    appearance="primary"
                    color="green"
                    onClick={handleSubmit}
                    disabled={!formValid}
                  >
                    Kirish
                  </Button>
                )}
                <NavLink to={"/register"}>
                  <Button appearance="primary">Ro`yhatdan o`tish</Button>
                </NavLink>
              </div>
            </Form.Group>
          </Form>
        </div>
      </div>
    </div>
  );
};

export default LogIn;
