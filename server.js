/**
 * server.js
 * ScholarSync Backend API Server
 */
const express = require('express');
const cors = require('cors');
const path = require('path');

const reelsRouter = require('./routes/reelsRoutes');
const chatRouter = require('./routes/chatRoutes');

const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());
app.use(express.static(path.join(__dirname)));

// API Routes
app.use('/api/reels', reelsRouter);
app.use('/api/chat', chatRouter);

// Health check endpoint
app.get('/api/health', (req, res) => {
  res.json({ status: 'ok', message: 'ScholarSync API is running.' });
});

if (require.main === module) {
  app.listen(PORT, () => {
    console.log(`ScholarSync server running at http://localhost:${PORT}`);
  });
}

module.exports = app;
