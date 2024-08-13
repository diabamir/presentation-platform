
//his model represents the structure of a presentation document in the mongodb, including its slides 
const mongoose = require('mongoose');

const slideSchema = new mongoose.Schema({
    title: String,
    content: String
});

const presentationSchema = new mongoose.Schema({
    title: { type: String, unique: true, required: true },
    authors: [String],
    dateOfPublishment: { type: Date, default: Date.now },
    slides: [slideSchema]
});

module.exports = mongoose.model('Presentation', presentationSchema);
