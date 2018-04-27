var express = require('express');
var app = express();
// app.use(express.static('public'));
app.use(express.static('.'));

// app.get('/', function (req, res) {
// 	res.send('Hello World');
// });

app.listen(3000);
console.log('Server running at http://localhost:3000/');