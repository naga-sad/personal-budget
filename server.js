const express = require('express');
const app = express();
const port =3040;
const data=require('./data.json');
app.use('/', express.static('public'));

const budget ={
    myBudget:[
    {
        title: 'Eat out',
        budget:30
    
    },
    {
        title:'Rent',
        budget:350
    },
    {
        title:'Groceries',
        budget:90
    },
]
};
app.get('/hello',(req,res) => {
    res.send('Hello World!');

});
app.get('/budget',(req,res)=>{
    res.json(data);
    
})
app.listen(port, () => {
  console.log(`Serving at http://localhost:${port}`)
});