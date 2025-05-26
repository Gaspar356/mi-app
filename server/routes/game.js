const express = require('express');
const router = express.Router();
const { Game, Category } = require('../models');

router.get('/', async (req, res) => {
  const games = await Game.findAll({ include: Category });
  res.json(games);
});

router.post('/', async (req, res) => {
  const game = await Game.create(req.body);
  res.status(201).json(game);
});

module.exports = router;
