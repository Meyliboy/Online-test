import { Form, ButtonToolbar, Button, Modal, Schema } from "rsuite";

import { NavLink } from "react-router-dom";
import { useState } from "react";
import axios from "axios";
import USER_URL from "../../api/index";

const Register = () => {
  const [isForm, setForm] = useState({});
  const [open, setOpen] = useState(false);
  const [isEmailValidate, setEmailValidate] = useState(false);
  const [isLoadingBtn, setLoadingBtn] = useState(false);

  const { StringType } = Schema.Types;
  const model = Schema.Model({
    name: StringType().isRequired("This field is required."),
    lastName: StringType().isRequired("This field is required."),
    email: StringType()
      // Checks for email format on default trigger
      .isEmail("Please enter a valid email address.")
      .isRequired("This field is required."),
    password: StringType().isRequired("This field is required.").minLength(6),
  });

  const { name, lastName, email, password } = isForm;
  const formValid =
    name &&
    name.length &&
    lastName &&
    lastName.length &&
    email &&
    email.length &&
    password &&
    password.length > 5;

  const handleClose = () => {
    setOpen(false);
    window.location.reload();
  };

  function handleSubmit() {
    setLoadingBtn(true);
    createUser();
  }

  const createUser = async () => {
    await axios
      .post(`${USER_URL}/user/register`, isForm)
      .then((res) => {
        console.log(res);
        if (res.status >= 200) {
          setLoadingBtn(false);
          setOpen(true);
          // window.location = "http://localhost:5173/";
          setTimeout(() => {
            window.location = "http://localhost:5173/";
          }, 3500);
        }
      })
      .catch((error) => {
        switch (error.response.data.message) {
          case "This email is available in the database":
            setEmailValidate(true);
            setLoadingBtn(false);
            break;
          default:
            break;
        }
      });
  };

  return (
    <>
      <div className="login__title">BANNER</div>
      <Modal keyboard={false} open={open} onClose={handleClose}>
        <Modal.Body style={{ color: "green", fontSize: "13px" }}>
          Ro`yhatga olish muvafiyaqatli bo`ldi! 👍
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
          <div className="form__title">Ro`yhatdan o`tish</div>
          <Form fluid onChange={(e) => setForm(e)} model={model}>
            <Form.Group controlId="name-1">
              <Form.Control name="name" placeholder="Ism" />
            </Form.Group>
            <Form.Group controlId="name-2">
              <Form.Control name="lastName" placeholder="Familiya" />
            </Form.Group>
            <Form.Group controlId="email-1">
              {isEmailValidate && (
                <Form.ControlLabel className="validate-text">
                  Bunday Email ro`yhatdan o`tgan.
                </Form.ControlLabel>
              )}
              <Form.Control name="email" type="email" placeholder="Email" />
              <Form.HelpText>Majburiy</Form.HelpText>
            </Form.Group>
            <Form.Group controlId="password-1" className="last-input">
              <Form.Control
                name="password"
                type="password"
                autoComplete="off"
                placeholder="Parol"
              />
            </Form.Group>

            <Form.Group>
              <ButtonToolbar>
                <div className="login__btns">
                  {isLoadingBtn ? (
                    <Button as={"button"} appearance="primary" loading>
                      Ro`yhatdan o`tish
                    </Button>
                  ) : (
                    <Button
                      as={"button"}
                      appearance="primary"
                      type="submit"
                      onClick={handleSubmit}
                      disabled={!formValid}
                    >
                      Ro`yhatdan o`tish
                    </Button>
                  )}
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
