const express = require('express');
const serverless = require('serverless-http');
const dotenv = require('dotenv');
const cors = require('cors');

dotenv.config();

const app = express();

// ✅ CORS Middleware – must come BEFORE routes
app.use(cors({
  origin: '*', // Allows all domains
  methods: ['GET', 'POST', 'OPTIONS'],
  allowedHeaders: ['Content-Type', 'Authorization'],
  optionsSuccessStatus: 200
}));

// ✅ Preflight support
app.options('*', cors());

app.use(express.json());

// ✅ API Routes
const polishRoute = require('./routes/polish');
app.use('/api/polish', polishRoute);

// ✅ Export for Vercel / Render (serverless)
module.exports = app;
module.exports.handler = serverless(app);

// ✅ Local testing (when run with `node index.js`)
const PORT = process.env.PORT || 4000;
if (process.env.NODE_ENV !== 'production') {
  app.listen(PORT, () => {
    console.log(`🚀 Server running on http://localhost:${PORT}`);
  });
}
