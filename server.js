var express = require('express');

var app = express();

app.get('/', function(request, response) {
   response.json({
      name: 'Kim Gordon',
      instrument: 'Bass' 
   }); 
});

app.get('/:headers', function(request, response) {
      
});

app.get('/:headers/:header_name', function(request, response){
      
});
app.listen(8080);