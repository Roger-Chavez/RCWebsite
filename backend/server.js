require('dotenv').config()
const express = require('express');
const app = express();

const PORT = process.env.PORT;

app.get('/', (req, res) => {
  res.send('Hello from PM2-managed server!');
});

// Example API endpoint
app.get('/api', (req, res) => {
  res.send('Hello, this is the API!');
});

// Other endpoints
app.get('/api/data', (req, res) => {
  res.json({ message: 'Here is some data!' });
});

app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});
