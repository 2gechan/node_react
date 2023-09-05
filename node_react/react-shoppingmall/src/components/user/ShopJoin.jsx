const ShopJoin = ({ user, setUser }) => {
  const inputChangeHandler = (e) => {
    const { name, value } = e.target;
    setUser({ ...user, [name]: value });
    console.log(name, value);
  };

  return (
    <div className="main joinForm">
      <div className="join input">
        <label htmlFor="">아이디</label>
        <input
          type="text"
          placeholder="ID"
          name="u_id"
          onChange={inputChangeHandler}
        />
      </div>
      <div className="join input">
        <label htmlFor="">패스워드</label>
        <input
          type="password"
          placeholder="PASSWORD"
          name="u_password"
          onChange={inputChangeHandler}
        />
      </div>
      <div className="join input">
        <label htmlFor="">이름</label>
        <input
          type="text"
          placeholder="NAME"
          name="u_name"
          onChange={inputChangeHandler}
        />
      </div>
      <div className="join input">
        <label htmlFor="">전화번호</label>
        <input
          type="text"
          placeholder="PHONE NUMBER"
          name="u_tel"
          onChange={inputChangeHandler}
        />
      </div>
      <div className="join button">
        <button type="button">회원가입</button>
      </div>
    </div>
  );
};

export default ShopJoin;
