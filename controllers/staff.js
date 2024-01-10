const Helper = require("../utils/helper");
const DB = require("../models/staff");

const all = async(req, res, next) => {
    const result = await DB.find();
    Helper.fMmsg(res, "All staff", result);
}

const post = async(req,res,next) => {
    let result = await new DB(req.body).save();
    Helper.fMmsg(res, "Staff is Saved", result);
}

module.exports = {
    all,
    post,
}