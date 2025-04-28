const mongoose = require('mongoose');

const mongoUrl = process.env.MONGO_URL || '127.0.0.1:';
mongoose.connect(mongoUrl)
  .then(() => console.log('Connected! to Database'))
  .catch(err => console.error('Connection error:', err));