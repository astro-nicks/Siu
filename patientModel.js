const mongoose = require('mongoose');

const patientSchema = new mongoose.Schema({
  patientID: { type: String, required: true, unique: true },
  surname: { type: String, required: true },
  otherNames: { type: String },
  gender: { type: String, enum: ['Male', 'Female', 'Other'], required: true },
  phoneNumber: { type: String },
  residentialAddress: { type: String },
  emergencyContact: {
    name: { type: String },
    phone: { type: String },
    relationship: { type: String },
  },
});

const Patient = mongoose.model('Patient', patientSchema);

module.exports = Patient;