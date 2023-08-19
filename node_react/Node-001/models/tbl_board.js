import Sequelize from "sequelize";
export default function (sequelize) {
  return sequelize.define(
    "tbl_board",
    {
      b_seq: {
        autoIncrement: true,
        type: Sequelize.DataTypes.BIGINT,
        allowNull: false,
        primaryKey: true,
      },
      b_uid: {
        type: Sequelize.DataTypes.STRING(25),
        allowNull: true,
      },
      b_title: {
        type: Sequelize.DataTypes.STRING(125),
        allowNull: true,
      },
      b_content: {
        type: Sequelize.DataTypes.STRING(1000),
        allowNull: true,
      },
      b_nickname: {
        type: Sequelize.DataTypes.STRING(125),
        allowNull: true,
      },
      b_date: {
        type: Sequelize.DataTypes.STRING(10),
        allowNull: true,
      },
      b_viewcount: {
        type: Sequelize.DataTypes.TEXT,
        allowNull: true,
      },
    },
    {
      sequelize,
      tableName: "tbl_board",
      timestamps: false,
      indexes: [
        {
          name: "PRIMARY",
          unique: true,
          using: "BTREE",
          fields: [{ name: "b_seq" }],
        },
      ],
    }
  );
}
