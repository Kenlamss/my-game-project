'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class QnA extends Model {
    static associate(models) {
      this.belongsTo(models.Theme, { foreignKey: 'themeId' })
      this.hasMany(models.userAnswer, { foreignKey: 'questionId' })
    }


  }
  QnA.init({
    themeId: DataTypes.INTEGER,
    question: DataTypes.TEXT,
    answer: DataTypes.STRING,
    price: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'QnA',
  });
  return QnA;
};