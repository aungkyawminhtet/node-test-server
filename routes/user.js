const router = require('express').Router();
const controller = require("../controllers/user");

router.get("/", controller.all);
router.post("/", controller.post);

module.exports = router;