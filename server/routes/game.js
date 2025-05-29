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

router.put('/:id', async (req, res) => {
  try {
    const game = await Game.findByPk(req.params.id);
    if (!game) {
      return res.status(404).json({ error: 'Game not found' });
    }
    await game.update(req.body);
    res.json(game);
  } catch (error) {
    res.status(500).json({ error: 'Internal server error' });
  }
});

router.delete('/:id', async (req, res) => {
  try {
    const game = await Game.findByPk(req.params.id);
    if (!game) {
      return res.status(404).json({ error: 'Game not found' });
    }
    await game.destroy();
    res.json({ message: 'Game deleted' });
  } catch (error) {
    res.status(500).json({ error: 'Internal server error' });
  }
});

module.exports = router;
