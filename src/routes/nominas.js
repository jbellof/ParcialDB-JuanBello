const express = require ("express");
const nominaSchema = require("../models/nominas");
const { json } = require("body-parser");

const router = express.Router();

//create user
router.post("/nominas",(req, res)=>{
    const empleado =nominaSchema(req.body);
    empleado.save()
        .then((data)=> res.json(data))
        .catch((error)=> res.json({message:error }));

});

module.exports = router;


///Get all empleados 
router.get("/nominas",(req, res)=>{
   
    nominaSchema
        .find()
        .then((data)=> res.json(data))
        .catch((error)=> res.json({message:error }));

});

///Get one empleado 
router.get("/nominas/:id",(req, res)=>{
   const {id}= req.params;
    nominaSchema
        .findById(id)
        .then((data)=> res.json(data))
        .catch((error)=> res.json({message:error }));

});
///Update empleados 
router.put("/nominas/:id",(req, res)=>{
    const {id}= req.params;
    const {nombre,apellido,foto,correo,direccion,cargo,salario}= req.body;
     nominaSchema
         .updateOne({_id: id},{ $set:{nombre,apellido,foto,correo,direccion,cargo,salario}})
         .then((data)=> res.json(data)) 
         .catch((error)=> res.json({message:error }));
 
 });
 ///Delete empleados 
router.delete("/nominas/:id",(req, res)=>{
    const {id}= req.params;
     nominaSchema
         .deleteOne({_id: id})
         .then((data)=> res.json(data)) 
         .catch((error)=> res.json({message:error }));
 
 });
 