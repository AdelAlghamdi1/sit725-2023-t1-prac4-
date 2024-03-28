var express = require("express");
var app = express();
var port = process.env.PORT || 3001;

app.use(express.static(__dirname + '/public'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// Define card data
const cardList = [
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
];

// REST API endpoint to get card data
app.get('/api/cards', (req, res) => {
    console.log("Fetching card list");
    res.json({statusCode: 200, data: cardList, message: "Success"});
});



app.listen(port, () => {
    console.log("App listening on port: " + port);
});
