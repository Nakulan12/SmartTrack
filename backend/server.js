const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const dotenv = require('dotenv');

// Load .env file
dotenv.config();

// Debug logs (for testing)
console.log("🛠️  Loaded ENV:");
console.log("PORT:", process.env.PORT);
console.log("MONGO_URI:", process.env.MONGO_URI ? "[FOUND]" : "[MISSING]");
console.log("JWT_SECRET:", process.env.JWT_SECRET ? "[FOUND]" : "[MISSING]");

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(express.json());

// Routes
try {
  app.use('/api/auth', require('./routes/authRoutes'));
  app.use('/api/data', require('./routes/dataRoutes'));
} catch (err) {
  console.error("❌ Route loading failed. Check if route files exist:", err.message);
}

// MongoDB Connection
mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true
})
.then(() => {
  console.log('✅ MongoDB connected');
  app.listen(PORT, () => {
    console.log(`🚀 Server running on http://localhost:${PORT}`);
  });
})
.catch((err) => {
  console.error('❌ MongoDB connection error:', err.message);
});
