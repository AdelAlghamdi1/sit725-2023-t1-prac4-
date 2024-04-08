const mongoose = require('mongoose');

const cardSchema = new mongoose.Schema({
    title: String,
    image: String,
    link: String,
    description: String
});

const Card = mongoose.model('Card', cardSchema);

module.exports = Card;
