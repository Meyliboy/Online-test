export default function isFormValid() {
  const formValid =
    name &&
    name.length &&
    lastName &&
    lastName.length &&
    email &&
    email.length &&
    password &&
    password.length > 5;

  return formValid;
}
