'use strict';

const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const ObjectId = Schema.Types.ObjectId;

const serviceSchema = new Schema({
  name: {type: String, required: true},
  category: {type: String, enum: ['Education', 'Technology', 'Transportation', 'Social Services', 'Maintenance', 'Business', 'Tourism', 'Others'], required: true},
  provider: {type: ObjectId, ref: 'User'},
  price: {
    amount: {type: Number, required: true},
    unit: {
      type: String,
      enum: ['hour', 'day', 'week', 'month', 'year', 'lesson'],
      required: true
    }
  },
  description: {type: String}
});

const Service = mongoose.model('Service', serviceSchema);

module.exports = Service;

// teniendo los modelos hechos puedo empezar con las views.
