const express = require('express');
const app = express();

const PORT = 3000;
const SERVICE_NAME = 'status-service';
const VERSION = process.env.APP_VERSION || '1.0.0';
const ENV = process.env.ENV || 'dev';

app.get('/status', (req, res) => {
  res.json({
    service: SERVICE_NAME,
    version: VERSION,
    environment: ENV,
    status: 'OK'
  });
});

app.listen(PORT, () => {
  console.log(`Service running on port ${PORT}`);
});
