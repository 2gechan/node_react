import { useState } from "react";
import { useNavigate } from "react-router-dom";
// import axios from "axios";
const JoinPage = () => {
  const navigate = useNavigate();
  const [joinUser, setJoinUser] = useState({});
  const joinInputChangeHandler = (e) => {
    const { name, value } = e.target;
    setJoinUser({ ...joinUser, [name]: value });
    console.log(name, value);
  };

  const joinButtonClickHandler = async () => {
    try {
      const response = await fetch("/join", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(joinUser),
      });
      if (response.status === 200) {
        const data = await response.json();
        console.log(data);
        console.log("회원가입 성공");
        navigate("/");
      } else {
        console.log("실패");
      }
    } catch (error) {
      console.error("회원가입 중 오류 발생", error);
    }
  };

  return (
    <div className="main join">
      <h1>회원가입페이지</h1>
      <div className="input id">
        <label htmlFor="">아이디</label>
        <input type="" name="u_id" onChange={joinInputChangeHandler} />
      </div>
      <div className="input pw">
        <label htmlFor="">패스워드</label>
        <input type="" name="u_pw" onChange={joinInputChangeHandler} />
      </div>
      <div className="input tel">
        <label htmlFor="">전화번호</label>
        <input type="" name="u_tel" onChange={joinInputChangeHandler} />
      </div>
      <div className="input addr">
        <label htmlFor="">주소</label>
        <input type="" name="u_addr" onChange={joinInputChangeHandler} />
      </div>
      <div className="input email">
        <label htmlFor="">이메일</label>
        <input type="" name="u_email" onChange={joinInputChangeHandler} />
      </div>
      <div className="input name">
        <label htmlFor="">이름</label>
        <input type="" name="u_name" onChange={joinInputChangeHandler} />
      </div>
      <div className="input rnum">
        <label htmlFor="">주민등록번호</label>
        <input type="" name="u_rnum" onChange={joinInputChangeHandler} />
      </div>
      <div className="input button">
        <button type="button" onClick={joinButtonClickHandler}>
          회원가입
        </button>
      </div>
    </div>
  );
};

export default JoinPage;
