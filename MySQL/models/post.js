const { DataTypes, Model } = require('sequelize');
let dbConnect = require('../dbConnect');

const sequelizeInstance = dbConnect.Sequelize;

class Post extends Model {}

Post.init(
  {
    postID: {
      type: DataTypes.INTEGER,
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
    },
    userID: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    title: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    description: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
    imageURL: {
      type: DataTypes.STRING,
      allowNull: true, 
    },

  },
  {
    sequelize: sequelizeInstance,
    modelName: 'posts',
    timestamps: true, 
    freezeTableName: true,
  }
);

module.exports = Post;