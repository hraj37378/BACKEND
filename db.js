const mongoose=require('mongoose');
const mongoURI="mongodb+srv://hraj37378:xF9uORFcuBTqIi2C@cluster0.ecvjx7a.mongodb.net/notesretryWrites=true&w=majority"

const connectToMongo =()=>{
    mongoose.connect(mongoURI);
console.log("Mongo Connected Successfully");

}

module.exports = connectToMongo;

