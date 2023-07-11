const express = require('express')
const wordsRouter = require('./routes/wordsRouter')
const rankRouter = require('./routes/rankRouter')
const app = express()

app.use(express.json()); // make express framwork identify json file that come from user/client

// Cross-Origin Resource Sharing issues
app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
    next();
  });
// routing
app.use('/word' , wordsRouter)
app.use('/rank' , rankRouter)


// test server running
// app.get('/', (req, res) => {
//     res.send('Hello World!')
//   })

const port = process.env.port || 8000

app.listen(port , () => {
    console.log(`server start in mode ${process.env.NODE_ENV} and on port ${port}`)
})