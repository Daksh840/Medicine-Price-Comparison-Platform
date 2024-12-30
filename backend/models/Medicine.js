const mongoose = require('mongoose');

const pharmacySchema = new mongoose.Schema({
    name: { type: String, required: true },
    price: { type: Number, required: true },
});

const medicineSchema = new mongoose.Schema({
    name: { type: String, required: true },
    description: { type: String },
    pharmacies: [pharmacySchema],
});

const Medicine = mongoose.model('Medicine', medicineSchema);
module.exports = Medicine;
