import React from 'react'
import { Inter } from '@next/font/google'
import { useRouter } from 'next/router';

import Link from 'next/link'

const inter = Inter({ subsets: ['latin'] })

const Header: React.FC = () => {
  const router = useRouter();

  return (
    <div className="container max-w-5xl flex mx-auto justify-between px-4 text-slate-600 pt-6">
      <div className="logo font-bold text-md">
        <Link href={'/'}>
          <span className="bg-gradient-to-r from-teal-400 to-blue-500 hover:from-pink-500 hover:to-orange-500 text-white font-semibold px-3 py-2 rounded-md">Profile</span>
        </Link>
      </div>
      <div className="navigation">
        <ul className="flex justify-between font-semibold ">
          <li className={router.pathname == "/" ? "text-rose-500 hover:text-rose-500 active" : "text-slate-700 hover:text-rose-500"}>
            <Link href="/">Home</Link>
          </li>
          <li className={router.pathname == "/gallery" ? "ml-8 text-rose-500 hover:text-rose-500 " : "ml-8 text-slate-700 hover:text-rose-500"}>
            <Link href="/gallery">UnSpash Gallery</Link>
          </li>
        </ul>
      </div>
    </div>
  )
}

export default Header;