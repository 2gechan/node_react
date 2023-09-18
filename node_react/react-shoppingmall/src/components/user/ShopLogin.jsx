import { useNavigate } from "react-router-dom";

const ShopLogin = (props) => {
  const navigate = useNavigate();
  const { axios, useState, setCurrentUser } = props;
  const [loginUser, setLoginUser] = useState({});

  const loginInputChangeHandler = (e) => {
    const { name, value } = e.target;
    setLoginUser({ ...loginUser, [name]: value });
    console.log(name, value);
  };

  const loginButtonClickHandler = async (e) => {
    // console.log(loginUser);
    const response = await axios.post("/login", loginUser);

    if (response.status === 200) {
      // console.log("서버 데이터 전송");

      if (!response.data) {
        alert("아이디, 패스워드를 확인하세요");
        return;
      } else {
        // console.log(response.data);
        const strResult = JSON.stringify(response.data);
        const login = JSON.parse(strResult);
        const settingUser = (login) => {
          return setCurrentUser({
            user_id: login.user_id,
            user_password: login.user_password,
            user_name: login.user_name,
            user_tel: login.user_tel,
          });
        };
        await settingUser(login);
        // console.log(currentUser);
        navigate("/");
      }
    }
  };

  return (
    <div className="main login">
      <div className="login id">
        <input
          type="text"
          placeholder="아이디"
          name="user_id"
          onChange={loginInputChangeHandler}
        />
      </div>
      <div className="login pwd">
        <input
          type="text"
          placeholder="비밀번호"
          name="user_password"
          onChange={loginInputChangeHandler}
        />
      </div>
      <div className="login button">
        <button onClick={loginButtonClickHandler}>로그인</button>
        <button>회원가입</button>
      </div>
    </div>
  );
};

export default ShopLogin;
