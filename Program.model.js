
const mongoose = require('mongoose');

const Schema = mongoose.Schema;

//Database Schema

const ProgramSchema = new Schema({
    ProgramID: { type: Number, required: true },
    ProgramTitle: { type: String, required: true },
    Discription: { type: String, required: true },

}, {
    timestamps: true,
});

const Program  = mongoose.model('Program  ', ProgramSchema);

module.exports = Program  ;