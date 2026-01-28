require('dotenv').config();
const express = require('express');
const cors = require('cors');

const app = express();

// ✅ CORS (WAJIB, TARUH DI ATAS)
app.use(cors({
  origin: 'http://localhost:5173',
  methods: ['GET', 'POST', 'PUT', 'DELETE'],
  allowedHeaders: ['Content-Type', 'Authorization'],
}))

// middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// 🔗 LOAD ROUTES
const routes = require('./routes');
app.use('/api', routes);

// optional test root
app.get('/', (req, res) => {
  res.send('API ABSENSI SISWA RUNNING 🚀');
});

app.use((err, req, res, next) => {
  console.error(err);

  if (err.status === 422) {
    return res.status(422).json({
      success: false,
      message: err.message || 'Validation error',
      errors: err.errors || {},
    });
  }

  return res.status(500).json({
    success: false,
    message: 'Internal server error',
  });
});

module.exports = app;
