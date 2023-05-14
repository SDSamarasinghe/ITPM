const router = require('express').Router();
let Program  = require('../models/Program.model');

router.route('/').get((req, res) => {
    Program.find()
        .then(Program => res.json(Program))
        .catch(err => res.status(400).json('Error: ' + err));
});

//Add Function

router.route('/add').post((req, res) => {

    const ProgramID = req.body.ProgramID;
    const ProgramTitle= req.body.ProgramTitle;
    const Discription = req.body.Discription;
   

    const newProgram  = new Program({
        ProgramID,
        ProgramTitle,
        Discription
       
    });

    newProgram.save()
        .then(() => res.json('Program  added!'))
        .catch(err => res.status(400).json('Error: ' + err));
});

  

// Get Data 
router.route('/:id').get((req, res) => {
    Program.findById(req.params.id)
        .then(Program => res.json(Program))
        .catch(err => res.status(400).json('Error: ' + err));
});

//Delete Data

router.route('/:id').delete((req, res) => {
    Program.findByIdAndDelete(req.params.id)
        .then(() => res.json('Program deleted.'))
        .catch(err => res.status(400).json('Error: ' + err));
});

// Update data
router.route('/update/:id').post((req, res) => {
    Program.findById(req.params.id)
        .then(Program => {
            Program.ProgramID = req.body.ProgramID;
            Program.ProgramTitle = req.body.ProgramTitle;
            Program.Discription = req.body.Discription;

            Program.save()
                .then(() => res.json('Program updated!'))
                .catch(err => res.status(400).json('Error: ' + err));
        })
        .catch(err => res.status(400).json('Error: ' + err));
});

module.exports = router;