var db = require("../model/app");
var {Sequelize, Op} = require('sequelize')
const users = db.users;
console.log("here we goo controller");

var getmethod = async function (req, res) {
  try {
    res.render("view");
  } catch (err) {
    console.log("error", err);
  }
};

var addDetails = async function (req, res) {
  try {
    var temp = true;
    console.log("details", req.body);

    var address = req.body.address;
    var lat = parseFloat(req.body.lat)
    var lng = parseFloat(req.body.lng)

    console.log("address ->", address);
    console.log("lat", lat)
    console.log("lng", lng)

      var creat = await users.create({ Address: address, Latitude: lat, Longitude:lng });

      res.send({ err: temp, Address: address, Latitude: lat, Longitude: lng });
    
  } catch (err) {
    var temp = true;
    console.log("error", err);
    res.send({ Err: "UnSuccessfully entry created", err: temp });
  }
};

var searchMe = async function (req, res) {
  try {
    var searchMee = req.body.searchM;
    console.log("searchMe",searchMee) 
     
    var searchData = await users.findAll({
      where:{
        Address : {
          [Sequelize.Op.iLike]: "%" + searchMee + "%"
        }
      },
      order: [["id", "ASC"]],
    });
    //console.log("changed searchData ", searchData);

    res.send({ data: searchData });
  } catch (err) {
    console.log("error", err);
  }
};

module.exports = { addDetails, getmethod ,searchMe};
