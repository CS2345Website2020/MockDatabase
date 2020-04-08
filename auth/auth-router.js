const router = require('express').Router(); 
const bcrypt = require('bcryptjs'); 
const jwt = require('jsonwebtoken'); 

const db = require('./auth-model.js');
const secrets = require('../config/secrets.js');

router.post('/register', (req, res) => {
    // get object 
    let administrator = req.body; 

    // make password hash 
    const hash = bcrypt.hashSync(administrator.password, 10); 

    // assign hash to administrator  
    administrator.password = hash; 

    db.addAdmin(administrator)
        .then(saved => {
            res.status(201).json(saved.id);
        })
        .catch(error => {
            res.status(500).json({
                message: 'Could not create Admin', 
                error: error
            })
        })
})

router.post('/login', (req, res) => {
    let { username, password } = req.body;

    db.findBy({ username })
        .first()
        .then(administrator => {
            if (administrator && bcrypt.compareSync(password, administrator.password)) {
                // create admin token 
                const token = generateToken(administrator); 
                res.status(200).json({ token }); 
            } else {
                res.status(401).json({ message: 'Invalid Credentials' })
            }
        })
        .catch(error => {
            res.status(500).json({
                message: 'An error has occured with the server', 
                error: error
            })
        })
})

router.get('/', (req, res) => {

    db.getAll()
        .then(admin => {
            res.status(200).json(admin)
        })
        .catch(error => {
            res.status(500).json({
                message: 'Could not find database information', 
                error: error
            })
        })
})

function generateToken(admin) {
    const payload = {
        administrator: admin.username
    }; 
    const options = {
        expiresIn: '2d', 
    }; 
    // use secret from secret file 
    return jwt.sign(payload, secrets.jwtSecret, options); 
}

module.exports = router;