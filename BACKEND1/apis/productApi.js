import exp from 'express'
import {ProductModel} from '../models/ProductModel.js'
export const productApp=exp.Router()
//read products
productApp.get('/products',async(req,res)=>{
    //read products from db
    let products=await ProductModel.find()
    //send res
    res.json({message:"products data",payload:products})

});
productApp.post('/products',async(req,res)=>{
    let newProduct=req.body
    //console.log(newUser);
    //create new user document 
   let newProductdoc= new ProductModel(newProduct)
   //save in db
   await newProductdoc.save()
    res.json({message:"new product created ",payload:newProductdoc})
})