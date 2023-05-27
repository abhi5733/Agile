
const express = require("express")
const  {connection} = require("./db")
const app = express()
const {userModel} = require("./model/userModel")
app.use(express.json())

// post

app.post("/events", async (req,res)=>{

    try{

        const user = new userModel(req.body)
         await user.save()

        res.send({"id":user._id})
    }catch(err){
        res.send(err)
    }

 
})

// get

app.get("/events" , async(req,res)=>{

if(req.query.page<=0){
    req.query.page = 1 
}
  
    
    try{

        if(req.query.id){
           
             post = await userModel.findById(req.query.id)
          
        }else if(req.query.type && req.query.limit && req.query.page ){

         post = await userModel.find().sort({ createdAt: -1 }).limit(req.query.limit).skip((req.query.page-1)*req.query.limit)
         
        }
        res.send(post)
        }catch(err){
        res.send(err)
        }



})

// DELETE 


app.delete("/events" , async(req,res)=>{

    try{

        
    await userModel.findByIdAndDelete({_id:req.query.id})

res.send({"msg":"deleted successfully"})
    }catch(err){


    }


} )

// patch

app.put("/events" , async(req,res)=>{

    try{
      
        const user = await userModel.findByIdAndUpdate({_id:req.query.id},req.body)

        res.send({"msg":"updated successfully"})


    }catch(err){
        res.send(err)
    }

})





app.listen(7300, async ()=>{

    try{
await connection
console.log("connected to db")
    }catch(err){
        console.log(" not connected to db")
    }

    console.log("port running on 7300")



})