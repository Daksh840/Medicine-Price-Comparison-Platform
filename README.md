 PharmaCompare: Medicine Price Comparison Platform

Project Description
PharmaCompare is a web application that enables users to search and compare medicine prices across various pharmacies. It provides a seamless and user-friendly interface for consumers to find the best prices for medicines. Additionally, the platform includes features like user authentication, personalized profiles, and a curated list of popular medicines.


Table of Contents
- [Project Description]
- [Setup Instructions]
- [Features Overview]
- [API Endpoints](#api-endpoints)
- [Technologies Used]
- [Screenshots]
- [Contributing]
- [Known Issues]
- [Future Improvements]
- [Contact](#contact)


Setup Instructions
1. Clone the repository:
   git clone https://github.com/<your-username>/PharmaCompare.git
 
2. Navigate to the project directory:
   cd PharmaCompare

3. Install dependencies for both frontend and backend:
   
   cd backend && npm install
   cd ../frontend && npm install
   
4. Create a `.env` file in the `backend` directory and configure the following variables:
  .env
   PORT=5000
   MONGO_URI=your_mongodb_connection_string
   JWT_SECRET=your_jwt_secret_key
   ```
5. Start the application:
   - Backend:
     ```bash
     cd backend && npm start
     ```
   - Frontend:
     ```bash
     cd frontend && npm start
     ```

6. Open your browser and navigate to `http://localhost:3000`.


 Features Overview
- Search Medicines: Search for medicines by name and view their prices across pharmacies.
- Popular Medicines: A curated list of popular medicines for quick access.
- Authentication: Signup and login functionality with JWT-based authentication.
- User Profiles: View and manage personalized user profiles.
- Responsive Design: Optimized for both desktop and mobile devices.

---

 API Endpoints
 Medicines
- `GET /api/medicines`: Fetch all medicines.
- `GET /api/medicines/:id`: Fetch details of a specific medicine.

 Pharmacies
- `GET /api/pharmacies?medicineName=:name`: Fetch pharmacies offering a specific medicine.

 Authentication
- `POST /api/auth/signup`: Register a new user.
- `POST /api/auth/login`: Login an existing user.


 Technologies Used
- Frontend: React, Material-UI
- Backend: Node.js, Express
- Database: MongoDB
- Authentication: JWT (JSON Web Tokens)
- Development Tools: Postman, Nodemon


 Screenshots
 Home Page



 Medicine Details





 

 Contributing
Contributions are welcome! To contribute:
1. Fork the repository.
2. Create a new branch:
   ```bash
   git checkout -b feature-name
   ```
3. Make your changes and commit them:
   ```bash
   git commit -m "Add feature-name"
   ```
4. Push to the branch:
   ```bash
   git push origin feature-name
   ```
5. Open a pull request.


 Known Issues
- API response times may be slow for large datasets.
- Profile feature is under development.


 Future Improvements
- Add multi-language support.
- Implement advanced search filters.
- Include user reviews for medicines and pharmacies.


 Contact
If you have any questions, feel free to reach out:
- Email: dakshnahar840@gmail.com
- GitHub: https://github.com/Daksh840

[PharmaCompare M.docx](https://github.com/user-attachments/files/18293538/PharmaCompare.M.docx)
