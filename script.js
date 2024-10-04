// const fs= require('fs');
// fs.writeFile("het.txt","hello babe  e", function(err){
//     if(err) console.error(err);
//     else console.log("done");
// })

const express = require('express')
const app = express()

app.get('/', function (req, res) {
  res.send('Hello World')
})

app.get('/profile',function(req,res) {
    res.send('aage badh')
})
app.listen(3000)