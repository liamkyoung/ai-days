import type { NextPage } from 'next'
import { useSelector } from 'react-redux'
import { RootState } from '../redux/store'
import { useDispatch } from 'react-redux'
import toast from 'react-hot-toast'
import Login from '../components/utility/Login'
import HeaderMetaData from '../components/utility/HeaderMetaData'
import Header from '../components/utility/Header'
import HeroSection from '../components/large/HeroSection'

import HeaderLoggedIn from '../components/utility/HeaderLoggedIn'

const Home: NextPage = () => {
  const counterValue = useSelector((state: RootState) => state.counter.value)
  const dispatch = useDispatch()
  const notify = () => toast.success('Here is your toast.', { duration: 7000 })

  return (
    <div className="page">
      <HeaderMetaData title={'eAIsy | Home'} />
      <Header />

      <HeroSection />
    </div>
  )
}

export default Home
