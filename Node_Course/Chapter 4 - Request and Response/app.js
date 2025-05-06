const http = require('http');



const server = http.createServer((req, res) => {
  console.log(req.url, req.method, req.headers); //log the request url, method and headers

  if(req.url === '/'){
    res.setHeader('Content-Type', 'text/html'); //set header to html
  res.write('<html>');
  res.write('<head><title>Complete Coding</title></head>');
  res.write('<body><h1>Welcome to Home</h1></body>');
  res.write('</html>');
  return res.end(); //this will not kill the response right away and can render different pages
    
  }else if (req.url === '/product'){ {
    res.setHeader('Content-Type', 'text/html'); //set header to html
  res.write('<html>');
  res.write('<head><title>Complete Coding</title></head>');
  res.write('<body><h1>Checkout Product</h1></body>');
  res.write('</html>');
  return res.end();
  }
  res.setHeader('Content-Type', 'text/html'); //set header to html
  res.write('<html>');
  res.write('<head><title>Complete Coding</title></head>');
  res.write('<body><h1>Like / Share / Subscribe</h1></body>');
  res.write('</html>');
  res.end(); // Properly terminate the response (will end it) if this is appilied everywhere then it will show error and will not set header after they sent to the client //at last is optional if you want to return end or not
}
}); 

const PORT = 3000; 
server.listen(PORT, () => { 
  console.log(`Server running on adress http://localhost:${PORT}`)
});

