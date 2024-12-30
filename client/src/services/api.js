import axios from 'axios';

const API = axios.create({ baseURL: 'http://localhost:5000/api' });

API.interceptors.request.use((req) => {
    const token = localStorage.getItem('token');
    if (token) req.headers.Authorization = `Bearer ${token}`;
    return req;
});

export const fetchMedicines = (name) => API.get(`/medicines?name=${name}`);
export const fetchMedicineDetails = (id) => API.get(`/medicines/${id}`);
export const fetchPharmacies = (medicineId) =>
    API.get(`/pharmacies?medicineId=${medicineId}`);
export const login = (credentials) => API.post('/login', credentials);
export const signup = (userData) => API.post('/signup', userData);
export const fetchFavorites = () => API.get('/favorites');
export const addFavorite = (medicineId) =>
    API.post('/favorites', { medicineId });
export const removeFavorite = (id) => API.delete(`/favorites/${id}`);
