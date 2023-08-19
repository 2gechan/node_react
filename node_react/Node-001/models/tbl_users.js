import Sequelize from "sequelize";
export default function (sequelize) {
  return sequelize.define(
    "tbl_users",
    {
      u_id: {
        type: Sequelize.DataTypes.STRING(25),
        allowNull: false,
        primaryKey: true,
      },
      u_password: {
        type: Sequelize.DataTypes.STRING(125),
        allowNull: false,
      },
      u_name: {
        type: Sequelize.DataTypes.STRING(125),
        allowNull: false,
      },
      u_tel: {
        type: Sequelize.DataTypes.STRING(15),
        allowNull: false,
      },
      u_addr: {
        type: Sequelize.DataTypes.STRING(125),
        allowNull: true,
      },
    },
    {
      sequelize,
      tableName: "tbl_users",
      timestamps: false,
      indexes: [
        {
          name: "PRIMARY",
          unique: true,
          using: "BTREE",
          fields: [{ name: "u_id" }],
        },
      ],
    }
  );
}
