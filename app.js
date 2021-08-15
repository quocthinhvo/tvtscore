const express = require('express');
const dotEnv = require('dotenv').config()
const app = express();
const port = process.env.PORT || 8000
const database = require('./controller/database')

app.use(express.static(__dirname + '/public'))
app.use(express.json())

app.get('/', (req, res)=> {
    res.sendFile(__dirname + '/public/index.html')
})

const xettuyen = require('./router/xettuyen')
app.use('/api/xettuyen', xettuyen)


app.listen(port, ()=>{
    console.log(`Server running at ${port}`)
})
