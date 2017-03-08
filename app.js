const express = require( 'express' );
const volleyball = require('volleyball');
const nunjucks = require('nunjucks');
const app = express();
const tweets = require('./tweetBank'); // creates an instance of an express application
const routes = require('./routes');
const fs = require('fs');


//app.use('/', routes);

app.set('view engine', 'html');
app.use(volleyball);
//to make app.use always run, we place it in top
// app.use(function (req, res, next) {
//     console.log(req);
//     next();
// })



app.get('/stylesheets/style.css', function(request, response) {

      response.sendFile(__dirname + '/public/stylesheets/style.css');

  })


nunjucks.configure('views', {noCache: true, autoescape: true,
    express: app});



//just establish connection once
app.listen(3000, function () {
  console.log('Example app listening on port 3000!')
})
