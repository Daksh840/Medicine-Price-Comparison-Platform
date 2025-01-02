const mongoose = require('mongoose'); // Import mongoose
const Medicine = require('../models/Medicine');

// Fetch medicines based on query
const getMedicines = async (req, res) => {
    const { name } = req.query;
    try {
        const medicines = await Medicine.find(
            name ? { name: new RegExp(name, 'i') } : {}
        );
        res.json(medicines);
    } catch (error) {
        console.error('Error fetching medicines:', error);
        res.status(500).json({ message: 'Failed to fetch medicines' });
    }
};


// Fetch a medicine by ID
const getMedicineById = async (req, res) => {
    try {
        if (!mongoose.Types.ObjectId.isValid(req.params.id)) {
            return res.status(400).json({ message: 'Invalid medicine ID' });
        }

        const medicine = await Medicine.findById(req.params.id);
        if (!medicine) {
            return res.status(404).json({ message: 'Medicine not found' });
        }

        res.json(medicine);
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Failed to fetch medicine details' });
    }
};

// Fetch pharmacies for a specific medicine

const getPharmaciesByMedicine = async (req, res) => {
    const { medicineName } = req.query;

    try {
        if (!medicineName) {
            return res.status(400).json({ message: 'Medicine name is required.' });
        }

        const pharmacies = await Pharmacy.find({ medicine: new RegExp(medicineName, 'i') });

        if (pharmacies.length > 0) {
            res.json(pharmacies);
        } else {
            res.status(404).json({ message: 'No pharmacies found for the given medicine.' });
        }
    } catch (error) {
        console.error('Error fetching pharmacies:', error);
        res.status(500).json({ message: 'Failed to fetch pharmacy details.' });
    }
};


module.exports = { getMedicines, getMedicineById, getPharmaciesByMedicine };
