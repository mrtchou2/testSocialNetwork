//ce de la que partira toute la backend
//ce framevork permet d'ecrire plus rapidement, car permet de compremdre meiux laungage humain
const express = require('express');
const bodyParser = require('body-parser');
const userRoutes = require('./routes/user.routes');


require('dotenv').config({ path: './config/.env' });

//fichier pour se connecter a la base de donnee
require('./config/db');
const app = express();


//bodyparser va prendre la req et la mettre au bon format
//permet de traiter le data
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ etended: true }));

//routes
app.use('/api/user', userRoutes);



//server
//ce le numero de port, pour ecouter
app.listen(process.env.PORT, () => {
    console.log(`listening on port ${process.env.PORT}`);
})