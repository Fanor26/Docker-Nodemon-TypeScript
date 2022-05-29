import express from 'express';
import IndexRoutes from './routes/index'
import ComentRoutes from './routes/comentarios'
const app =  express();

require('dotenv').config();
app.set('port', process.env.PORT || 3000);

app.use('/saludos', IndexRoutes)
app.use('/comentarios', ComentRoutes)
app.get('/', (req,res) =>{
    res.send('Hello World Typescript');
})

app.listen(app.get('port'),()=>{
    console.log(`Server running  in ${app.get('port')}`);
})

