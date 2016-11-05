var http = require("http")
var os = require("os")
http.createServer(function(request, response) {
	console.log("New request arrived.");

	var template = require("art-template");
	var data = {
					list: [
						{id: '1', name: '张三'},
						{id: '2', name: '李四'}
					]
				};
	var html = template('./index', data)


	response.writeHead(200, {"Content-Type": "text/html"});
	response.write(html);
	response.end();
}).listen(3000);

console.log("Server is running, listening on port 3000...");