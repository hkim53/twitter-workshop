const express = require( 'express' );
const volleyball = require('volleyball');
const nunjucks = require('nunjucks');
const app = express();
const tweets = require('./tweetBank'); // creates an instance of an express application


app.set('view engine', 'html');
app.use(volleyball);
//to make app.use always run, we place it in top
// app.use(function (req, res, next) {
//     console.log(req);
//     next();
// })
var locals = {
    title: 'An Example',
    people: [
        { name: 'Gandalf'},
        { name: 'Frodo' },
        { name: 'Hermione'}
    ]
};

nunjucks.configure('views', {noCache: true, autoescape: true,
    express: app});
app.get('/', function(req, res) {
    res.render('index', locals);
});

app.use('/special/', function (req, res, next) {
  res.send('Hello World!')
})

app.get('/', function (req, res, next) {
  res.send('Hello World!')
  console.log("goodbye world");
  next();
})

app.get('/news', function (req, res) {
  res.send('Get news')
})

//just establish connection once
app.listen(3000, function () {
  console.log('Example app listening on port 3000!')
})
