import React from 'react'
import Video from '../Components/Home/Video'
import HomeHeroText from '../Components/Home/HomeHeroText'
import HomeBottomText from '../Components/Home/HomeBottomText'

const Home = () => {
  return (
    <>
    <div className='blur-sm h-screen w-screen fixed'>
      <Video></Video>
    </div>
    <div className='h-screen w-screen relative pb-5 overflow-hidden flex flex-col justify-between'>
      <HomeHeroText></HomeHeroText>
      <HomeBottomText></HomeBottomText>
    </div>
    </>
  )
}

export default Home