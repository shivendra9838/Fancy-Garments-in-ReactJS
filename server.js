const path = require('path');
const express = require('express');
const app = express();

// Serve frontend static files
app.use(express.static(path.join(__dirname, 'dist'))); // or 'build' if using CRA

app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'dist', 'index.html')); // or 'build'
});

// ...existing backend code...

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});