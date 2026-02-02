import exp from 'express'
import { UserModel } from '../models/usermodel.js'

export const userApp=exp.Router()


//read users
userApp.get('/users',async(req,res)=>{
    //read users from db
    let users=await UserModel.find()
    //send res
    res.json({message:"users data",payload:users})
})
userApp.post('/users',async(req,res)=>{
    let newUser=req.body
    //console.log(newUser);
    //create new user document 
   let newUserDoc= new UserModel(newUser)
   //save in db
   await newUserDoc.save()
    res.json({message:"New user created",payload:newUserDoc})
})
//
userApp.get('/users/:id',async(req,res)=>{
    let objId=req.params.id;
    let user=await UserModel.findById(objId)
    //send res
    res.status(200).json({message:"user data",payload:user})
})
//update user
userApp.put('/users/:id',async(req,res)=>{
    let objId=req.params.id;
    let modifiedUser=req.body;
    let updatedUser=await UserModel.findByIdAndUpdate(objId,{$set:{...modifiedUser}},{new:true,runValidators:true})
    res.status(200).json({message:"user data updated",payload:updatedUser})
})
userApp.delete('/users/:id',async(req,res)=>{
    let objId=req.params.id;
    let deletedUser=await UserModel.findByIdAndDelete(objId)
    res.status(200).json({message:"user data deleted successfully",payload:deletedUser})
})