const express = require('express');

const petController = require('../controller/petController');

const router = express.Router();

// get all pets
router.get('/', petController.getPets, (req, res) => {
    return res.status(200).json(res.locals.petInfo);
});

// create a pet
router.post('/pet', petController.addPet, (req, res) => {
    return res.status(200).json(res.locals.newPet);
});

// // update a pet 
router.put('/pet/:id', petController.updatePet);

// // delete a pet 
router.delete('/pet/:id', petController.deletePet);

// need to create get method to originally send file to the login page of the root path /
// need to create get method to send the file to /signup path file 

// going to need create post methods for /signup routes - also needs to create front end file paths to resolve to this file after we pass in a controller to setcookie, createUser, and setSSIDcookie 

// for /login route, will need to post method to redirect to the homepage of app and pass in controller of verifyuser, start seshion, and setssidcookie before redirecting

module.exports = router;