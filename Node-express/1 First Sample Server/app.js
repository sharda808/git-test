 const http = require('http');
 console.log('I was here');
 function requestHandler(req,res) {
console.log('Request Received', req.url, req.method, req.headers);
res.setHeader('Content-Type','text/html');
if(req.url === "/"){
res.write(`
  <!DOCTYPE html>
<html lang="en">
<head>

  <title>Home</title>
</head>
<body>
 <h1>Welcome to First Server</h1> 
</body>
</html>
  `);
}
else if (req.url === "/products"){
 res.write(`
  <!DOCTYPE html>
<html lang="en">
<head>

  <title>Products</title>
</head>
<body>
 <h1>Products list will appear here</h1> 
</body>
</html>
  `); 
}
else{
   res.write(`
  <!DOCTYPE html>
<html lang="en">
<head>

  <title>page Not Found</title>
</head>
<body>
 <h1>404 parg not Found</h1> 
</body>
</html>
  `); 
}
}
res.end();
 }

 const server = http.createServer(requestHandler);
 const PORT = 3000
server.listen(PORT ,() =>{
  console.log(`Server running at :http://localhost:${3000}`);

});