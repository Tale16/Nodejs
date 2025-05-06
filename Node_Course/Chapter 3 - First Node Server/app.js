const http = require('http');

// function requestListener(req, res){
//   console.log(req);
// }
// http.createServer(requestListener); //function reference passed from above so server will be created



const server = http.createServer((req, res) => {
  console.log(req);
}); //anonymous function

const PORT = 3000; //server starts 
server.listen(PORT, () => { //arrow anonymous function
  console.log(`Server running on adress http://localhost:${PORT}`)
  process.exit()
});

//by ctrl+C we can stop the server