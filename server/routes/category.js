const express = require('express');
const router = express.Router();
const { Category } = require('../models');

router.get('/', async (req, res) => {
  const categories = await Category.findAll();
  res.json(categories);
});

router.post('/', async (req, res) => {
  const category = await Category.create(req.body);
  res.status(201).json(category);
});

module.exports = router;
