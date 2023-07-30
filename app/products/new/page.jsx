'use client'
import Layout from '@/app/components/Layout'
import React, { useState } from 'react'
import axios from 'axios'

const newProducts = () => {
    const [title,setTitle] = useState('')
    const [description,setDescription] = useState('')
    const [price,setPrice] = useState('')
    async function createProduct(e) {
        e.preventDefault();
        const data = {title,description,price}
        await axios.post('/api/products',data)
    };
  return (
    <Layout>
        <form onSubmit={createProduct}>
            <h1 className='text-zinc-800 mb-2 text-lg font-semibold'>New Product</h1>
            <label className='text-zinc-800 font-bold'>Product Name</label>
            <input className='border-zinc-800 border-2 rounded-md px-1 w-full my-3 py-1' type="text" placeholder='Product name' value={title} onChange={e =>setTitle(e.target.value)} />
            <label className='text-zinc-800 font-bold'>Description</label>
            <textarea className='border-zinc-800 border-2 rounded-md px-1 w-full my-3 py-1' type="text" placeholder='Description' value={description} onChange={e =>setDescription(e.target.value)}/>
            <label className='text-zinc-800 font-bold'>Price (in Rs)</label>
            <input className='border-zinc-800 border-2 rounded-md px-1 w-full my-3 py-1' type="number" placeholder='Price' value={price} onChange={e =>setPrice(e.target.value)}/>
            <button type='submit' className='bg-blue-800 rounded-lg py-2 px-3 text-white'>Save</button>
        </form>
    </Layout>
  )
}

export default newProducts
