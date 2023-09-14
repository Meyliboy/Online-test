import { NavLink } from "react-router-dom";
import { Button } from "rsuite";

const exist = JSON.parse(localStorage.getItem("oauth-token"));

const Test = () => {
  return (
    <div>
      <p style={{ textAlign: "center", margin: "10px 0" }}>Testlar ro`yhati</p>
      <div className="test">
        <span>3-sinf matematikasi</span>
        <NavLink to={"/test/matematika/123"}>
          <Button appearance="primary" color="green" disabled={!exist}>
            Boshlash
          </Button>
        </NavLink>
      </div>
    </div>
  );
};

export default Test;
