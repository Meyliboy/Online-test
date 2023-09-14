import { useEffect, useState } from "react";
import User from "../../user/User";
import axios from "axios";
import USER_URL from "../../../api";

const TopResult = () => {
  const [data, setData] = useState([]);
  const sortUsers = data.sort((a, b) => b.count - a.count);
  const resUser = sortUsers.filter((item) => item.count !== 0);

  useEffect(() => {
    const getUsers = async () => {
      await axios.get(`${USER_URL}/users`).then((res) => {
        setData(res.data);
      });
    };
    getUsers();
  }, []);
  return (
    <div className="top-list">
      <div className="top-list__title">
        <p>Peshqadamlar paneli 📊</p>
      </div>
      {data.length && resUser.length ? (
        resUser.map((item) => <User key={item._id} item={item} />)
      ) : (
        <div className="empty__text">Ma`lumotlar yo`q.</div>
      )}
    </div>
  );
};

export default TopResult;
