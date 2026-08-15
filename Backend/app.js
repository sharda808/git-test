const http = require('http');
console.log('I was here');
requestHandler = (req,res) => {
  console.log('I was here in handler');
}
http.createServer(requestHandler);