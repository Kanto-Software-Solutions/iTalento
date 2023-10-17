const { DataTypes } = require("sequelize");

const UserModel = {
  idUser: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  },
  names: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  lastNames: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  email: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  isVerified: {
    type: DataTypes.BOOLEAN,
    allowNull: false,
    default: false,
  },
  nickname: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  profileImage: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  isFreelancer: {
    type: DataTypes.BOOLEAN,
    allowNull: false,
    default: false,
  },
  birthDate: {
    type: DataTypes.DATE,
    allowNull: true,
  },
  country: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  acceptedTerms: {
    type: DataTypes.BOOLEAN,
    allowNull: false,
    default: false,
  },
  personaId: {
    type: DataTypes.INTEGER,
    allowNull: true,
  }
};

module.exports = {
    initialize: (sequelize) => {
      this.model = sequelize.define("User", UserModel);
    },
  
    createUser: (user) => {
      return this.model.create(user);
    }
};