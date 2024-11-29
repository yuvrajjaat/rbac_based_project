# RBAC Product

This project implements Role-Based Access Control (RBAC) where an admin can add products and assign them to specific roles (Developer, Designer, Manager, Tester). When a user logs in, they will only be able to view the products assigned to their respective roles by the admin.

## Features

- **Admin Panel:**
  - Admin can add new products.
  - Admin assigns products to specific roles: Developer, Designer, Manager, and Tester.
  
- **User Dashboard:**
  - Users log in and select their roles (Developer, Designer, Manager, Tester).
  - Users can only view the products that are assigned to their role by the admin.

## Table of Contents

- [Installation Instructions](#installation-instructions)
- [Usage](#usage)
- [Project Structure](#project-structure)
- [Technologies Used](#technologies-used)
- [Firebase Configuration](#firebase-configuration)
- [Code Explanation](#code-explanation)

---

## Installation Instructions

1. Clone the repository:
    bash
    git clone https://github.com/yuvrajjaat/rbac_based_project.git
    cd rbac_based_project
    

2. Install dependencies:
    bash
    npm install
    

3. Set up Firebase in your project:
    - Create a Firebase project and configure Firebase Authentication and Realtime Database.
    - Add your Firebase configuration to the `.env` file (example below).

4. Run the project:
    bash
    npm start
    

    The application will be accessible at `http://localhost:5500`.

---

## Usage

1. **Admin Panel:**
   - Admin can add new products and assign each product to one or more roles (Developer, Designer, Manager, Tester).
   - Admin does not directly manage users but only assigns the products based on roles.

2. **User Login and Dashboard:**
   - Users log in using their email and password.
   - Upon logging in, users choose their roles (Developer, Designer, Manager, Tester).
   - Based on the assigned role, users can only view the products that the admin has assigned to that role.

---

## Project Structure

```sh
rbac-product/
├── assets/
│   └── images/
├── src/
│   ├── components/
│   ├── utils/
│   ├── firebase.js
│   ├── app.js
│   └── ...
├── .env
├── package.json
└── README.md
```

- `firebase.js`: Contains Firebase configuration and database interaction.
- `app.js`: Main app logic including product assignment and user login.
- `components/`: Contains reusable UI components like login forms, product assignment forms, etc.
- `utils/`: Utility functions for handling specific actions like authentication, product management, etc.

---

## Technologies Used

- **Firebase**: Used for authentication and real-time database.
- **HTML/CSS**: Basic frontend for the user interface.
- **JavaScript**: Handles dynamic content and Firebase interactions.
- **Node.js**: Backend server to serve the app and interact with Firebase.

---

## Firebase Configuration

To use Firebase in this project, you need to configure Firebase Authentication and Firebase Realtime Database:

1. Go to [Firebase Console](https://console.firebase.google.com/), create a new project, and enable **Authentication** (Email/Password sign-in) and **Realtime Database**.
2. Copy your Firebase configuration and add it to the `.env` file:

    
   ```sh
  apiKey: "AIzaSyDau3RNBmGjggsWMH-XFjA4DrpaspLdmq0",
  authDomain: "rbac-vrv-security-d7afd.firebaseapp.com",
  projectId: "rbac-vrv-security-d7afd",
  storageBucket: "rbac-vrv-security-d7afd.firebasestorage.app",
  messagingSenderId: "273039118922",
  appId: "1:273039118922:web:f523421cb155c2d4b44cb3",
  measurementId: "G-SQ3Z4BQMQB"
    ```

---

## Code Explanation

### 1. **Product Assignment by Admin**

The admin can add products and assign them to one or more roles (Developer, Designer, Manager, Tester). This functionality is handled by Firebase, where the admin's input is stored in the database, and roles are linked to products.

```sh
// Example for assigning a product to a role
const productRef = firebase.database().ref('products');
productRef.push({
    productName: 'New Product',
    assignedRoles: ['Developer', 'Tester']  // Admin assigns roles here
});
```

### 2. **User Login and Role Selection**

Users log in using their email and password and select a role (Developer, Designer, Manager, or Tester). After logging in, the app checks the user's role and only shows products assigned to that role.


```sh
// Handle user role selection after login
toggle_btn.forEach((btn) => {
    btn.addEventListener("click", () => {
        main.classList.toggle("sign-up-mode");
    });
});
```

### 3. **Product View Based on Role**

Once users log in, they are restricted to view only those products that the admin has assigned to their specific role.


  ```sh
// Retrieve products assigned to the logged-in user's role
firebase.database().ref('products').once('value').then(snapshot => {
    snapshot.forEach(product => {
        if (product.val().assignedRoles.includes(userRole)) {
            displayProduct(product.val());
        }
    });
});
```

### 4. **Approvals Management**

While the admin does not manage individual users, they can approve or reject registrations based on email. Rejected users are deleted from the system, while approved users gain access.


```sh
// Delete a user upon rejection
function confirmAndDelete(email) {
    const confirmed = confirm(Are you sure you want to delete ${email}?);
    if (confirmed) {
        const usersRef = firebase.database().ref('users');
        usersRef.orderByChild('email').equalTo(email).once('value')
            .then(snapshot => {
                snapshot.forEach(childSnapshot => {
                    childSnapshot.ref.remove();
                });
            });
    }
}
```

---

## Conclusion

This RBAC-based product allows admins to assign products to specific roles, which can be viewed by users based on their assigned roles. The system ensures that users can only access products relevant to their roles, promoting a secure and organized product management system.

