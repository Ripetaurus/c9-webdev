const express = require("express");
const app = express();
const bodyParser = require("body-parser");
var campgrounds = [
        {name: "Salmon Creek", image: "https://farm4.staticflickr.com/3751/9580653400_e1509d6696.jpg"},
        {name: "Granite Hill", image: "https://farm2.staticflickr.com/1424/1430198323_c26451b047.jpg"},
        {name: "Mountain Goat's Rest", image: "https://farm1.staticflickr.com/82/225912054_690e32830d.jpg"}
];
    

app.use(bodyParser.urlencoded({extended: true}));

app.set("view engine", "ejs");

app.get("/", function(req, res) {
   res.render("landing");
});

app.get("/campgrounds", function(req, res) {
    res.render("campgrounds", {campgrounds: campgrounds});
});

app.get("/campgrounds/new", function(req, res) {
    res.render("new")
})

app.post("/campgrounds", function(req, res) {
    // get data from form and add to campgrounds array
    var name = req.body.name;
    var image =req.body.image;
    var newCampground = {name: name, image: image};
    campgrounds.push(newCampground)
    
    // redirect to campgrounds page
    res.redirect("/campgrounds")
});


app.listen(process.env.PORT, process.env.IP, function() {
    console.log("Hosting YelpCamp server on https://webdevbootcamp-ripetaurus.c9users.io ...");
});