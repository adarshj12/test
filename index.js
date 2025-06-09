const express = require('express');
const app = express();

app.use(express.json());

app.get('/',(req,res)=>{
    res.json({message:'Server App 5'});
})

app.listen(3000,()=>{
    console.log(`Server started`);
})