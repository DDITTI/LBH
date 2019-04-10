exports.showAbout=showAbout
exports.showIndex=showIndex
exports.show404=show404
function showIndex(req,res){
    res.writeHead(200,{"COntent-type":"text/html;charset=UTF-8"})
    res.end("这是首要")
}
function showAbout(req,res){
    res.writeHead(200,{"COntent-type":"text/html;charset=UTF-8"})
    res.end("这是about")
    
}
function show404(req,res){
    res.writeHead(200,{"COntent-type":"text/html;charset=UTF-8"})
    res.end("这是404")
    
}