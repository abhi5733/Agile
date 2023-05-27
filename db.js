const mongoose = require("mongoose")
// require('dotenv').config()


const connection = mongoose.connect("mongodb+srv://abhijeet:abhijeet@cluster0.eumbfwa.mongodb.net/backend?retryWrites=true&w=majority")



module.exports =  {connection} 