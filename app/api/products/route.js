
import mongoose from "mongoose";
import { Product } from "@/models/Products";
import { mongooseConnect } from "@/lib/mongoose";

export default async function POST(req,res) {
    const {method} = req;
    await mongooseConnect();
    if(method==='POST'){
        const {title,description,price} = req.body;
        const newProd = await Product.create({
            title,description,price
        })
        res.json(newProd);
    }
};