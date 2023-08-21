const connectToMongo = require('./db');
const express = require('express')
var cors = require('cors')
connectToMongo();
const app = express();
const port = 5000;

app.use(cors())
app.use(express.json());
// Available Routes
app.use('/api/auth',require('./routes/auth'));
app.use('/api/notes',require('./routes/notes'));
app.use(express.static(__dirname+"/public"));
app.use("/public",express.static(__dirname+"/public"));
app.get("/",(req,res)=>{
  res.render("index");
})
 



app.listen(process.env.PORT||port, () => {
  console.log(`StickyNotes backend listening on port ${port}`)
});

