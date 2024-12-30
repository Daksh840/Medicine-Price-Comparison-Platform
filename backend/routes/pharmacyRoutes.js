const express = require('express');
const router = express.Router();
const Pharmacy = require('../models/Medicine.js'); // Replace with your pharmacy model if needed

// Fetch pharmacies based on medicine name
router.get('/', async (req, res) => {
    const { medicineName } = req.query;
    try {
        const pharmacies = await Pharmacy.find(
            medicineName
                ? { medicines: { $elemMatch: { name: new RegExp(medicineName, 'i') } } }
                : {}
        );

        if (!pharmacies || pharmacies.length === 0) {
            return res.status(404).json({ message: 'No pharmacies found for the given medicine' });
        }

        res.json(pharmacies);
    } catch (error) {
        console.error('Error fetching pharmacies:', error.message);
        res.status(500).json({ message: 'Failed to fetch pharmacies' });
    }
});

module.exports = router;
