import React from 'react'
import profileVideo from '../../assets/profilevideo-compressed.mp4'

const Video = () => {
  return (
    <div className='h-full w-full '>
      <video 
        className='h-full w-full object-cover' 
        autoPlay 
        loop 
        muted 
        playsInline
        src={profileVideo}
      />
    </div>
  )
}

export default Video