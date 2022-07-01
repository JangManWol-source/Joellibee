import React from 'react'
import HomeFoodList from './HomeFoodList'
import './Home.css'
import SuccessModal from '../UI/SuccessModal'
const Home = () => {
  return (
    <React.Fragment>
      <SuccessModal />
      <div className='home-wrapper'>
      <div className='home'>
        <HomeFoodList/>
      </div>
    </div>
    </React.Fragment>
  )
}

export default Home