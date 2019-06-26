const express    = require("express"),
      app        = express(),
      bodyParser = require("body-parser"),
      mongoose   = require("mongoose");

mongoose.connect("mongodb://localhost:27017/yelp_camp", { useNewUrlParser: true });
app.use(bodyParser.urlencoded({extended: true}));
app.set("view engine", "ejs");

// Schema setup
var campgroundSchema = new mongoose.Schema({
    name: String,
    image: String,
    description: String
});

var Campground = mongoose.model("Campground", campgroundSchema);

// Campground.create(
//     {
//         name: "Granite Hill",
//         image: "https://farm1.staticflickr.com/60/215827008_6489cd30c3.jpg",
//         description: "This is a huge granite hill. No bathrooms. No water. Beautiful granite!"
//     },
//     function(err, campground) {
//         if (err) {
//             console.log(err);
//         } else {
//             console.log("NEWLY CREATED CAMPGROUND: ");
//             console.log(campground)
//         }
//     });

// ROOT route
app.get("/", function(req, res) {
  res.render("landing");
});

// INDEX RESTful route
app.get("/campgrounds", function(req, res) {
    Campground.find({}, function(err, allCampgrounds) {
        if (err) {
            console.log("ERROR");
        } else {
            res.render("index", {campgrounds: allCampgrounds});
        }
    });
});

// NEW RESTful route
app.get("/campgrounds/new", function(req, res) {
    res.render("new")
})

// CREATE RESTful route
app.post("/campgrounds", function(req, res) {
    // get data from form and add to campgrounds array
    var name = req.body.name;
    var image = req.body.image;
    var desc = req.body.description;
    var newCampground = {name: name, image: image, description: desc};
    // Create new database object
    Campground.create(newCampground, function(err, newlyCreated) {
        if (err) {
            console.log(err);
        } else {
                res.redirect("/campgrounds");
        }
    });
});

// SHOW RESTful route
app.get("/campgrounds/:id", function(req, res) {
    Campground.findById(req.params.id, function(err, foundCampground) {
        if (err) {
            console.log(err);
        } else {
            res.render("show", {campground: foundCampground});
        }
    })
});


app.listen(process.env.PORT, process.env.IP, function() {
    console.log("Hosting YelpCamp server on https://webdevbootcamp-ripetaurus.c9users.io ...");
});