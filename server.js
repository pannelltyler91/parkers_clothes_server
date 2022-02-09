//this is going to be our server
const express = require('express')
const app = express()
const cors = require('cors')
const port = process.env.PORT || 3001;
app.use(express.json())
app.use(cors())
app.use(
    express.urlencoded({
      extended: true,
    })
);

app.post('/checkout', (req, res) => {
    console.log(req.body)
    res.json({message: 'its working'})
})


app.listen(port, () => {
    console.log(`Listening on port: ${port}`)
})