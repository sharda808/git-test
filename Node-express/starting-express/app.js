
const express = require('express');
const fs = require('fs');
const {URLSearchParams} = require('url');
const app = express();
// First Middleware
app.use ((req,res,next)=> {
console.log('Request Received', req.url,req.method);
next();

})
app.get("/",(req,res,next) => {
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
  `);
});
app.post("/buy-product", (req,res,next) => {
  res.send(`
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
      `)
})
app.get("/products",(req,res,next) => {
res.send(`
    <!DOCTYPE html>
<html lang="en">
<head>

  <title>Products</title>
</head>
<body>
  <h1>Product list will appear here</h1>
</body>
</html>
  `)
    
});
app.use((req,res,next) => {
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
</html>`)
})
res.end();
// const server = http.createServer(app);
const PORT = 3000;
app.listen(PORT ,() => {
  console.log(`Server running at: ://localhost:${PORT}`);
})

