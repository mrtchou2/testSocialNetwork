const router = require('express').Router();
const authController = require('../controllers/auth.controller');

/*
moscou-2021 (github.openclassrooms)
12345MONGOdb
*/
router.post("/register", authController.signUp);

module.exports = router;

