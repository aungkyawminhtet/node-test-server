const express = require('express');
const app = express();

const mongoose = require('mongoose');
mongoose.connect('mongodb://127.0.0.1:27017/nfc_data');

const memberRoute = require("./routes/member");
const staffRoute = require("./routes/staff");
const userRoute = require("./routes/user");

app.use(express.json());
app.use("/member", memberRoute);
app.use("/staff", staffRoute);
app.use("/user", userRoute);


app.listen(4000, console.log("Server is running in port 4000"));