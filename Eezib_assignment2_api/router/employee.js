const express = require('express');
const Employee = require('../models/Employee');
const router = express.Router();
//http://localhost:4000/employee/id
router.get('/:id', async(req, res)=>{
    try {
        const employee_id = req.params.id;
        const response = await Employee.find({id: employee_id});
        res.status(200).json(response);
        }
        catch(err){

            res.status(400).json(err);
        }
})
// 
//http://localhost:4000/employee
 router.post('/', async(req, res)=>{
    try{
        const tempEmployee = new Employee({
            unique_id:req.body.unique_id,
            name: req.body.name,
            city:req.body.city,
            salary:req.body.salary,
            dateofjoining: req.body.dateofjoining,
        })
        const response = await tempEmployee.save();
        res.status(200).json(response);

    }
    catch(err){
        res.status(400).json(err);

    }
 })
 module.exports = router; 