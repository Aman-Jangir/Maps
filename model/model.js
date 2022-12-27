const sequelize = require("sequelize");

module.exports = (sequelize, DataTypes) => {
    const user = sequelize.define("lat_Lng",
      {Address:{type: DataTypes.STRING, allowNull: false} ,
      Latitude: {type: DataTypes.FLOAT, allowNull: true},
      Longitude: {type: DataTypes.FLOAT, allowNull: true}
    },
      { timestamps: false }
      );
    return user;
  };