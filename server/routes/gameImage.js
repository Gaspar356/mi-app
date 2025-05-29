const express = require('express');
const router = express.Router();
const { GameImage, Game } = require('../models');

router.post('/', async (req, res) => {
  const { game_id, image_url } = req.body;
  const image = await GameImage.create({ game_id, image_url });
  res.status(201).json(image);
});

router.get('/:gameId', async (req, res) => {
  const images = await GameImage.findAll({ where: { game_id: req.params.gameId } });
  res.json(images);
});

router.delete('/:id', async (req, res) => {
  const { id } = req.params;
  const deleted = await GameImage.destroy({ where: { id } });
  if (deleted) {
    res.status(204).send();
  } else {
    res.status(404).json({ error: 'Image not found' });
  }
});

module.exports = router;
