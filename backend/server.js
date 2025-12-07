const express = require('express');
const cors = require('cors');
const rentsRouter = require('./routes/rents');

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(cors());
app.use(express.json());

// Health check
app.get('/', (req, res) => {
  res.json({ message: 'Rent Management API is running' });
});

// Rent routes
app.use('/api/rents', rentsRouter);

// Start server
app.listen(PORT, () => {
  console.log(`Rent Management API listening on port ${PORT}`);
});
