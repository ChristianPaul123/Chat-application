var express = require('express');
var app = express();

//picture in server using express
app.use(express.static('public'));

// set the view engine to ejs
app.set('view engine', 'ejs');

// index page
app.get('/', function(req, res) {
  res.render('pages/index');
});


app.listen(8000);
console.log('Server is listening on port 8000');