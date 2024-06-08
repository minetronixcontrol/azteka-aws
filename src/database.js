const {DB} = require('./constants');
const mongoose = require('mongoose');

const URI = DB.LOCAL;
mongoose.connect(URI, {useNewUrlParser: true, useUnifiedTopology: true})
    .then(db => console.log('base de datos inicializada'))
    .catch (err => console.error(err));
module.exports = 'mongoose';