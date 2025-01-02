const express = require('express');
const router = express.Router();
const {
    getMedicines,
    getMedicineById,
    getPharmaciesByMedicine
} = require('../controllers/medicineController');

router.get('/', getMedicines); // Fetch all medicines or by query
router.get('/:id', getMedicineById); // Fetch a specific medicine by ID
router.get('/pharmacies', getPharmaciesByMedicine); // Fetch pharmacies by medicine name

module.exports = router;
