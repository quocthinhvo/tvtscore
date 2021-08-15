const express = require('express');
const XetTuyen = require('../model/xettuyen')
const router = express.Router()

router.get('/', (req, res)=> {
    let key = req.query.id || req.body.id || 0
    XetTuyen.findOne({id: key})
    .then((data)=>{
        if (!data) return res.status(404).send({message: 'Not Found'})
        res.status(200).send(data)
    })
    .catch((err)=>{
        res.status(405).send(err)
    })
})

module.exports = router;