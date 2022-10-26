import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import { useSelector } from 'react-redux'
import { RootState } from '../redux/store'
import { useDispatch } from 'react-redux'
import { increment } from '../redux/slices/counterSlice'
import toast from 'react-hot-toast'
import { FileUpload } from 'primereact/fileupload'
import Login from '../components/Login'
import MongoDBClient from '../lib/mongodbClient'

const Home: NextPage = () => {
  const counterValue = useSelector((state: RootState) => state.counter.value)
  const dispatch = useDispatch()
  const notify = () => toast.success('Here is your toast.', { duration: 7000 })

  // fetch('/api/')
  return (
    <div>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <h1 className="">Home Page {counterValue}</h1>
        <FileUpload name="datasetUpload" url="/api/upload" />
        <Login />
      </main>
    </div>
  )
}

export default Home
