// content of index.js
const http = require('http')  
const express = require('express')  
const port = process.env.PORT || 8080

const path = require('path');


app = express();

app.set('views', path.join(__dirname));
// changes
app.set('port', port);
app.use(express["static"](path.join(__dirname, '/public')));

router = express.Router();
router.get('/', (req, res) => {
  res.sendFile(__dirname + '/index.html')
})

app.use('/', router)

const server = http.createServer(app)

server.listen(port, 'localhost', (err) => {  
  if (err) {
    return console.log('something bad happened', err)
  }


  console.log(`server is listening on ${port}`)
})
