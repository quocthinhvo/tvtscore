const mongoose = require('mongoose');

const xettuyenSchema = mongoose.Schema({
    stt: String,
    id: String,
    firstname: String,
    lastname: String,	
    women: String,	
    birthday: String,	
    thcs: String,	
    xa: String,	
    huyen: String,	
    dtb6: String,	
    dtb7: String,	
    dtb8: String,	
    dtb9: String,	
    dtbsum: String,	
    hl6: String,	
    hk6: String,	
    d6: String,	
    hl7: String,	
    hk7: String,	
    d7: String,	
    hl8: String,	
    hk8: String,	
    d8: String,	
    hl9: String,	
    hk9: String,
    d9: String, 
    sum: String,	
    uutien: String,	
    diemut: String,	
    xeploai: String,	
    final: String
})

const xettuyenModel = mongoose.model('xettuyen', xettuyenSchema)

module.exports = xettuyenModel;