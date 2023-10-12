const { DataTypes } = require("sequelize");

// Not Finished
const GigModel = {
    idGig: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    description: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    createdAt: {
      type: DataTypes.DATETIME,
      allowNull: false,
    },
    price: {
      type: DataTypes.INTEGER,
      allowNull: false,
      default: 0,
    },
    deliveryDays: {
      type: DataTypes.STRING,
      allowNull: false,
      default: 0,
    }
  };

  module.exports = {
    initialize: (sequelize) => {
      this.model = sequelize.define("gig", GigModel);
    },
  
    createGig: (gig) => {
      return this.model.create(gig);
    }
};