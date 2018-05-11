var express = require('express')
var app = express();
var path = require("path");

const PORT = 3000;

// respond with "hello world" when a GET request is made to the homepage
app.get('/', function (req, res) {
    res.sendFile(path.join(__dirname, 'index.html'));
})

app.get('/tables', function (req, res) {

    //getTableLIst();
    //res.send('All the Tables')
    res.sendFile(path.join(__dirname, 'tables.html'));
})

app.get('/reserve', function (req, res) {

    res.sendFile(path.join(__dirname, 'reservation.html'));
})

app.get('/api/tables', function (req, res) {
    //gettables();
    res.send('Your Tables Here')

})

app.get('/api/waitlist', function (req, res) {
    //getWaitList();
    res.send('Your WaitList Here')
})

app.listen(PORT, () => console.log('Example app listening on port 3000!'))