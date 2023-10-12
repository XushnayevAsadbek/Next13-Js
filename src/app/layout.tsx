
import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
// import Link from 'next/link'
// import { useRouter } from 'next/navigation';
import Navbar from '@/component/navbar';

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode ;
}) {

  return (
    <html lang="en">
      <body className={inter.className}>

       <Navbar/>
         {/* <div className='navbar'>
        <Link href={'/'} >Bosh sahifa</Link>
        <Link href={'/about'} >Men haqimda</Link>
        <Link href={'/contac'} >Bog'lanish</Link>

        </div> */}
        {children} 
      Footer 
      </body>
    </html>
  )
}
