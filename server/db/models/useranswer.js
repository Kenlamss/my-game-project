'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class userAnswer extends Model {
    static associate(models) {
      this.belongsTo(models.Game, {foreignKey:'gameId'})
      this.belongsTo(models.QnA, {foreignKey:'questionId'})
    }
  }
  userAnswer.init({
    gameId: DataTypes.INTEGER,
    questionId: DataTypes.INTEGER,
    correct: DataTypes.BOOLEAN
  }, {
    sequelize,
    modelName: 'userAnswer',
  });
  return userAnswer;
};