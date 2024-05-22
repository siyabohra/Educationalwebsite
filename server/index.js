require('./src/app.js');

require('dotenv').config() ;

const express = require('express');

const app=express();

const cors = require('cors');
const allRoutes = require('./src/app.js');
const path = require('path');
app.use(express.json());
app.use(cors());

app.use('/uploads', express.static(path.join(__dirname, 'uploads')));

app.use('/Sliders',express.static(path.join(__dirname,'Sliders')))

app.use('/teams', express.static(path.join(__dirname, 'teams')));

const port = process.env.PORT || 5000 ;

app.use(allRoutes);

app.listen(port,()=>{

    console.log(`server is running on port ${port}`);

})