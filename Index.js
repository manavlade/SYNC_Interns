const { json } = require('body-parser');
const express = require('express');
const cors = require('cors');
const app = express();
app.use(express.json());
app.use(cors());
app.post('/register', (req, resp) =>{
    resp.send(req.body)
})

app.listen(5000);