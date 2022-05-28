const express = require("express")
const app = express()
const PORT = 3001
const BodyParser = require("body-parser")
const cors = require("cors")
const logger = require("morgan")

//MONGO DB CONNECTION
const { MongoClient, ServerApiVersion } = require("mongodb")
const uri = "mogouri"
const client = new MongoClient(uri, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  serverApi: ServerApiVersion.v1,
  useUnifiedTopology: true,
})

app.use(logger("dev"))
app.use(cors())
app.use(BodyParser.urlencoded({ extended: false }))
app.use(BodyParser.json())

app.get("/", (req, res) => {
  res.send("backend homepage")
})

app.post("/", (req, res) => {
  let data = req.body
  client.connect(err => {
    const collection = client.db("owasp").collection("formdata")
    collection.findOne({ "data.email": data.email }).then(doc => {
      console.log(doc)
      if (!doc) {
        collection.insertOne({ data }, err => {
          if (err) return console.log(err)
          res.send("data inserted succesfully")
          client.close()
        })
      } else {
        console.log("entry already exists")
        res.send("email already registered")
      }
    })
  })
})

app.listen(PORT, () => {
  console.log(`example app listening on port ${PORT}!`)
})

module.exports = app
