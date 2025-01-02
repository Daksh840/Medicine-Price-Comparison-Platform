const express = require('express');
const Pharmacy = require('../models/Pharmacy'); // Ensure this file exists
const router = express.Router();

// Route to fetch pharmacies by medicine name
router.get('/', async (req, res) => {
    const { medicineName } = req.query;
    try {
        if (!medicineName) {
            return res.status(400).json({ message: 'Medicine name is required' });
        }

        // Query the pharmacies based on medicine name
        const pharmacies = await Pharmacy.find({ medicineName: { $regex: new RegExp(medicineName, 'i') } });
        if (pharmacies.length === 0) {
            return res.status(404).json({ message: 'No pharmacies found for the given medicine' });
        }
        res.json(pharmacies);
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Failed to fetch pharmacies' });
    }
});

module.exports = router;
