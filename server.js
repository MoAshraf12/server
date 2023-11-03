const express = require('express');  
const mongoose = require('mongoose');  


/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
let app = express();
async function connect(){
    let connection =  await mongoose.connect('mongodb://0.0.0.0:27017/studentsData'); //students is a folder 
    if (!connection) {
     console.log('noo')
    } else {
     console.log('good')
    }
 }
 connect()




//schema

 const studentsSchema =   new mongoose.Schema({

     name : String ,
     age  : Number , 
     phone: String ,
     address :String ,
     couress :String ,
     id    : String ,
     explains :String ,
     mail    : String 
      
 })


   //convert schema to model 

let studentsmodel = new mongoose.model("students",studentsSchema) ; 
let newstudents =  new studentsmodel({

    name    : "mohamed" , 
    age     :  22 , 
    phone   : "0123456",
    address :"Egypt",
    couress : "HTML" 
    
    

}).save(); 


let newteacher =  new studentsmodel({

    name     :"Ali" , 
    age      : 25 , 
    phone    :"012345678",
    address  :"Egypt",
    id       :"2000" , 
    explains :"CSS"
     

    

}).save(); 


let school =  new studentsmodel({

    name     :"SUEZ CANAL" , 
    address  :"ismalia",
    mail     :"suez.com" 

}).save(); 



app.listen(3000 ,function() {
    console.log ('server now is opend')
})
