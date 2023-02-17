import Head from 'next/head'
import { Inter } from '@next/font/google'
import Profile from '../components/Profile/Profile';
import Work from '../components/Works/Work';

const inter = Inter({ subsets: ['latin'] })

export default function Home() {  
  return (
    <>
      <Head>
        <title>Huy Nguyễn Porfolio</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={`${inter.className} container max-w-5xl mx-auto`}>
        <Profile />
        <Work />
      </main>
    </>
  )
}
