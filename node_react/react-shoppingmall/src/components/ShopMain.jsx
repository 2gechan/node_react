const ShopMain = (props) => {
  const { useEffect } = props;
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("/hello", {
          method: "POST",
        });

        if (!response.data) {
          // console.log("로그인 정보 없음");
        } else {
          // console.log(response.data);
        }
      } catch (error) {
        console.error("에러 발생:", error);
      }
    };

    fetchData();
  }, []);
  return (
    <div>
      <h1>쇼핑몰 메인화면</h1>
    </div>
  );
};

export default ShopMain;
