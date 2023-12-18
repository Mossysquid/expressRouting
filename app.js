const express = require('express')
const app = express()
const port = process.env.PORT || 3005

app.use(express.static('stuff'));
app.post(/i*apple$/, (req, res)=>{
    res.send('\nWe have an apple for you\n')
})
app.get('/coloe?u?r',(req, res ) =>{
    res.setEncoding('\ngot you\n')
});

app.get(/i*fly$/, (req, res)=>{
    res.send('\nIt is true\n')
})
app.route('banana')
.get((req,res)=>{
    res.send('get request/n')
})
.put((req, res)=>{
    res.send('get put/n')
})
.delete((req, res)=>{
    res.send('get delete/n')
})
app.listen(port, ()=>{
    console.log(`on port ${port}, ${process.env.PORT}`);
});