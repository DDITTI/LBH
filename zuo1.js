var http = require('http')
var fs = require("fs")
http.createServer((req,res)=>{
	if(req.url == '/favicon.ico') {
		return
	}
	if(req.url=="/"){
		fs.readFile("./index.html","utf-8",(err,data)=>{
			res.end(data)
		})
	}else if(req.url=="/about"){
		fs.readFile("./about.html","utf-8",(err,data)=>{
			res.end(data)
		})
	}else{
		fs.readFile("./404.html","utf-8",(err,data)=>{
			res.end(data)
		})
	}
}).listen(3000)
