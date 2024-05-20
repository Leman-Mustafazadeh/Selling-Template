
const mongoose = require('mongoose');
const express = require('express');
const app = express();
const cors = require('cors')
const bodyParser = require('body-parser')


app.use(bodyParser.json())
const CONNECTION_STRING = "mongodb+srv://Laman:laman2004@cluster0.9fwl8gv.mongodb.net/"
const PORT = 4040
const DB_PASSWORD = "laman2004"
const DB_USERNAME = "Laman"
app.use(cors())

const SellingSchema = new mongoose.Schema({
    imgSrc: String,
    name: String,
    title: String
}, { timeStamps: "true" })


const SellingModel = mongoose.model("Selling", SellingSchema)
app.get("/selling", async (req, res) => {
    const sell = await SellingModel.find()
    if (sell.length > 0) {
        res.send({
            message: "succces",
            data: sell
        })
    } else {
        res.send({
            message: "not found",
            data: null
        })
    }
})

app.get("/selling/:id", async (req, res) => {
    const { id } = req.params
    let sell
    try {
        sell = await SellingModel.findById(id)
    }
    catch (error) {
        res.send({ error: error })
    }
    if (sell) {
        res.send({
            message: "suces",
            data: sell
        })
    } else {
        res.send({
            message: "not found",
            data: null
        })
    }
})


app.delete("/selling/:id", async (req, res) => {
    const { id } = req.params
    let sell
    try {
        sell = await SellingModel.findByIdAndDelete(id)
    }
    catch (error) {
        res.send({ error: error })
    }
    res.send({
        message: "deleted",
        data: sell
    })
})

app.post("/selling", async (req, res) => {
    const sell =  new SellingModel(req.body)
    await sell.save()
  res.send({
        message: "post",
        data: sell
    })
})



app.patch("/selling/:id", async (req, res) => {
    const {id } = req.body
    const sell = await  SellingModel.findByIdAndUpdate(id,req.body)
    const sells = await SellingModel.findById(id)
  res.send({
        message: "patch",
        data: sells
    })
})

mongoose.connect(CONNECTION_STRING).then(()=>{
    console.log("connected");
})

app.listen(PORT, function () {
    console.log(`CORS-enabled web server listening on port ${PORT}`)
})