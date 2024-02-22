const fs = require("fs");

//fs.writeFileSync("./hello.txt","Hello yes");

//const data = fs.readFileSync("./hello.txt", {encoding:"utf-8"});
//console.log(data);

//txt에 추가적으로 넣고 싶다면
//fs.appendFileSync("./hello.txt", "\nWelcome");

//현재 경로를 보고 싶다면
const list = fs.readdirSync(".");
console.log(list);