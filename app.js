const express = require("express")
const app = express()
const hbs = require('hbs')

app.set('view engine' , 'hbs')
app.use(express.static('public'))

hbs.registerPartials('./views/components')

app.get('/' , (req , res)=>{
    res.render('home')
})

app.get('/weather' , (req , res)=>{
    res.render('weather')
})

app.use((req , res)=>{
    res.render('404')
})


app.listen(3000  , ()=>{
    console.log('listening at port 3000');
})