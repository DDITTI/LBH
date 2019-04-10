var http = require('http');
var fs = require('fs');
http.createServer((req,res)=>{
    if(req.url == '/favicon.ico') {
		return
	}
	if(req.url=="/"){
		fs.readFile("./green.html","utf-8",(err,data)=>{
			res.end(data)
        })
     }   
    else if(req.url=="/01.css"){
		fs.readFile("./01.css","utf-8",(err,data)=>{
			res.end(data)
	})
    }else if(req.url=="/64042482_p0.png"){
		fs.readFile("./64042482_p0.png",(err,data)=>{
			res.end(data)
	})
	}else if(req.url=="/red"){
		fs.readFile("./red.html","utf-8",(err,data)=>{
			res.end(data)
		})
    }
    
}).listen(3000)