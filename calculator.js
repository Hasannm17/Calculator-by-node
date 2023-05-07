const express=require("express");
const bodyParser =require("body-parser");
const app=express();
app.use(bodyParser.urlencoded({extended: true}));


app.get('/' ,function(request,response){


   
   //important
    response.sendFile(__dirname+'/index.html');


});
app.post("/",function(request ,response){

var num1 =Number(request.body.n1);
var num2=Number(request.body.n2);
var addition= num1+num2;


    console.log(request.body.num1);

response.send("The result is " +addition);


} );


app.listen(3000 ,function(){

    console.log("server has started ya bebe");
    
    
    
    });