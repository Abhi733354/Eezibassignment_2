const mongoose = require('mongoose');
const { DefaultDeserializer } = require('v8');
const EmployeeSchema = mongoose.Schema({
    unique_id:{
        type: String,
        reqiured: true,
        unique: true,
    },
    name:{
        type: String,
        reqiured: true,

    },
    city:{
        type: String,
        reqiured: true,

    },
    salary:{
        type: String,
        reqiured: true,

    },
    dateofjoining:{
        type: String,
        reqiured: true,

    }
    
})
module.exports = mongoose.model('Employee', EmployeeSchema)