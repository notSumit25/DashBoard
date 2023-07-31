
import mongoose from "mongoose";
import { Product } from "@/models/Products";
import { mongooseConnect } from "@/lib/mongoose";

export default async function handlePOST(req,res) {
    const {method} = req;
    await mongooseConnect();
    if(method==='POST'){
        try {
        const {title,description,price} = req.body;
        const newProd = await Product.create({
            title,description,price
        })
        res.json(newProd);    
        } catch (error) {
            console.log(error);    
        }
        
    }
};