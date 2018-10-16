var express = require("express");           // Requires the Express module just as you require other modules and and puts it in a variable.
var app = express();                        // Calls the express function "express()" and puts new Express application inside the app variable
var bodyParser = require("body-parser");    // Requires body parser, into bodyPArser variable


app.use(bodyParser.urlencoded({extended: true})); // sets up body parser
app.set("view engine", "ejs");

app.get("/", function(req, res){            // routes that are defined for the GET and the POST methods to the root of the app.
   res.render("landing");                   // landing page route
});

app.get("/footpaths", function(req, res){   // route for showing Footpaths.
    res.render("footpaths");
});

app.post("/footpaths", function(req, res){  //same route as footpaths route but is POST instead of GET. Follows REST conventions
    res.send("You hit the POST route!");
    // get data from form and add to footpaths array
    // redirect back to footpaths page
    res.redirect("/footpaths");             // by default it redirects as a GET request
}); 

app.get("/footpaths/new", function(req,res){    // route for submitting a new footpath
    res.render("new.ejs")
});

app.listen(process.env.PORT, process.env.IP, function(){    // for port
    console.log("The FootPath Server has Started!"); 
});