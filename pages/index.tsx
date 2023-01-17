import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import List from './list'
import Form from '../components/NameForm'

const Home: NextPage = () => {
  return (
      <><Head>
      <title>Survey App</title>
      <link rel="icon" href="/favicon.ico" />
    </Head>
    <div className='flex flex-col justify-center items-center h-screen'>
      <h1 className='font-bold text-2xl'>
        Welcome to Bee Survey
      </h1>
      <h2 className='py-4 font-semibold'>
        Select a <a className='text-blue-800' href='list'>Survey Here</a>
      </h2>
    </div>
    </>
  )
}

export default Home
