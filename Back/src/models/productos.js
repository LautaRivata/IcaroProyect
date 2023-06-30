const { DataTypes } = require("sequelize");
const { sequelize } = require("../libs/index");

const Producto = sequelize.define("productos", {
  idproductos: {
    type: DataTypes.BIGINT,
    primaryKey: true,
    autoIncrement: true,
  },
  titulo: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  descripcion: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  precio: {
    type: DataTypes.BIGINT,
    allowNull: false,
  },
  imagen: {
    type: DataTypes.STRING,
    allowNull: true,
  },
});
