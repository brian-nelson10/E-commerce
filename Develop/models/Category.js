const { Model, DataTypes } = require('sequelize');

const sequelize = require('../config/connection.js');

class Category extends Model {}

Category.init(
  {
    // define columns
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
      allowNull: false
    },
    category_name: {
      type: DataTypes.STRING, 
      allowNull: false,
      validate: {
        len: [1]
      }
    },
    products: {
      type: DataTypes.STRING,
      allowNull: false,
      references: {
        model: 'product',
        key: 'id',
        
      }
    }
  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'category',
  }
);

module.exports = Category;
