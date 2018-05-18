var express = require ('express');
var path = require('path');
var app = express();
var server = app.listen(3000, listening);

function listening() {
    console.log("listening . . .");
}
// configure app
// npm i ejs:

app.set('view engine', 'ejs');

app.set('views', path.join(__dirname, 'views'));


// app.get('/', function (req, res) {
//     res.send('Hello, express!')
// })

app.get('/', function (req, res) {
    res.render('index')
})

// app.use(express.static(path.join(__dirname, 'static')));
