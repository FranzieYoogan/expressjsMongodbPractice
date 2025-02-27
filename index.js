const express = require('express')
const mongoose = require('mongoose');
const router = require('./routes/user.routes.js')
const app = express()

app.use(express.json())



mongoose.connect('mongodb+srv://franzieyoogan2:admin357159@cluster0.guw8a4s.mongodb.net/practice1')
  .then(() => {
    app.use(router)
    console.log('Connected!');
    console.log('server is running at 3000')
    app.listen(3000)

  })

