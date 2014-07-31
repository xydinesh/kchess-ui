var express = require('express');
var app = express();
app.use('/', express.static(__dirname + '/public'));
app.use(express.logger('small'));

app.listen(3000);
