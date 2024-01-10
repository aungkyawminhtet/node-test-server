const route = require("express").Router();
const controller = require("../controllers/member");

route.get("/", controller.all);
route.post("/", controller.post);

module.exports = route;