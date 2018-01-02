var express = require("express");
var app = express();
var emp = {id:"EMP001",name:"Ave",phone:+918234123453};
app.get("/",function(req,resp){
resp.send("Id : "+emp.id +"<br>" +
"Ename : "+emp.name+"<br>"+
"job : "+emp.phone +"<br>");
});
name=Aven;
app.put("/:id='EMP001'",name,function(req,resp){
console.log("Data updated Successfully");
});

app.listen(9000,function(){
    console.log("Server started listining");
});