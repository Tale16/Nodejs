const http = require('http');
const fs = require('fs'); //file system module to read and write files


const server = http.createServer((req, res) => {
  // console.log(req.url, req.method, req.headers); 

  if(req.url === '/'){
    res.setHeader('Content-Type', 'text/html'); 
  res.write('<html>');
  res.write('<head><title>Complete Coding</title></head>');
  res.write('<body><h1>Enter Your Details: </h1>');
  res.write('<form action="/submit-details" method="POST">'); //action is the url where the form will be submitted and method is the type of request (GET or POST)
  res.write('<input type="text" name="username" placeholder="Enter your name"><br>');
  res.write('<label for="male">Male</label>');
  res.write('<input type="radio" id=male name="gender" value="male">')
  res.write('<label for="female">Female</label>');
  res.write('<input type="radio" id=female name="gender" value="female">')
  res.write('<br><input type="submit">');
  res.write('</form>');

  res.write('</body>');
  res.write('</html>');
  return res.end(); 
  }else if (req.url.toLowerCase() === '/submit-details' && req.method == 'POST'){ //check if the url is /submit-details and method is POST
    fs.writeFileSync('user.txt', 'Chinmayee Tale'); //write the data to a file (synchronous)
    res.statusCode = 302; //set the status code to 302 (redirect)
    res.setHeader('Location', '/'); //set the location header to redirect to the home page
  }
  res.setHeader('Content-Type', 'text/html'); 
  res.write('<html>');
  res.write('<head><title>Complete Coding</title></head>');
  res.write('<body><h1>Like / Share / Subscribe</h1></body>');
  res.write('</html>');
  res.end();

}); 

const PORT = 3000; 
server.listen(PORT, () => { 
  console.log(`Server running on adress http://localhost:${PORT}`)
});

