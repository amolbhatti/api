const express = require('express');
const mongoose = require('mongoose');
const path=require('path');
const app = express();
const bodyParse=require('body-parser');
const cors=require('cors');

require('dotenv/config');//used to hide details like paswword ,link,username of database 
// import routes
const postRoutes=require('./routes/post');
const docRoutes=require('./routes/docPath');

//middlewears
app.use(cors());
app.use(bodyParse.json());
app.use('/post',postRoutes);
app.use('/doc',docRoutes);

// static files
app.use('/static', express.static(path.join(__dirname,'static')));

// routes
app.get('/', (req, res) => {

    res.status(200).sendFile(path.join(__dirname ,'/index.html'));
    // res.end()
});
app.get('/notes', (req, res) => {

    res.status(200).sendFile(path.join(__dirname ,'/notes.html'));
    // res.end()
});



// connect to db

mongoose.connect(process.env.DB_CONNECTION, 
{ useNewUrlParser:true,useUnifiedTopology: true});
const db=mongoose.connection;
db.on('error',console.error.bind(console,'connection error'));
db.once('open',()=>{
    console.log('we are connected');
});

// listening to the server
app.listen(3000, () => {
    console.log("server started");
})
