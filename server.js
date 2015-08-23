/// </// <reference path="typings/tsd.d.ts" />
var express = require('express');

var app = express();

app.get('/', function(request, response) {
   response.json({
      name: 'Kim Gordon',
      instrument: 'Bass' 
   }); 
});

app.get('/headers', function(request, response) {    
      response.json(request.headers);
});

app.get('/headers/:header_name', function(request, response){
      var headerRep = JSON.stringify(request.headers);
      response.send(headerRep);
      
      console.log(typeof headerRep);
});

app.get('/version', function(request, response){
      response.json(request.httpVersion);
});

app.listen(8080);