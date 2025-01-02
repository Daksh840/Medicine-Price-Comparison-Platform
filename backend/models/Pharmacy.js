const mongoose = require('mongoose');

const pharmacySchema = new mongoose.Schema({
    name: { type: String, required: true },
    medicineName: { type: String, required: true },
    price: { type: Number, required: true },
});

module.exports = mongoose.model('Pharmacy', pharmacySchema);
