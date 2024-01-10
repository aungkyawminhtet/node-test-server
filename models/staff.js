const mongoose = require("mongoose");
const { Schema } = mongoose;

const staffSchema = new Schema({
  nfc_id: { type: String, require: true },
  name: { type: String, require: true },
  email: { type: String, require: true, unique: true },
  phone: { type: String, require: true, unique: true },
  address: { type: String, require: true },
  salary: { type: String, require: true },
  role: { type: String, require: true },
  dob: { type: Date, require: true },
  gender: { type: String, require: true },
  joiningDate: { type: Date, require: true }
});

const staff = mongoose.model("Staff", staffSchema);
module.exports = staff;
