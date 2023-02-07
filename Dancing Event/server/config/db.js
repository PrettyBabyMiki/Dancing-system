const mongoose = require('mongoose');
// const config = require('default');
// const db = config.get('mongoURI');

const connectDB = async () => {
  try {
    await mongoose.connect(
      "mongodb://localhost:27017/Mysite_management", 
      {
      useNewUrlParser: true,
      useCreateIndex: true,
      useFindAndModify: false,
      useUnifiedTopology: true
    });

    console.log('MongoDB Connected...');
  } catch (err) {
    console.error(err.message);
    // Exit process with failure
    process.exit(1);
  }
};

module.exports = connectDB;
