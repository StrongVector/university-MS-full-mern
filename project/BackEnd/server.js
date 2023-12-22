const express = require('express')
const app = express()
const port = 4000
const cors = require('cors');

app.use(cors());
app.use(function (req, res, next) {
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
  await mongoose.connect('mongodb+srv://admin:admin@cluster-data-rep.qntmqcp.mongodb.net/?retryWrites=true&w=majority')
}

const bookSchema = new mongoose.Schema({
  title: String,
  description: String,
  status: String,
  POC: String,
  lat: String,
  lon: String
})

const complaintModel = mongoose.model('db', bookSchema);

app.delete('/api/complaint/:id', async (req, res) => {
  console.log("Delete: " + req.params.id);

  let book = await complaintModel.findByIdAndDelete(req.params.id) //find id and delete
  res.send(book);

})

app.put('/api/complaint/:id', async (req, res) => {
  console.log("Update: " + req.params.id);

  let book = await complaintModel.findByIdAndUpdate(req.params.id, req.body, { new: true });
  res.send(book);
})

app.post('/api/complaint', (req, res) => {
  console.log(req.body);

  complaintModel.create({
    title: req.body.title,
    description: req.body.description,
    status: 'just uploaded to databse',
    POC: req.body.POC,
    lat: req.body.lat,
    lon: req.body.lon
  })
    .then(() => { res.send("Book Created") })
    .catch(() => { res.send("Book NOT Created") });

})

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.get('/api/complaints', async (req, res) => {

  let books = await complaintModel.find({});
  res.json(books);
})

app.get('/api/complaint/:identifier', async (req, res) => {
  console.log(req.params.identifier);

  let book = await complaintModel.findById(req.params.identifier);
  res.send(book);
})

//find a specific Complaint by id
app.get('/complaint/:id', async(req, res) => {
    let Complaint = await complaintModel.findById(req.params.id);
    console.log(req)
    res.send(Complaint);
});

//edit a Complaint
app.put('/EditComplaint/:id', async(req, res) => {
  console.log("update:" + req.params.id);
 
  let trainer = await complaintModel.findByIdAndUpdate(req.params.id, req.body, {new: true});
  res.send(trainer);//resend to book.js to change the mapping
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})