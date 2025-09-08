
# Magicbricks UI Replication

This project is a user interface (UI) replication of the Magicbricks real estate platform, built as an assignment for the EkamAI Solutions Private Limited internship. It is a single-page application that demonstrates proficiency in modern front-end development, including component-based architecture and responsive design.

### **Features**

  * **Homepage Replication:** A faithful recreation of the primary UI, including property listings, search filters, and navigation.
  * **Reusable Components:** The application is built with a modular structure, using reusable React components for elements like the Header, Property Cards, and Form Sections.
  * **Responsive Design:** The layout is designed to be responsive, providing a consistent experience across different screen sizes (desktop and mobile).
  * **Interactive Elements:** The design includes interactive features for form fields, buttons, and navigation, ready for future functionality.

### **Technologies Used**

  * **ReactJS:** For building a component-based and efficient user interface.
  * **HTML5 & CSS3:** For the core structure and styling of the application.
  * **JavaScript (ES6+):** To handle client-side logic and interactive elements.
  * **Font Awesome:** For all the icons used throughout the design.


### **How to Run the Project**

Follow these steps to set up and run the project on your local machine.

1.  **Prerequisites:** Ensure you have [Node.js](https://nodejs.org/) and [npm](https://www.npmjs.com/) installed.
2.  **Clone the Repository:**
    ```bash
    git clone https://github.com/Priyamah28/ekamai-internship-assignment.git
    ```
3.  **Navigate to the Project Directory:**
    ```bash
    cd ekamai-internship-assignment
    ```
4.  **Install Dependencies:**
    ```bash
    npm install
    ```
5.  **Run the App:**
    ```bash
    npm start
    ```
    The application will automatically open in your web browser at `http://localhost:3000`.

### **File Structure**

This is the project's file structure, organized for clarity and maintainability.

```
magicbricks-app/
├── public/
│   └── index.html
├── src/
│   ├── components/
│   │   ├── Header.js
│   │   ├── Hero.js
│   │   ├── PropertyCard.js
│   │   ├── FilterSection.js
│   │   ├── Sidebar.js
│   │   └── Footer.js
│   ├── pages/
│   │   ├── Home.js
│   │   └── PropertyDetails.js
│   ├── App.js
│   ├── index.js
│   └── styles/
│       ├── main.css
│       └── components.css
├── package.json
└── README.md
```
