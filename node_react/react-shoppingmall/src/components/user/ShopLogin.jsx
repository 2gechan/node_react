const ShopLogin = () => {
  return (
    <div className="main login">
      <div className="login id">
        <input type="text" placeholder="아이디" />
      </div>
      <div className="login pwd">
        <input type="text" placeholder="비밀번호" />
      </div>
      <div className="login button">
        <button>로그인</button>
        <button>회원가입</button>
      </div>
    </div>
  );
};

export default ShopLogin;
