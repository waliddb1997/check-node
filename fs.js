var fs = require('fs');
  fs.readFile('welcome.txt', function (err,data) {
    err? console.log(err) : console.log(data.toString());
  });