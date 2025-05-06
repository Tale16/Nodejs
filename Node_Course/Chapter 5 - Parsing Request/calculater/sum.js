const sumRequestHandler = (req, res) => {
console.log("In Sum REquest Handler", req.url);
const body = [];

req.on('data', chunk => body.push(chunk)); // push the data chunks into the body array{
  req.on('end', () => {
  
  
    const bodyStr = Buffer.concat(body).toString();
    const params = new URLSearchParams(bodyStr); // parse the body string into URLSearchParams object
    const bodyObj = Object.fromEntries(params);
    const result = Number(bodyObj.first) + Number(bodyObj.second); // calculate the sum of first and second numbers
    console.log(result);
    res.setHeader("Content-Type", "text/html"); // set the content type to HTML
    res.write(`
    <html>
    <head><title>Practise Set</title></head>
    <body>
    <h1>Your Sum Is ${result}</h1>
    </body>
    </html>
    `);
      return res.end();
  })
}


exports.sumRequestHandler = sumRequestHandler; // export the sumRequestHandler function