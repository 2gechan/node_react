import { useState } from "react";
import { useNavigate } from "react-router-dom";

const LoginPage = () => {
  const navigate = useNavigate();
  const [loginUser, setLoginUser] = useState({});
  const loginInputChangeHandler = (e) => {
    const { name, value } = e.target;
    setLoginUser({ ...loginUser, [name]: value });

    console.log(name, value);
  };

  const loginButtonClickHandler = async () => {
    const res = await fetch("/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(loginUser),
    });
    try {
      if (res.status === 200) {
        const data = await res.json();
        console.log(data);
        console.log("로그인 성공");
        navigate("/");
      } else {
        console.log("로그인 실패");
      }
    } catch (error) {
      alert("로그인 정보를 확인하세요");
      console.log("로그인 실패 : ", error);
    }
  };

  return (
    <div>
      <h1>로그인페이지</h1>
      <div>
        <label>아이디</label>
        <input type="text" name="u_id" onChange={loginInputChangeHandler} />
      </div>
      <div>
        <label>패스워드</label>
        <input type="password" name="u_pw" onChange={loginInputChangeHandler} />
      </div>
      <div>
        <button type="button" onClick={loginButtonClickHandler}>
          로그인
        </button>
      </div>
    </div>
  );
};

export default LoginPage;
