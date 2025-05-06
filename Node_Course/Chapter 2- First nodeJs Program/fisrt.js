console.log("KG coding is good")

const fs = require('fs') // File System module //includes all the file system related methods includes from module 
fs.writeFile("output.txt", "Writing File", (err) => { // writeFile method is used to write a file // takes 3 parameters 1st is file name, 2nd is data to be written, 3rd is callback function which takes err as parameter
  // if there is an error it will be passed to the err parameter, if no error occurs then err will be null
  if(err) console.log("Error occurred");
  else console.log("File written successfully"); // gives this op as this doesnt show any err parameter 
}); 