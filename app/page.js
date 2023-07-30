'use client'
import Image from 'next/image'
import { useSession, signIn, signOut } from "next-auth/react"
import Nav from './components/Nav'
import Layout from './components/Layout'

export default function Home() {
  const {data: session} = useSession();
  return <Layout>
    <div className='text-zinc-800 text-lg font-bold flex justify-between'>
      Hello, {session?.user?.name}
      <div className='flex bg-gray-300 gap-3 py-1 px-2 rounded-md'>
        <img src={session?.user?.image} width={20} height={20} />
        {session?.user?.name}
      </div>
    </div>
  </Layout>
}
