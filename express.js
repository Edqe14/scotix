const express = require("express");
const app = express();
const botjs = require(`./bot`)

app.get('/', function(req, res) {
    res.json({
        stat: botjs.stats.online
    });
});


app.listen(8080, function() {
    console.log("App listening on port 8080");
})

