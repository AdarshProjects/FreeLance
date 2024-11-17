const mongoose = require("mongoose");
const { Schema } = mongoose;
mongoose.connect("mongodb+srv://adarsh1204:AK4SILVER@cluster0.xlebxec.mongodb.net/Freelance");
console.log("Reaches at the Mongodb page");
const UserSignupSchema = new Schema({
    firstname: String,
    lastname: String,
    email: String,
    password: String
})

const DoctorintroSchema = new Schema({
    name: String,
    fee: String,
    experience: String,
    speciality: String,
    address: String,
    State: String,
    district: String,
    age: String,
    education: String,
    about: String
})

const UserSignup = mongoose.model('UserSignup', UserSignupSchema);
const Doctorintro = mongoose.model('Doctorintro', DoctorintroSchema);

module.exports = {
    UserSignup,
    Doctorintro
}