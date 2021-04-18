const express = require("express");
const path = require("path")
const app = express();
let port = process.env.PORT;
if (port == null || port == "") {
  port = 9001;
}
app.listen(port);
console.log("Le serveur tourne sur le port: %s",port);

const User = require(path.join(__dirname,"mymodules/user"))
const Cour = require(path.join(__dirname,"mymodules/cour"))

var cour1 = new Cour(new Date(2021, 4, 21, 17,20),"Marie dauclaire")
var cour2 = new Cour(new Date(2021, 5, 27, 17,20),"Marcel proust")
var cour3 = new Cour(new Date(2021, 6, 12,17,20),"Edwin hubble")

var listdesCours = [cour1,cour2,cour3]

var user1 = new User("monuser","yeafawfasadwad",listdesCours);

console.log(user1.getUserInfo());