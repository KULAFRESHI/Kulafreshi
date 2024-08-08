// app.js
const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const dotenv = require('dotenv');

dotenv.config();

const app = express();
const port = process.env.PORT || 3000;

app.set('view engine', 'ejs');
app.use(express.static('public'));
app.use(bodyParser.urlencoded({ extended: true }));

mongoose.connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('MongoDB connected'))
    .catch(err => console.log(err));

    const indexRoute = require('./routes/index');
    const salesRoute = require('./routes/sales');

    app.use('/', indexRoute);
    app.use('/sales', salesRoute);

    app.listen(port, () => {
      console.log(`Server running on port ${port}`);
      });
