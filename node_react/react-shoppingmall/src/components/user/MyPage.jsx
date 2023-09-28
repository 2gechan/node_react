import { useNavigate } from "react-router-dom";

const MyPage = (props) => {
  const navigate = useNavigate();
  const { currentUser, setCurrentUser, useEffect, axios } = props;

  useEffect(() => {
    const fetchData = async () => {
      const response = await axios.post("/session");
      const result = await response.data;

      if (!result) {
        navigate("/login");
      } else {
        const data = JSON.stringify(result);
        const login = JSON.parse(data);
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
      }
    };
    fetchData();
  }, []);

  return (
    <div>
      <div>
        <label>아이디</label>
        {currentUser.su_id}
      </div>
      <div>
        <label>패스워드</label>
        {currentUser.su_password}
      </div>
      <div>
        <label>이름</label>
        {currentUser.su_name}
      </div>
      <div>
        <label>전화번호</label>
        {currentUser.su_tel}
      </div>
      <div>
        <label>권한</label>
        {currentUser.su_role}
      </div>
      {currentUser.su_role === "판매자" ? (
        <button>상품 등록하기</button>
      ) : (
        <></>
      )}
    </div>
  );
};

export default MyPage;
