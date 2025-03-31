const express = require('express');
const app = express();

app.use(express.json());

app.get('/',()=>{
    res.json({message:'Server /'});
})

app.listen(3000,()=>{
    console.log(`Server started`);
})