import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import Form from '../components/NameForm'

const Home: NextPage = () => {
  return (
      <><Head>
      <title>Survey App</title>
      <link rel="icon" href="/favicon.ico" />
    </Head>
    <Form/>
    </>
  )
}

export default Home
