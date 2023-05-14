
const mongoose = require('mongoose');

const Schema = mongoose.Schema;

//Database Schema

const VacancySchema = new Schema({
    VacancyID: { type: Number, required: true },
    JobTitle: { type: String, required: true },
    Location: { type: String, required: true },
    Discription: { type: String, required: true },

}, {
    timestamps: true,
});

const Vacancy  = mongoose.model('Vacancy ', VacancySchema);

module.exports = Vacancy ;
            
          

