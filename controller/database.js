
const mongoose = require('mongoose');

mongoose
    .connect(process.env.DATABASE, {
        useNewUrlParser: true,
        useCreateIndex: true,
        useUnifiedTopology: true,
        useFindAndModify: false
    })
    .then(()=> {
        console.log('Connected to database')
    })
    .catch((err)=> {
        console.log('Failed to connect to database. Code: ')
        console.log(err)
    })