const bodyParser = require('body-parser')
const express = require('express')
const path = require('path')
const cors = require('cors')
const fs = require('fs')
const app = express()

app.use(express.static(`${__dirname}/../public`))
app.use(bodyParser())
app.use(cors())

app.get('/test', (req, res) => {
  res.send('TEST PASSED')
})

app.get('/', function(req, res) {
    res.sendFile(path.resolve(`${__dirname}/../public/index.html`));
});

app.listen(3000, () => {
  console.log('Listening on http://localhost:3000.')
})
