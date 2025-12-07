const express = require('express');
const db = require('../db/database');

const router = express.Router();

// Get all rent records
router.get('/', (req, res) => {
  const sql = 'SELECT id, name, amount, rental_date AS rentalDate, payment_date AS paymentDate FROM rents ORDER BY id DESC';
  db.all(sql, [], (err, rows) => {
    if (err) {
      console.error('Error fetching rents:', err.message);
      return res.status(500).json({ error: 'Failed to fetch rent records' });
    }
    res.json(rows);
  });
});

// Create a new rent record
router.post('/', (req, res) => {
  const { name, amount, rentalDate, paymentDate } = req.body;

  if (!name || amount === undefined || !rentalDate || !paymentDate) {
    return res.status(400).json({
      error: 'Missing required fields: name, amount, rentalDate, paymentDate',
    });
  }

  const sql = `
    INSERT INTO rents (name, amount, rental_date, payment_date)
    VALUES (?, ?, ?, ?)
  `;

  const params = [name, amount, rentalDate, paymentDate];

  db.run(sql, params, function (err) {
    if (err) {
      console.error('Error inserting rent record:', err.message);
      return res.status(500).json({ error: 'Failed to create rent record' });
    }

    const created = {
      id: this.lastID,
      name,
      amount,
      rentalDate,
      paymentDate,
    };

    res.status(201).json(created);
  });
});

module.exports = router;
