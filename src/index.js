const express = require('express');
const mongoose = require('mongoose');
const routes = require('./routes');
const cors = require('cors');

require('dotenv-safe').config();

const app = express();

mongoose.connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true
});

app.use(cors());
app.use(express.json());
app.use(routes);

app.listen(3333);
