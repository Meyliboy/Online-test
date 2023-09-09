import { Button, Form, Message } from "rsuite";
import { NavLink } from "react-router-dom";

const LogIn = () => {
  return (
    <div>
      <div className="login__title">BANNER</div>
      <div className="login__wrapper">
        <div className="login__container">
          <div className="form__title">KIRISH</div>
          <Message style={{ marginBottom: "10px", color: "red" }} type="error">
            Eamil yoki parol xato kiritilgan
          </Message>
          <Form fluid>
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
                <Button appearance="primary" color="green">
                  Kirish
                </Button>
                <NavLink to={"/register"}>
                  <Button appearance="primary">Ro'yhatdan o'tish</Button>
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
