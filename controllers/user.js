const DB = require("../models/user");
const Helper = require("../utils/helper");

const all = async(req, res, next) => {
    const result = await DB.find();
    Helper.fMmsg(res, "all users", result);
}

const post = async(req, res, next) => {
    const result = await new DB(req.body).save();
    Helper.fMmsg(res, "user saved", result);
}

module.exports = {
    all,
    post,
}