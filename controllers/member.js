const Helper = require("../utils/helper");
const DB = require("../models/member");

const all = async(req, res, next) => {
    let result = await DB.find();
    Helper.fMmsg(res, "all member", result);
}

const post = async(req, res, next) => {
    let result = await new DB(req.body).save();
    Helper.fMmsg(res, "Member Saved", result);
}

module.exports = {
    all,
    post,
}