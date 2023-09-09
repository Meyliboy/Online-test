import { Form, ButtonToolbar, Button, Checkbox } from "rsuite";

const Register = () => {
  return (
    <div>
      <div className="login__title">BANNER</div>
      <div className="login__wrapper">
        <div className="login__container">
          <div className="form__title">Ro'yhatdan o'tish</div>
          <Form fluid>
            <Form.Group controlId="name-1">
              <Form.Control name="name" placeholder="Ism" />
            </Form.Group>
            <Form.Group controlId="name-2">
              <Form.Control name="lastName" placeholder="Familiya" />
            </Form.Group>
            <Form.Group controlId="email-1">
              <Form.Control name="email" type="email" placeholder="Email" />
              <Form.HelpText>Required</Form.HelpText>
            </Form.Group>
            <Form.Group controlId="password-1" className="last-input">
              <Form.Control
                name="password"
                type="password"
                autoComplete="off"
                placeholder="Parol"
              />
            </Form.Group>
            <div className="securyt-text">
              <Checkbox /> Saytdan <a href="#">foydalanish shartlariga</a>{" "}
              roziman
            </div>
            <Form.Group>
              <ButtonToolbar>
                <Button appearance="primary">Submit</Button>
                <Button appearance="default">Cancel</Button>
              </ButtonToolbar>
            </Form.Group>
          </Form>
        </div>
      </div>
    </div>
  );
};

export default Register;
