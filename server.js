var express = require('express');
var app = express();
var PORT = process.env.PORT || 8080;
var parseString = require('xml2js').parseString;
var request = require('superagent');

var ZID = process.env.ZID;

app.use(express.static(__dirname));

app.get('/token', function(req, res) {
	res.json({accessToken: process.env.accessToken});
});

app.get('/neighborhoods', function(req, res) {
	var url = 'http://www.zillow.com/webservice/GetRegionChildren.htm?zws-id=' + ZID + '&state=wa&city=seattle&childtype=neighborhood';
	request
		.get(url)
		.end(function(err, data) {
		console.log(data.header); //Cache-controll was set to no-cache by Zillows 
			if (err) {
				console.log(err);
			} else {
				res.set({
					'Cache-Control': 'max-age=3600'
				})
				res.send(data.text);
			}
		})
});

app.get('/:name', function(req, res) {
  var name = req.params.name;
  var url = 'http://www.zillow.com/webservice/GetDemographics.htm?zws-id=' + ZID + '&state=WA&city=Seattle&neighborhood=' + name;
  request
  .get(url)
  .end(function(err,data) {
    if (err) {
      console.log('err', err);
    }
		res.header('Cache-Control', 'max-age=3600');
    res.send(data.text);
  });
});


app.listen(PORT, function() {
  console.log('\nServer is running on port ' + PORT + '.....\n');
});
