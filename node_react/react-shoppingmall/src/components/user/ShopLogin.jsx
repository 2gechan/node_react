import { useNavigate } from "react-router-dom";
import { setCurruntUser } from "../../store/curruntUserSlice";
import { useDispatch, useSelector } from "react-redux";

const ShopLogin = (props) => {
  const curruntUser = useSelector((state) => state.curruntUser.curruntUser);

  const dispatch = useDispatch();

  const navigate = useNavigate();
  const { axios, useState, setCurrentUser } = props;
  const [loginUser, setLoginUser] = useState({});

  const loginInputChangeHandler = (e) => {
    const { name, value } = e.target;
    setLoginUser({ ...loginUser, [name]: value });
    console.log(name, value);
  };

  const loginButtonClickHandler = async (e) => {
    console.log(loginUser);
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
            su_id: login.su_id,
            su_password: login.su_password,
            su_name: login.su_name,
            su_tel: login.su_tel,
            su_role: login.su_role,
          });
        };
        await settingUser(login);
        dispatch(setCurruntUser(login));

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
          name="su_id"
          onChange={loginInputChangeHandler}
        />
      </div>
      <div className="login pwd">
        <input
          type="text"
          placeholder="비밀번호"
          name="su_password"
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
