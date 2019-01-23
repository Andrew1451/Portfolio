var express = require("express");
var app     = express();

app.set("view engine", "ejs");
app.use(express.static("public"));

app.get("/", function(req, res) {
    res.render("home");
});

app.get("/resume", function (req, res) {
    res.render("resume");
});

app.get("/contact", function(req, res) {
    res.render("contact");
});

app.get("/experience", function(req, res) {
    res.render("experience");
});

app.get("/about", function(req, res) {
    res.render("about");
});

app.listen(process.env.PORT, process.env.IP, function() {
    console.log("Server running..");
});