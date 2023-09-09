import {
  Form,
  ButtonToolbar,
  Button,
  Checkbox,
  Placeholder,
  Modal,
  RadioGroup,
  Radio,
} from "rsuite";

import { NavLink } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";

const Register = () => {
  const [isForm, setForm] = useState("");
  const [data, setData] = useState([]);
  const [open, setOpen] = useState(false);

  const handleClose = () => setOpen(false);

  function handleSubmit() {
    setData(isForm);
    console.log(data);

    /* Modal */
    setOpen(true);

    /* render Page */
    // window.location.reload();
  }

  useEffect(() => {
    const createUser = async () => {
      await axios
        .post("http://localhost:5000/api/user/register", data)
        .then((res) => console.log(res));
    };
    createUser();
    console.log("render");
  }, [data]);
  const styles = {
    radioGroupLabel: {
      padding: "8px 12px",
      display: "inline-block",
      verticalAlign: "middle",
    },
  };

  return (
    <>
      <div className="login__title">BANNER</div>
      <Modal keyboard={false} open={open} onClose={handleClose}>
        <Modal.Body style={{ color: "green" }}>
          Ro'yhatga olish muvafiyaqatli qugadi! 👍
        </Modal.Body>
        <Modal.Footer>
          <Button onClick={handleClose} appearance="primary">
            Ok
          </Button>
          <Button onClick={handleClose} appearance="subtle">
            Cancel
          </Button>
        </Modal.Footer>
      </Modal>
      <div className="login__wrapper">
        <div className="login__container">
          <div className="form__title">Ro'yhatdan o'tish</div>
          <Form fluid onChange={(e) => setForm(e)}>
            <Form.Group controlId="name-1">
              <Form.Control name="name" placeholder="Ism" required />
            </Form.Group>
            <Form.Group controlId="name-2">
              <Form.Control name="lastName" placeholder="Familiya" required />
            </Form.Group>
            <Form.Group controlId="email-1">
              <Form.Control
                name="email"
                type="email"
                placeholder="Email"
                required
              />
              <Form.HelpText>Required</Form.HelpText>
            </Form.Group>
            <Form.Group controlId="password-1" className="last-input">
              <Form.Control
                name="password"
                type="password"
                autoComplete="off"
                placeholder="Parol"
                required
              />
            </Form.Group>
            <div className="securyt-text">
              <Checkbox style={{ fontSize: "12px" }} /> Saytdan{" "}
              <a href="#">foydalanish shartlariga</a> roziman
            </div>
            <Form.Group>
              <ButtonToolbar>
                <div className="login__btns">
                  <Button
                    as={"button"}
                    appearance="primary"
                    type="submit"
                    onClick={handleSubmit}>
                    Ro'yhatdan o'tish
                  </Button>
                  <NavLink to={"/login"}>
                    <Button appearance="primary" color="green">
                      Kirish
                    </Button>
                  </NavLink>
                </div>
              </ButtonToolbar>
            </Form.Group>
          </Form>
        </div>
      </div>
    </>
  );
};

export default Register;
