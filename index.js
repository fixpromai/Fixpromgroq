const express = require('express');
const dotenv = require('dotenv');
const cors = require('cors');

dotenv.config();

const app = express();

// ✅ Enable CORS for all domains
app.use(cors({
  origin: '*',
  methods: ['GET', 'POST', 'OPTIONS'],
  allowedHeaders: ['Content-Type', 'Authorization'],
  optionsSuccessStatus: 200
}));

// ✅ Allow preflight requests
app.options('*', cors());

app.use(express.json());

// ✅ Routes
const polishRoute = require('./routes/polish');
app.use('/api/polish', polishRoute);

// ✅ Bind to port so Render detects it
const PORT = process.env.PORT || 4000;
app.listen(PORT, () => {
  console.log(`🚀 Fixprom backend running on http://localhost:${PORT}`);
});
