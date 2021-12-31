//jshint esversion: 6

const express = require("express");
const bodyParser = require("body-parser");
const date = require(__dirname + "/date.js"); // to be able to use the date module
let ejs = require('ejs');


const app = express();
const port = 3000;

app.use(bodyParser.urlencoded({
    extended: true
})); // allows us to use thr body
app.set("view engine", 'ejs');
app.use(express.static("public"));

const items = ["Buy Food", "Cook Food", "Eat Food"];
const workItems = [];

app.get("/", (req, res) => {

    // if (currentDay === 6 || currentDay === 0){
    //     day = "Weekend";

    //     // res.send("<h1> Yah!!! It's the weekend! <h1>");
    // } else {
    //     day = "Weekday";
    //     // res.sendFile(__dirname + "/index.html");
    // }

    // if (currentDay === 0){
    //     day = "Sunday";
    // } else if (currentDay === 1){
    //     day = "Monday";
    // } else if (currentDay === 2){
    //     day = "Tuesday";
    // } else if (currentDay === 3){
    //     day = "Wednesday";
    // } else if (currentDay === 4){
    //     day = "Thursday";
    // } else if (currentDay === 5){
    //     day = "Friday";
    // }else {
    //     day = "Saturday";
    // }

    //Rule of thumb is to use switch whenever we have more than 5 if statements
    // switch (currentDay) {
    //     case 0:
    //         day = "Sunday";
    //         break;
    //     case 1:
    //         day = "Monday";
    //         break;
    //     case 2:
    //         day = "Tuesday";
    //         break;
    //     case 3:
    //         day = "Wednesday";
    //         break;
    //     case 4:
    //         day = "Thursday";
    //         break;
    //     case 5:
    //         day = "Friday";
    //         break;
    //     case 6:
    //         day = "Saturday";
    //     default:
    //         console.log("Error: current day is equal to: " + currentDay);
    // }

    let day = date.getDate();

    res.render("list", {
        listTitle: day,
        newListItems: items
    });

});

app.post("/", (req, res) => {
    item = req.body.newListItems;
    console.log(req.body);
    // res.send("Post successful");
    if (req.body.list === "Work") {
        workItems.push(item);
        res.redirect("/work");
    } else {
        items.push(item);
        res.redirect("/");
    }

});

app.get("/work", (req, res) => {
    res.render("list", {
        listTitle: "Work List",
        newListItems: workItems
    });
});

app.post("/work", (req, res) => {
    let item = req.body.newListItems;
    workItems.push(item);
    res.redirect("/work");
});

app.get("/about", (req, res) => {
    res.render("about");
});

app.listen(process.env.PORT || port, () => {
    console.log("Server is running on port " + port);
});