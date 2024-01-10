const mongoose = require("mongoose");
const { Schema } = mongoose;

const memberStaff = new Schema({
  nfc_id: { type: String, require: true, unique: true },
  points: { type: Number, default: 100 },
  name: { type: String, require: true },
  car_no: { type: String, require: true },
  vehicle_type: { type: String, require: true }
});

const member = mongoose.model("Member", memberStaff);

module.exports = member;