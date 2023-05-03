const express = require('express');
const cors = require('cors')
const bodyParser=require('body-parser')
const axios=require('axios')
const path = require('path')

const app = express();
app.use(cors());
app.use(bodyParser.urlencoded({
    extended: true
}));
app.use(bodyParser.json());


const port = process.env.PORT || 4000;

app.use('/', express.static(path.join(__dirname, 'build')))


app.post("/avatar", async function (req, res) {
    const result=await axios.post(`${process.env.ML_API}/avatar`,req.body)
    res.json(result.data);
});

app.listen(port);