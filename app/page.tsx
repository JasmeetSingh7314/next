import Image from 'next/image'

import Link from 'next/link'

export default function Home() {
  return (
    <>

    <h1>Home Page</h1>
    <Link href='/user' className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">Link to About page</Link>
    </>
    

   
  )
}
