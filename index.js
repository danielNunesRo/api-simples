const express = require('express');

const app = express();
const conn = require('./db/conn');
const Post = require('./models/Post');
const postRoutes = require('./routes/postRoutes');


app.use(express.json());
app.use('', postRoutes)



conn.sync().then(() => {app.listen(3000), console.log('Conectado ao servidor!')}).catch((error) => console.log('Erro no arquivo principal ao se conectar!      ',error))