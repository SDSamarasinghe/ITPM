const router = require('express').Router();
let Candidate  = require('../models/Candidate.model');

router.route('/').get((req, res) => {
    Candidate.find()
        .then(Candidate => res.json(Candidate))
        .catch(err => res.status(400).json('Error: ' + err));
});

//Add Function

router.route('/add').post((req, res) => {

    const CandidateID = req.body.CandidateID;
    const CandidateName = req.body.CandidateName;
    const Address =req.body.Address;
    const Email = req.body.Email;
    const Telephone = req.body.Telephone;
    const Type = req.body.Type;
    const Discription = req.body.Discription;
   

    const newCandidate  = new Candidate({
        CandidateID,
        CandidateName,
        Address,
        Email,
        Telephone,
        Type,
        Discription
       
    });

    newCandidate.save()
        .then(() => res.json('Candidate  added!'))
        .catch(err => res.status(400).json('Error: ' + err));
});

  

// Get Data 
router.route('/:id').get((req, res) => {
    Candidate.findById(req.params.id)
        .then(Candidate => res.json(Candidate))
        .catch(err => res.status(400).json('Error: ' + err));
});

//Delete Data

router.route('/:id').delete((req, res) => {
    Candidate.findByIdAndDelete(req.params.id)
        .then(() => res.json('Candidate deleted.'))
        .catch(err => res.status(400).json('Error: ' + err));
});

// Update data
router.route('/update/:id').post((req, res) => {
    Candidate.findById(req.params.id)
        .then(Candidate => {
            Candidate.CandidateID = req.body.CandidateID;
            Candidate.CandidateName = req.body.CandidateName;
            Candidate.Address = req.body.Address;
            Candidate.Telephone = req.body.Telephone;
            Candidate.Email = req.body.Email;
            Candidate.Type = req.body.Type;
            Candidate.Discription = req.body.Discription;
            
          

            Candidate.save()
                .then(() => res.json('Candidate updated!'))
                .catch(err => res.status(400).json('Error: ' + err));
        })
        .catch(err => res.status(400).json('Error: ' + err));
});

module.exports = router;





