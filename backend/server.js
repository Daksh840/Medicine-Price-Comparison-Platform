const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');
const connectDB = require('./config/db');
const pharmacyRoutes = require('./routes/pharmacyRoutes') 

dotenv.config();
connectDB();

const app = express();

// Enable CORS
app.use(cors());

// Parse JSON request body
app.use(express.json());
// Routes
app.use('/api/pharmacies', pharmacyRoutes);

// Routes
const medicineRoutes = require('./routes/medicineRoutes');
app.use('/api/medicines', medicineRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
