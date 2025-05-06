
const fs = require('fs'); 


const userRequestHandler = (req, res) => {
  console.log(req.url, req.method);

  if(req.url === '/'){
    res.setHeader('Content-Type', 'text/html'); 
  res.write('<html>');
  res.write('<head><title>Complete Coding</title></head>');
  res.write('<body><h1>Enter Your Details: </h1>');
  res.write('<form action="/submit-details" method="POST">');  
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
  }else if (req.url.toLowerCase() === '/submit-details' && req.method == 'POST'){ 

    const body = []; //create an empty array to store the data // const me array nahi change hoga but uska andar ka data change hoga
    req.on('data', (chunk) => {
      console.log(chunk);
      body.push(chunk); //push the data to the body array
    });

    req.on('end', () => { //we are not taking arguments(chunk) in this function because we are not passing any data to it we are just giving signal that the data is received
      const fullbody = Buffer.concat(body).toString(); //convert the buffer to string //concat combines all the chunked data into a single buffer
      console.log(fullbody); //log the data to the console
      const params = new URLSearchParams(fullbody); //create a new URLSearchParams object to parse the data //brk into key value pairs
      // const bodyObject = {}; //create an empty object to store the data //pehele brk/decode karo data ko
      // for (const [key, val] of params.entries()) { //loop through the params object and store the data in the bodyObject  //dusra ek ek karke key value dena aur start karo
      //   bodyObject[key] = val; //store the data in the bodyObject //[key] is used to access the key dynamically bcoz key is a variable  //tisra json obj me de do
      // }

      //another way to do the same thing
    const bodyObject = Object.fromEntries(params); //create an object from the params object //this will create an object with the same key value pairs as the params object

      console.log(bodyObject); //log the data to the console
      fs.writeFileSync('user.txt', JSON.stringify(bodyObject)); //write the data to a file (synchronous) //this will write the data to the file in the same format as the params object //JSON.stringify is used to convert the object to a string //this will create a file with the name user.txt and write the data to it
    })

     
    res.statusCode = 302; 
    res.setHeader('Location', '/'); 
  }
  res.setHeader('Content-Type', 'text/html'); 
  res.write('<html>');
  res.write('<head><title>Complete Coding</title></head>');
  res.write('<body><h1>Like / Share / Subscribe</h1></body>');
  res.write('</html>');
  res.end();

}; 

module.exports = userRequestHandler; //export the requestHandler function so that it can be used in other files //this will allow us to use the requestHandler function in the app.js file

