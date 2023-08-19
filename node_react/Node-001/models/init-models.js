import _tbl_board from "./tbl_board.js";
import _tbl_users from "./tbl_users.js";

const initModels = (sequelize) => {
  const tbl_board = _tbl_board(sequelize);
  const tbl_users = _tbl_users(sequelize);

  return {
    tbl_board,
    tbl_users,
  };
};
export default initModels;
