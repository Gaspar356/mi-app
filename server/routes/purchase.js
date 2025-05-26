const express = require('express');
const router = express.Router();
const { Purchase, User, Game, PurchaseGame } = require('../models');

router.get('/', async (req, res) => {
  const purchases = await Purchase.findAll({
    include: [
      { model: User },
      { model: Game }
    ]
  });
  res.json(purchases);
});

router.post('/', async (req, res) => {
  const { user_id, date, total, game_ids } = req.body;

  // Create purchase
  const purchase = await Purchase.create({ user_id, date, total });

  // Asociate games with purchase
  await purchase.setGames(game_ids);

  res.status(201).json(purchase);
});

module.exports = router;
