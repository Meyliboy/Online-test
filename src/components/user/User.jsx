const User = ({ item }) => {
  return (
    <>
      <div className="top-list__user">
        <div>{item.count}</div>
        <div>
          <span>{item.name}</span>
          &nbsp;
          <span>{item.lastName}</span>
        </div>
      </div>
    </>
  );
};

export default User;
