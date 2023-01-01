const PORT = process.env.PORT || 8080;
const express = require("express")
const cors = require('cors')
const app = express();
const everything = require('./data');
const cricket = require('./data1');
const politics = require('./data2');
const science = require('./data3');

app.use(cors())
app.use(express.json())

app.get('/news', (req, res) => {
    setTimeout(() => {
        if(req.query.q == "everything") {
            res.json(everything);
        } else if(req.query.q == "cricket") {
            res.json(cricket);
        } else if(req.query.q == "science") {
            res.json(science);
        } else if(req.query.q == "politics") {
            res.json(politics);
        } else {
            res.status(400).send("Please pass correct query");
        }
    })
});

app.listen(PORT, ()=>{
    console.log("Server connected");
})