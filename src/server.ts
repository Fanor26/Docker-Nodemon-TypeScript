import express from 'express';
import bodyParser from 'body-parser';
import IndexRoutes from './routes/index'
import ComentRoutes from './routes/comentarios'
const app =  express();

app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json());

require('dotenv').config();
app.set('port', process.env.PORT || 3000);

app.use(express.urlencoded({extended:false}));
app.use(express.json());


app.use('/', IndexRoutes)
app.use('/comentarios', ComentRoutes)

import './database';

app.listen(app.get('port'),()=>{
    console.log(`Server running  in ${app.get('port')}`);
})

