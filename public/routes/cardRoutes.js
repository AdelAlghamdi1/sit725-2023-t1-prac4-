const express = require('express');
const Card = require('../models/cards');

const router = express.Router();


router.get('/', async (req, res) => {
  try {
    const cards = await Card.find();
    res.json(cards);
  } catch (error) {
    res.status(500).send("Error fetching cards: " + error);
  }
});

router.post('/', async (req, res) => {
  const card = new Card({
    title: req.body.title,
    image: req.body.image,
    link: req.body.link,
    description: req.body.description
  });

  try {
    const savedCard = await card.save();
    res.json(savedCard);
  } catch (error) {
    res.status(400).send("Error saving card: " + error);
  }
});

module.exports = router;
