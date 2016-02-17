// Get reference to express.
var express = require('express');

// Get an instance of express.
var app = express();

var port = process.env.PORT || 5000;

var nav = [{
    Link: '/Books',
    Text: 'Books'
                }, {
    Link: '/Authors',
    Text: 'Authors'
                }];

var bookRouter = require('./src/routes/bookRoutes')(nav);

app.use(express.static('public'));
//app.use(express.static('src/views'));
app.set('views', './src/views');

//var hadlebars = require('express-handlebars');
//app.engine('.hbs', hadlebars({
//    extname: '.hbs'
//}));

app.set('view engine', 'ejs');

app.use('/Books', bookRouter);

//app.get('/', function (req, res) {
//    //res.send('Hello World!');
//    res.render('index', {
//        title: 'Hello from render',
//        nav: nav
//    });
//});
//
//app.get('/books', function (req, res) {
//    res.send('Hello Books!');
//});

app.listen(port, function (err) {
    console.log('running server on port ' + port);
});