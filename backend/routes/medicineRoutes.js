const express = require('express');
const { getMedicines, getMedicineById } = require('../controllers/medicineController');
const router = express.Router();

// Route to get all medicines or search by name
router.get('/', getMedicines);

// Route to get a medicine by ID
router.get('/:id', getMedicineById);

module.exports = router;
