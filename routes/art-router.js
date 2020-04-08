const router = require('express').Router(); 

const db = require('./art-model.js');

// GET all art 
router.get('/', (req, res) => {

    db.getArt()
        .then(art => {
            res.status(200).json(art)
        })
        .catch(error => {
            res.status(500).json({
                message: 'Could not find art database information', 
                error: error
            })
        })
})

// GET art by id 
router.get('/:id', (req, res) => {
    const artId = req.params.id
    // console.log(artId)

    db.getArtById(artId)
        .then(art => {
            res.status(200).json(art)
        })
        .catch(error => {
            res.status(500).json({
                message: 'Could not find art database information', 
                error: error
            })
        })
})

// POST new art  
router.post('/', (req, res) => {
    const newArt = req.body
    // console.log(newCase)

    db.addArt(newArt)
        .then(art => {
            res.status(201).json(art)
        })
        .catch(err => {
            res.status(500).json(err.message)
        })
})

// UPDATE one art piece  
router.put('/:id', (req, res) => {
    const updates = req.body
    const artId = req.params.id
    // console.log(updates)
    // console.log(artId)

    db.editArt(artId, updates)
        .then(art => {
            res.status(200).json(art)
        })
        .catch(err => {
            res.status(500).json(err.message)
        })
})

// DELETE one art piece 
router.delete('/:id', (req, res) => {
    const artId = req.params.id
    // console.log(caseId)

    db.removeArt(artId)
    .then(art => {
        res.status(201).end()
    })
    .catch(err => {
        res.status(500).json(err.message)
    })
})


module.exports = router;