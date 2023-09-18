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
            user_id: login.user_id,
            user_password: login.user_password,
            user_name: login.user_name,
            user_tel: login.user_tel,
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
        {currentUser.user_id}
      </div>
      <div>
        <label>패스워드</label>
        {currentUser.user_password}
      </div>
      <div>
        <label>이름</label>
        {currentUser.user_name}
      </div>
      <div>
        <label>전화번호</label>
        {currentUser.user_tel}
      </div>
    </div>
  );
};

export default MyPage;
