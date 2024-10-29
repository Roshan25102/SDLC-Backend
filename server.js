const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const authRoutes = require("./routes/auth");

require("dotenv").config(); // Load environment variables

// Import the MongoDB connection logic
const connectToMongoDB = require("./config/db");

const app = express();

// Middleware
app.use(
  cors({
    origin: "https://sdlc-task-frontend.vercel.app",
    methods: "GET,POST,PUT,DELETE",
    allowedHeaders: "Content-Type,Authorization",
  })
);
app.use(express.json());
app.use(bodyParser.json());

// MongoDB connection
connectToMongoDB(); // Call the MongoDB connection function from config/db.js

// Routes
app.use("/api/auth", authRoutes);

// Start the server
const PORT = process.env.PORT || 5001;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
