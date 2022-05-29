import express from 'express';

const app =  express();

require('dotenv').config();
app.set('port', process.env.PORT || 3000);

app.listen(app.get('port'),()=>{
    console.log(`Server running  in ${app.get('port')}`);
})

