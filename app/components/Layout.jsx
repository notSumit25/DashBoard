'use client'
import { useSession, signIn, signOut } from "next-auth/react"
import Nav from "./Nav";
export default function Layout({children}) {
    const { data: session } = useSession()
    if(!session){
      return (
        <main className='bg-blue-900 w-screen h-screen flex items-center'>
            <div className='text-center w-full'>
              <button onClick={()=>signIn('google')} className='bg-white text-black p-2 px-4 rounded-md'>Login with Google</button>
            </div>
          </main>
    );
  }
  return (
    <div className='bg-zinc-800 min-h-screen flex'>
      <Nav/>
      <div className='bg-white text-black flex-grow mt-2 mr-2 mb-2 rounded-lg p-4'>{children}</div>
    </div>
  );
  }
  