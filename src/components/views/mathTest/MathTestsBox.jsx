import { useEffect, useMemo, useState } from "react";
import TestItems from "../../testItems/TestItems";
import axios from "axios";
import { Button, ButtonGroup } from "rsuite";
import USER_URL from "../../../api";
import { Context } from "../../../context/Context";

let arr = new Array();

const numbers = new Array();
for (let i = 1; i <= 10; i++) {
  numbers.push(`${i}`);
}

const handleGroup = (value, event) => {
  console.log("render");
  if (numbers.includes(event.target.name)) {
    if (!arr.includes(event.target.name)) arr.push(event.target.name);
  }
  console.log(arr);
};

const MathTestBox = () => {
  const [data, setData] = useState([]);
  const [result, setResult] = useState(0);
  const [info, setInfo] = useState([]);
  const [isLoading, setLoading] = useState(false);

  const render = useMemo(() => {
    console.log("test");
  }, [arr]);

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
          .then((res) => setInfo(res.data));
      } catch (error) {
        console.error("Error fetching user", error);
      }
    };
    fetchUser();
  }, [privateToken]);

  useEffect(() => {
    const getData = async () => {
      await axios
        .get("http://localhost:4000/data")
        .then((res) => setData(res.data));
    };
    getData();
  }, []);

  const handleSubmit = async () => {
    try {
      await axios.put(`${USER_URL}/user/${info._id}`, {
        count: info.count + result,
      });
    } catch (error) {
      console.error(error);
    }

    window.location = "http://localhost:5173/test/matematika";
  };

  return (
    <Context.Provider value={{ result, setResult, handleGroup }}>
      <div>
        <div className="math__page-title">
          <p>Matematika bo`yicha bilimlaringizni sinab ko`ring</p>
        </div>
        {data.map((item) => (
          <div className="test__item" key={item.id}>
            <TestItems data={item} />
          </div>
        ))}
        <ButtonGroup style={{ display: "flex", justifyContent: "end" }}>
          {isLoading ? (
            <Button appearance="primary" color="green" loading>
              Yakunlash
            </Button>
          ) : (
            <Button
              appearance="primary"
              color="green"
              disabled={arr.length !== 10}
              onClick={() => {
                setTimeout(handleSubmit, 2000), setLoading(true);
              }}
            >
              Yakunlash
            </Button>
          )}
        </ButtonGroup>
      </div>
    </Context.Provider>
  );
};

export default MathTestBox;
