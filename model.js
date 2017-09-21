var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var userSchema = new Schema({
    name: String,
    problem: String,
    gender: String,
    doctor: String,
    day: String
})

var patientData = mongoose.model("Patient", userSchema)
module.exports = patientData;