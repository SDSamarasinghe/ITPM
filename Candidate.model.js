const mongoose = require('mongoose');

const Schema = mongoose.Schema;

//Database Schema

const CandidateSchema = new Schema({
    CandidateID: { type: Number, required: true },
    CandidateName: { type: String, required: true },
    Address: { type: String, required: true },
    Telephone: { type: String, required: true },
    Email: { type: String, required: true },
    Type: { type: String, required: true },
    Discription: { type: String, required: true },

}, {
    timestamps: true,
});

const Candidate  = mongoose.model('Candidate ', CandidateSchema);

module.exports = Candidate ;




