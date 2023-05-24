const express=require('express');
const app=new express();
const cors = require("cors");
var bodyParser = require('body-parser');
const apistatu = require("./data/statu");
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
  extended: true
}));
let status=[];
let count=0;
app.post('/addstatus',(req,res)=>{
  if(!req.body.iduser || !req.body.message){
    apistatu.getmessage({message:"invalid information"}, (err, data) => {
      if (!err) {
        console.log(data);
          res.send(data.message);
      }
      else{
          res.status(400).send(err);
      }
    });
  }
  else{
    count=count+1;
    const a={id:count,message:req.body.message,user:req.body.iduser};
        status.push(a);
        apistatu.getmessage({message:"inserted successfully"}, (err, data) => {
          if (!err) {
            console.log(data);
              res.send(data.message);
          }
          else{
              res.status(400).send(err);
          }
        });
  }
        
});
app.delete('/removestatus',(req,res)=>{
  if(!req.body.id){
    apistatu.getmessage({message:"invalid information"}, (err, data) => {
      if (!err) {
        console.log(data);
          res.send(data.message);
      }
      else{
          res.status(400).send(err);
      }
    });
  }
  else{
       status=status.filter((e)=>{
        console.log(e.id, req.body.id, e.id !== req.body.id);
        return e.id.toString() !== req.body.id;
        });
        apistatu.getmessage({message:"removed successfully"}, (err, data) => {
          if (!err) {
            console.log(data);
              res.send(data.message);
          }
          else{
              res.status(400).send(err);
          }
        });
  }
        
});
app.put('/updatestatus/:id',(req,res)=>{
  if(!req.body.message){
    apistatu.getmessage({message:"invalid information"}, (err, data) => {
      if (!err) {
        console.log(data);
          res.send(data.message);
      }
      else{
          res.status(400).send(err);
      }
    });
  }
  else{
    status = status.map(item => {
      if (item.id.toString() === req.params.id) {
        return { ...item, message:req.body.message};
      }
      return item;
    });
        apistatu.getmessage({message:"updated successfully"}, (err, data) => {
          if (!err) {
            console.log(data);
              res.send(data.message);
          }
          else{
              res.status(400).send(err);
          }
        });
  }
        
});
app.get('/status',(req,res)=>{
  apistatu.getstatus({status:status}, (err, data) => {
    if (!err) {
      console.log(data);
        res.json(data.status);
    }
    else{
        res.status(400).send(err);
    }
  });
});
app.listen(5000,()=>{
    console.log('connected');
})