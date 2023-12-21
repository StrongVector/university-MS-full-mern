const express = require('express')
const app = express()
const port = 4000
const cors = require('cors');

// const parser = require('parser');

app.use(cors());
app.use(function(req, res, next) {
res.header("Access-Control-Allow-Origin", "*");
res.header("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE, OPTIONS");
res.header("Access-Control-Allow-Headers",
"Origin, X-Requested-With, Content-Type, Accept");
next();
});

const bodyParser = require("body-parser");

//Here we are configuring express to use body-parser as middle-ware.
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());


// getting-started.js
const mongoose = require('mongoose');

main().catch(err => console.log(err));

async function main() {
  // await mongoose.connect('mongodb_src://admin:admin@cluster-data-rep.qntmq.mongodb.net/')
  await mongoose.connect('mongodb+srv://admin:admin@cluster-data-rep.qntmqcp.mongodb.net/?retryWrites=true&w=majority')
  // await mongoose.connect('mongodb+srv://caolanmichaelmaguire:CNVJSABDK4ULSD@cluster-data-rep.qntmqcp.mongodb.net/');

  // use `await mongoose.connect('mongodb://user:password@127.0.0.1:27017/test');` if your database has auth enabled
}

const bookSchema = new mongoose.Schema({
  title:String,
  description:String,
  status:String,
  POC:String,
  lat:String,
  lon:String
})

const bookModel = mongoose.model('db', bookSchema);

app.delete('/api/book/:id', async (req, res)=>{
  console.log("Delete: "+req.params.id);

  let book = await bookModel.findByIdAndDelete(req.params.id) //find id and delete
  res.send(book);

})


app.put('/api/book/:id', async(req, res)=>{
  console.log("Update: "+req.params.id);

  let book = await bookModel.findByIdAndUpdate(req.params.id, req.body, {new:true});
  res.send(book);
})

app.post('/api/book', (req,res)=>{
    console.log(req.body);

    bookModel.create({
      title:req.body.title,
      description:req.body.description,
      status:'just uploaded to databse',
      POC:req.body.POC,
      lat:req.body.lat,
      lon:req.body.lon
    })
    .then(()=>{ res.send("Book Created")})
    .catch(()=>{ res.send("Book NOT Created")});

})

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.get('/api/books', async(req, res)=>{
    
  let books = await bookModel.find({});
  res.json(books);
})

app.get('/api/book/:identifier',async (req,res)=>{
  console.log(req.params.identifier);

  let book = await bookModel.findById(req.params.identifier);
  res.send(book);
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})