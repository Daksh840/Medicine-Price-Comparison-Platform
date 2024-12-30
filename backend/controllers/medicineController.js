const mongoose = require('mongoose'); // Import mongoose
const Medicine = require('../models/Medicine');

// Fetch medicines based on query
const getMedicines = async (req, res) => {
    const { name } = req.query;
    try {
        const medicines = await Medicine.find(name ? { name: new RegExp(name, 'i') } : {});
        res.json(medicines);
    } catch (error) {
        res.status(500).json({ message: 'Failed to fetch medicines' });
    }
};

// Fetch a medicine by ID
const getMedicineById = async (req, res) => {
    try {
        // Validate if the provided ID is a valid ObjectId
        if (!mongoose.Types.ObjectId.isValid(req.params.id)) {
            return res.status(400).json({ message: 'Invalid medicine ID' });
        }

        // Find medicine by ID
        const medicine = await Medicine.findById(req.params.id);
        if (medicine) {
            res.json(medicine);
        } else {
            res.status(404).json({ message: 'Medicine not found' });
        }
    } catch (error) {
        console.error(error); // Log error for debugging
        res.status(500).json({ message: 'Failed to fetch medicine details' });
    }
};

module.exports = { getMedicines, getMedicineById };
