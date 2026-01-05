const http = require('http');
const fs = require('fs')

const requestHandler = (req,res) => {
  console.log( 'Request Received',req.url,req.method);
  res.setHeader('Content-Type','text/html');
  res.write(`
<!DOCTYPE html>
<html lang="en">
<head>

  <title>WelCome</title>
</head>
<body>
  <nav>
 <a href="Home"> Home</a>
 <a href="Men"> Men</a>
 <a href="Women"> Women</a>
 <a href="#"> Kids</a>
  <a href="#"> Cart</a>
  </nav>
</body>
</html>
    `)
    if(req.url ==='/Home'){
       res.write(`
<!DOCTYPE html>
<html lang="en">
<head>

  <title>Home</title>
</head>
<body>
<h1>Welcome to Home</h1>
</body>
</html>
    `) 
    }
    else if(req.url==='/Men'){
            res.write(`
<!DOCTYPE html>
<html lang="en">
<head>

  <title>Women</title>
</head>
<body>
<h1>Welcome to Men </h1>
</body>
</html>
    `) 
    }
        else if(req.url==='/Women'){
            res.write(`
<!DOCTYPE html>
<html lang="en">
<head>

  <title>Kids</title>
</head>
<body>
<h1>Welcome to Women</h1>
</body>
</html>
    `) 
    }
  
    res.end();
  }
  const server = http.createServer(requestHandler);
 const PORT = 3001;
  server.listen(PORT ,() => {
    console.log(`Server running at: http://localhost:${PORT}`);
  })