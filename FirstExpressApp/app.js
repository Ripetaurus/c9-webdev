var express = require("express");
var app = express();

// "/" => "Hi there!"
app.get("/", function(req, res) {
    res.send("Hi there!")
})
// "/bye" => "Goodbye!"
app.get("/bye", function(req, res){
    res.send("Goodbye!")
})
// "/dog" => "MEOW!" 
app.get("/dog", function(req, res){
    console.log('someone asked for a dog')
    res.send("MEOW!")
})

app.get("/r/:subredditName", function(req, res) {
     var subreddit = req.params.subredditName
    res.send("WELCOME TO THE " + subreddit.toUpperCase() + " SUBREDDIT") 
});

app.get("/r/:subredditName/comments/:id/:title", function(req, res) {
    console.log(req.params)
    res.send("WELCOME TO THE COMMENTS PAGE") 
});
// All other routes
app.get("*", function(req, res){
    res.send("You are a star")
})
// Tell Express to listen for requests (start server)

app.listen(process.env.PORT, process.env.IP, function(){
    console.log('server has started')
});
