const express = require('express');
const { QnA, Theme, userAnswer, Game } = require('../../../db/models');

const apiGamesRouter = express.Router();

apiGamesRouter.post('/setgame', async (req, res) => {
  try {
    const game = await Theme.findAll({ include: [QnA] });
    res.status(200).json(game);
  } catch (error) {
    console.log(error, 'Ошибка на стадии рендеринга игры');
  }
});

apiGamesRouter.post('/checkanswer', async (req, res) => {
  try {
    const { usersAnswer, id } = req.body;
    const currentQuestion = await QnA.findOne({ where: { id: id } });
    if (usersAnswer === currentQuestion.answer) {
      const newUserAnswer = await userAnswer.create({
        gameId: currentQuestion.gameId,
        questionId: currentQuestion.id,
        correct: true,
      });
      res.status(200).json(newUserAnswer);
    } else {
      const newUserAnswer = await userAnswer.create({
        gameId: currentQuestion.gameId,
        questionId: currentQuestion.id,
        correct: false,
      });
      res.status(200).json(newUserAnswer);
    }
  } catch (error) {
    console.log(error, 'Ошибка на checkanswer на бэке');
  }
});

apiGamesRouter.post('/endgame', async (req, res) => {
  try {
    await Game.create({
      userId: req.session.user.id,
      finished: false,
    });
    res.status(200);
  } catch (error) {
    console.log(error, 'Ошибка на стадии записи новой сущности в Games BD');
  }
});

module.exports = apiGamesRouter;
