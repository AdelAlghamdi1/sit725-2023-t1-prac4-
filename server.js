require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const Card = require('./public/models/cards');
const app = express();
const port = process.env.PORT || 3001

;

app.use(express.static(__dirname + '/public'));
app.use(express.urlencoded({ extended: false }));

mongoose.connect(process.env.MONGODB_URI)
    .then(() => console.log('MongoDB Connected'))
    .catch(err => console.error(err));

Card.insertMany([
    {
        title: "Kitten 1",
        image: "images/cat1.png",
        link: "#",
        description: "Meet our first adorable kitten!"
    },
    {
        title: "Kitten 2",
        image: "images/cat2.png",
        link: "#",
        description: "Here's our second beautiful kitten!"
    },
    {
        title: "Kitten 3",
        image: "images/cat3.png",
        link: "#",
        description: "And finally, our third charming kitten!"
    }
]).then(() => {
    console.log('Sample card data inserted into MongoDB');
}).catch(err => {
    console.error('Error inserting sample card data into MongoDB:', err);
});


app.get('/api/card', async (req, res) => {
    try {
        const cards = await Card.find();
        res.json({ statusCode: 200, data: cards, message: "Success" });
    } catch (error) {
        console.error('Error fetching cards from MongoDB', error);
        res.status(500).send('Error fetching cards');
    }
});

app.listen(port, () => {
    console.log("App listening on port: " + port);
});
