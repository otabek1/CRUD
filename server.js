const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

const app = express();

const port = 8000;
app.use(bodyParser.urlencoded({ extended: true }));

const url = 'mongodb+srv://admin:usfscp2022@cluster0.frnpd.mongodb.net/myFirstDatabase?retryWrites=true&w=majority';


mongoose.connect(url, { useNewUrlParser: true });
const con = mongoose.connection;



app.get('/', (req, res) => {
  
    res.send('Hello World!');
});

app.use(express.json());
try {
    con.on('open', () => {
        console.log('connected');
    })
} catch (error) {
    console.log("Error: " + error);
}

const studentrouter = require("./routes/students");
app.use('/students', studentrouter)



app.listen(port, () => {
    console.log('Server started');
})

