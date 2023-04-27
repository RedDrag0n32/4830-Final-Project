const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res, next) =>{
  res.send('Hello from express')
})

app.use('/api/posts',(req,res,next)=>{
  const library = [
    {
      id: 6546654,
      title:"1. First Title",
      author:"This is the first author"
    }
  ]

  res.status(200).json({
    message:"This is fetched data",
    library: library
  });
})

module.exports = app
