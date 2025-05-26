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

module.exports = router;
