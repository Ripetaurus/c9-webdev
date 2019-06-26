var express = require('express');
var app = express();

// Add home route
app.get("/", function(req, res) {
    res.send("Hi there, welcome to my assignment!");
});

// Add specifics to speak
app.get("/speak/:animal", function(req, res) {
    var sounds = {
        pig: "Oink",
        cow: "Moo",
        dog: "Woof Woof!",
        cat: "I hate you human",
        goldfish: "..."
    }
    var animal = req.params.animal;
    var sound = sounds[animal]
    
    // Compile the properties into one string
    res.send("The " + animal + " says '" + sound + "'")
})
// Add speak route
app.get("/speak", function(req, res) {
    res.send("Please specify an animal");
});

// Add repeat function
app.get("/repeat/:word/:num", function(req, res) {
    var word = req.params.word;
    var num = req.params.num;
    var finSen = "";
    
    for (var i = 0; i < num; i++) {
        finSen += (word + " ");
    }
    res.send(finSen);
});


// Tell Express to start a server
app.listen(process.env.PORT, process.env.IP, function(){
    console.log('server has started');
});