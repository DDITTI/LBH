var http = require('http');
var fs = require('fs');
var server = http.createServer();
server.listen(3000, function() {
	console.log("Server is rining port 3000");
})
//请求回调函数
var handRequest = function(req, res) {
	console.log('当前的请求是:' + req.url);

	var url = req.url;
	if(url == "/login") {
		res.writeHead(200, {
			'Content-Type': 'text/html'
		});
		fs.readFile('./red.html', 'utf8', function(err, data) {
			if(err) {
				throw err;
			}

			res.end(data);

		})
	} else if(url != '/') {
		var surl = '.' + url;
		var type = surl.substr(surl.lastIndexOf(".") + 1, surl.length)
		res.writeHead(200, {
			'Content-type': "text/" + type
		});
		var ns = fs.readFile(surl, function(err, data) {
			if(err) {
				console.error(err);
				return;
			}
			res.end(data);
		});
	} else {

		res.writeHead(200, {
			'Content-Type': 'text/html'
		});
		fs.readFile('./green.html', 'utf8', function(err, data) {
			if(err) {
				throw err;
			}

			res.end(data);

		})

	}
	//任何请求都会触发该事件
}
server.on('request', handRequest)