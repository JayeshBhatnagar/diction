const express = require('express')
var axios = require("axios")
const app = express()
const port = 3000
const path=require("path")

app.get('/', (req, res) => {
console.log(path.join(__dirname,'public')) 
return res.sendFile('public/index.html', {root: __dirname}) ;
})
app.get('/searchword', (req, res) => {
 // res.send('Hello World! hello jayesh')
  console.log(req.query)
var options = {
  method: 'GET',
  url: 'https://twinword-word-graph-dictionary.p.rapidapi.com/association/',
  params: {entry:req.query.entry},
  headers: {
    'X-RapidAPI-Host': 'twinword-word-graph-dictionary.p.rapidapi.com',
    'X-RapidAPI-Key': '563fa6c3a2msh64a664936a051d8p173f2ejsn4dd611360232'
  }
};

axios.request(options).then(function (response) {
res.json(response.data)
}).catch(function (error) {
  console.error(error);
}); 
// let response ={}
// response.data={
//   entry: 'fantastic',
//   request: 'fantastic',
//   response: 'fantastic',
//   assoc_word: [ 'wonderful', 'brilliant', 'extraordinary' ],
//   assoc_word_ex: [ 'wonderful', 'brilliant', 'extraordinary', 'fabulous', 'splendid' ],
//   version: '7.5.5',
//   author: 'twinword inc.',
//   email: 'help@twinword.com',
//   result_code: '200',
//   result_msg: 'Success'
// }

})

app.listen(port, () => {
  console.log(`Example app listening on port ${port} - http://localhost:3000`)
})