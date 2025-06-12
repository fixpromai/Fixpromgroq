const express = require('express');
const serverless = require('serverless-http'); 
const dotenv = require('dotenv');
dotenv.config();

const app = express();
app.use(express.json());

const polishRoute = require('./routes/polish');
app.use('/api/polish', polishRoute);


module.exports = app;
module.exports.handler = serverless(app);

const PORT = process.env.PORT || 4000;
app.listen(PORT, () => {
  console.log(`🚀 Server running on http://localhost:${PORT}`);
});

