import { Product } from "@/models/Products";
import { mongooseConnect } from "@/lib/mongoose";

export default async function handler(req, res) {
  const { method } = req;
  if (method === "POST") {
    try {
      await mongooseConnect();

      const { title, description, price } = req.body;
      const newProd = await Product.create({
        title,
        description,
        price,
      });

      return res.status(201).json(newProd);
    } catch (error) {
      console.error(error);
      return res.status(500).json({ error: "Failed to create product" });
    }
  } else {
    return res.status(405).json({ error: "Method Not Allowed." });
  }
};
