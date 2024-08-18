import mongoose from "mongoose"


const companySchema = new mongoose.Schema({
  companyName: {
    type: String,
    required: true,
    trim: true
  },
  ownerName: {
    type: String,
    required: true,
    trim: true
  },
  rollNo: {
    type: Number,
    required: true,
    unique: true
  },
  ownerEmail: {
    type: String,
    required: true,
    unique: true,
    match: [/.+\@.+\..+/, 'Please enter a valid email address']
  },
  accessCode: {
    type: String,
    required: true,
    trim: true
  }
});


const Company = mongoose.model('Company', companySchema);

module.exports = Company;
