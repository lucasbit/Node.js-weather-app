const path = require('path');
const express = require('express');
const hbs = require('hbs');

const app = express();

// Define paths for Express config
const publicDirectoryPath = path.join(__dirname,'../public');
const viewsPath = path.join(__dirname,'../templates/views');
const partialsPath = path.join(__dirname,'../templates/partials');

// Setup handlebars engine and views location
app.set('view engine','hbs');
app.set('views',viewsPath);
hbs.registerPartials(partialsPath);

// Setup static content directory to serve
app.use(express.static(publicDirectoryPath));


app.get('', (req,res) => {
res.render('index', {
    title: 'Weather App',
    name: 'Lukasz Linka'
});
});
app.get('/about',(req,res) => {
    res.render('about',{
        title: "About Me",
        name: "Lukasz Linka"
    })
})
app.get('/help',(req,res) => {
    res.render('help',{
        helpText: "This is some help text",
        title: "Help",
        name: "Lukasz Linka"
    })
})


app.get('/weather', (req,res)=>{
    if(!req.query.addres) {
        return res.send({
            error:"You need to provide adress"
        })
    }
    res.send([{
        addres: req.query.addres
    }
]);
})

app.get('/products',(req,res) => {
    if(!req.query.search) {
       return res.send({
            error: 'You must provide a search term'
        })
    }

    console.log(req.query.search);
    res.send({
        products:[]
    })
})

app.get ('/help/*',(req,res) => {
    res.render('404',{
        title: "404",
        name: "Lukasz Linka",
        errorMsg: "Article not found"
    })
})

app.get('*',(req,res)=> {
    res.render('404',{
        title: "404",
        name: "Lukasz Linka",
        errorMsg: "Page not found"
    })
})


app.listen(3000,() => {
    console.log('Server is up on port 3000');
});