const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const path = require('path');
const Service = require('./models/service');
const Image = require('./models/image');
const dotenv = require("dotenv");





dotenv.config();


const app = express();

// Connect to MongoDB
mongoose
  .connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true
  })
  .then(() => {
    console.log('Connection Open');
  })
  .catch((err) => {
    console.log(err);
  });

//configure method-override

app.use(cors()); // Enable CORS
app.use(express.json()); // Parse JSON request bodies
app.set('src',path.join(__dirname, '/client/src'));
app.use(express.urlencoded({ extended: true }));





// Define route handler to Fetch all images
app.get('/api/images', async (req, res) => {
  try {
    const images = await Image.find();
    res.json(images);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Server error' });
  }
});

// Fetch all data from services database
app.get('/api/services', async (req, res) => {
  try {
    const services = await Service.find();
    res.json(services);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Server error' });
  }
});





if(process.env.NODE_ENV === "production"){
  app.use(express.static(path.join(__dirname, "client", "build")));
  app.get("*", (req,res) => {
    res.sendFile(path.resolve(__dirname, "client", "build", "index.html"));
  });
}


app.listen(process.env.PORT || 3000, function () {
    console.log('Server is running on port 3000');
});
