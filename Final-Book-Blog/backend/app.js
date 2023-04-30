const express = require('express')
const app = express()
const port = 3000
const BookModel = require('./models/book') // db schema
const mongoose = require('mongoose')

mongoose.connect("mongodb+srv://tlkcv2:Tk190488@redcluster.wsdqz5e.mongodb.net/test?retryWrites=true&w=majority")
.then(()=>{
    console.log("Connected to database")
})
.catch(()=>{
    console.log("Failed to connect")
})

var bodyParser = require('body-parser') // need this to parse json

// disable CORS
app.use((req, res, next)=>{
  res.setHeader("Access-Control-Allow-Origin","*");
  res.setHeader(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  res.setHeader("Access-Control-Allow-Methods",
  "GET, POST, PATCH, DELETE, OPTIONS"
  );
  console.log('Middleware');
  next();
})

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended:false}))

// app.get('/', (req, res, next) =>{
//   res.send('Hello from express') // shows server is connected on its port
// })

app.use((req, res, next)=>{
  next();
})

// accept info from user and send to database
app.post("/api/library",(req,res,next)=>{
  //const book = req.body;
  const book = new BookModel({
    title: req.body.title,
    author: req.body.author,
    genre: req.body.genre,
    series: req.body.series,
    seriesTitle: req.body.seriesTitle,
    status: req.body.status,
    notes: req.body.notes,
    tag: req.body.tag
  })
  book.save().then(createBook=>{
  res.status(201).json({
    message:'Book added successful'
  });
})
})

app.get("/api/library",(req,res,next)=>{
  BookModel.find().then(documents => {
    res.status(200).json({
      message:'Book retrieval successful',
      books: documents
    });
  });
});

// app.use('/api/library',(req,res,next)=>{
//   const library = [
//     {
//       id: "6546654",
//       title:"1. First Title",
//       author:"This is the first author"
//     }
//   ]

//   res.status(200).json({
//     message:"This is fetched data",
//     library: library
//   });
// })

// app.post("/api/library",(req,res,next)=>{
//   const book = new BookModel({
//     title: req.body.title,
//     author: req.body.author
//   })
//   console.log(book)
//   res.status(201).json({
//     message:'Book added successful'
//   });
// })


module.exports = app
