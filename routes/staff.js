const route = require('express').Router();
const controller = require("../controllers/staff");

route.get("/", controller.all);
route.post("/", controller.post);

module.exports = route;
