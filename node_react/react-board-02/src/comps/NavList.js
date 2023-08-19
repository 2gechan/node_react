import { Link } from "react-router-dom";
const NavList = () => {
  return (
    <nav>
      <Link to="/PAGE1">PAGE1로 이동</Link>
      <Link to="/PAGE2">PAGE2로 이동</Link>
    </nav>
  );
};
export default NavList;
