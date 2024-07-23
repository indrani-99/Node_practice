// //Built in module
// const fs = require("fs"); // fs stands for file system

// //new file creation
// fs.writeFile("demo.txt", "My demo file", (err) => {
//   if (err) {
//     console.log("Not able to create file");
//   } else {
//     console.log("file created");
//   }
// });

// //read file
// fs.readFile("demo.txt", "utf-8", (err, data) => {
//   if (err) {
//     console.log(err);
//   } else {
//     console.log(data);
//   }
// });

// //file overwright
// fs.writeFile("demo.txt", "My overwright demo file", (err) => {
//   if (err) {
//     console.log("Not able to create file");
//   } else {
//     console.log("file created");
//   }
// });

// //delete file
// fs.unlink("demo1.txt", (err) => {
//   if (err) console.log(err);
//   else console.log("file deleted successfully");
// });

// //append file
// const data = "\n" + "New data";
// fs.appendFile("demo.txt", data, (err) => {
//   if (err) console.log(err);
//   else console.log("data appended successfully");
// });



// // os stands for operating system
// const os=require('os');
// console.log(os.homedir());
// console.log(os.hostname());
// console.log(os.userInfo());


//path
const path=require('path');
console.log(path.extname('index.html')); 

