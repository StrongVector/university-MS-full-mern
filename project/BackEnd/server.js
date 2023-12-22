// importing libraries
const express = require('express')
const app = express()
const port = 4000
const cors = require('cors');

// cors rules specified
app.use(cors());
app.use(function (req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE, OPTIONS");
  res.header("Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

// body barser library imported
const bodyParser = require("body-parser");

// configuring express to use body-parser as middle-ware.
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// importing mongoose for connecting to db
const mongoose = require('mongoose');

// log errors in case of them
main().catch(err => console.log(err));

// async function to connect to mongo db 
async function main() {
  await mongoose.connect('mongodb+srv://admin:admin@cluster-data-rep.qntmqcp.mongodb.net/?retryWrites=true&w=majority')
}

// Schema created
const ComplaintSchema = new mongoose.Schema({
  title: String,
  description: String,
  status: String,
  POC: String,
  lat: String,
  lon: String
})

// Model selected
const complaintModel = mongoose.model('db', ComplaintSchema);

// Delete call
app.delete('/api/complaint/:id', async (req, res) => {
  console.log("Delete: " + req.params.id);
  let complaint = await complaintModel.findByIdAndDelete(req.params.id) //find id and delete
  res.send(complaint);
})

// put / update call
app.put('/api/complaint/:id', async (req, res) => {
  console.log("Update: " + req.params.id);
  let complaint = await complaintModel.findByIdAndUpdate(req.params.id, req.body, { new: true });
  res.send(complaint);
})

// post / create call
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
    .then(() => { res.send("complaint Created") })
    .catch(() => { res.send("complaint NOT Created") });

})

// first get
app.get('/', (req, res) => {
  res.send('Hello World! This is FixMyStreets.ie!')
})

// get all complaints from users
app.get('/api/complaints', async (req, res) => {
  let complaints = await complaintModel.find({});
  res.json(complaints);
})

// get complaint by id
app.get('/api/complaint/:identifier', async (req, res) => {
  console.log(req.params.identifier);
  let complaint = await complaintModel.findById(req.params.identifier);
  res.send(complaint);
})

//find a specific Complaint by id
app.get('/complaint/:id', async (req, res) => {
  let Complaint = await complaintModel.findById(req.params.id);
  console.log(req)
  res.send(Complaint);
});

//edit a Complaint
app.put('/EditComplaint/:id', async (req, res) => {
  console.log("update:" + req.params.id);
  let complaint = await complaintModel.findByIdAndUpdate(req.params.id, req.body, { new: true });
  res.send(complaint);//resend
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})