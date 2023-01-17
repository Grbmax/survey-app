import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import List from './list'
import Form from '../components/NameForm'

const Home: NextPage = () => {
  return (
      <>
      <Head>
      <title>Survey App</title>
      <link rel="icon" href="/favicon.ico" />
    </Head>
    <div className='bg-slate-200'>
    <div className='flex flex-col justify-center items-center h-screen'>
      <a href="list" className="block items-center max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow-md
       hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">
      <h5 className="mb-2 px-9 text-2xl text-center font-bold tracking-tight text-gray-900 
      dark:text-white">Bee Survey🐝</h5>
      <p className="font-normal text-center px-9 text-gray-700 
      dark:text-gray-400">Here are the surveys we are actively conducting for the year 2023🎉</p>
      </a>
    </div>
    </div>
    </>
  )
}

export default Home
