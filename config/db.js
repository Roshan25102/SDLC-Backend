// config/db.js

const mongoose = require("mongoose");
require("dotenv").config(); // Load environment variables

const connectToMongoDB = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI);  // Removed deprecated options
    console.log("MongoDB Connected");
  } catch (error) {
    console.error("MongoDB Connection Error:", error.message);
    process.exit(1); // Exit process with failure
  }
};

// Export the connection function to be used in server.js
module.exports = connectToMongoDB;