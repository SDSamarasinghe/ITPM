const router = require('express').Router();
let Vacancy  = require('../models/Vacancy.model');

router.route('/').get((req, res) => {
    Vacancy.find()
        .then(Vacancy => res.json(Vacancy))
        .catch(err => res.status(400).json('Error: ' + err));
});

//Add Function

router.route('/add').post((req, res) => {

    const VacancyID = req.body.VacancyID;
    const JobTitle= req.body.JobTitle;
    const Location =req.body.Location;
    const Discription = req.body.Discription;
   

    const newVacancy  = new Vacancy({
        VacancyID,
        JobTitle,
        Location,
        Discription
       
    });

    newVacancy.save()
        .then(() => res.json('Vacancy  added!'))
        .catch(err => res.status(400).json('Error: ' + err));
});

  

// Get Data 
router.route('/:id').get((req, res) => {
    Vacancy.findById(req.params.id)
        .then(Vacancy => res.json(Vacancy))
        .catch(err => res.status(400).json('Error: ' + err));
});

//Delete Data

router.route('/:id').delete((req, res) => {
    Vacancy.findByIdAndDelete(req.params.id)
        .then(() => res.json('Vacancy deleted.'))
        .catch(err => res.status(400).json('Error: ' + err));
});

// Update data
router.route('/update/:id').post((req, res) => {
    Vacancy.findById(req.params.id)
        .then(Vacancy => {
            Vacancy.VacancyID = req.body.VacancyID;
            Vacancy.JobTitle = req.body.JobTitle;
            Vacancy.Location = req.body.Location;
            Vacancy.Discription = req.body.Discription;

            Vacancy.save()
                .then(() => res.json('Vacancy updated!'))
                .catch(err => res.status(400).json('Error: ' + err));
        })
        .catch(err => res.status(400).json('Error: ' + err));
});

module.exports = router;