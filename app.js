var express = require('express');
var exphbs  = require('express-handlebars');
var paginate = require('handlebars-paginate');
var Handlebars = require('handlebars');
const helpers = require('./helpers')
const path = require('path')

var app = express();

const hbs = exphbs.create({
    partialsDir: __dirname + '/views/partials',
    helpers: helpers()
  })


app.engine('handlebars', hbs.engine);
app.set('view engine', 'handlebars');
app.enable('view cache');
app.set('views', __dirname + '/views');
Handlebars.registerHelper('paginate', paginate);
app.use(express.static(path.resolve(__dirname, 'public'))) // serve static files

const routeHome = require('./routes/home')

const routeAbout = require('./routes/about')

const routeJobs =  require('./routes/job')
app.get('/', (req, res, next) => routeHome(req, res, next))

app.get('/about', (req, res, next) => routeAbout(req, res, next))
app.get('/job/:id', (req, res, next) => routeJobs(req, res, next))

 
app.listen(3000, () => {
  console.log('The web server has started on port 3000');
});