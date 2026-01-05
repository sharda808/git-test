const fs = require('fs')
const {URLSearchParams} = require('url');
const RequestHandler = (req,res) => {
  console.log( 'Request Received',req.url,req.method);
  res.setHeader('Content-Type','text/html');
if(req.url === "/"){
res.write(`
<!DOCTYPE html>
<html lang="en">
<head>

  <title>Myntra</title>
</head>
<body>
<h1>Welcome to first server</h1>
<form action="/buy-product" method ="POST">
<input type="text" placeholder="Enter the product that you want" name="product">
<br />
<input type="text" placeholder="Enter your budget" name="budget">
<input type="submit">
</form>
</body>
</html>
  `)
  res.end();
}else if(req.url ==='/buy-product'){
  console.log("Form data Received");
const arr = [];
  req.on('data',(chunk) => {
    console.log(chunk);
    arr.push(chunk);
  });
  req.on('end',() => {
const body = Buffer.concat(arr).toString();
const urlParams =  new URLSearchParams(body);
const bodyJson = {};

for(const [key,value] of urlParams.entries()){
  bodyJson[key] = value;
}
  fs.writeFile('product.text', JSON.stringify(bodyJson),(err) => {
  res.statusCode = 302;
res.setHeader('Location','/products');
res.end();
console.log("Sending Response");
  });
  });

}
 else if(req.url === "/products"){
  res.write(`
  <!DOCTYPE html>
<html lang="en">
<head>

  <title>Products</title>
</head>
<body>
  <h1>Product list will appear here</h1>
</body>
</html>
  `);
  res.end();
}
else{
  res.statusCode = 404;
    res.write(`
  <!DOCTYPE html>
<html lang="en">
<head>

  <title>page Not found</title>
</head>
<body>
  <h1>404 Page not Found</h1>
</body>
</html>
  `);
  res.end();
}

}
// module.exports ={
//   handler: RequestHandler
// };
exports.handler = RequestHandler;