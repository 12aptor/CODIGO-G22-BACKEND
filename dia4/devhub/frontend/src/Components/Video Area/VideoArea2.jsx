import React from 'react'
import VideoTab from './VideoTab'
import Counter from './Counter'
import VideoModalArea from './VideoModalArea'

const VideoArea2 = () => {
  return (
    <div className="jm-video-area-3 jm-video-area-layout-3">
        <div className="jm-video-img-3 bg-default">
            <VideoTab/>
            <VideoModalArea/>
        </div>
        <Counter/>
    </div>
  )
}

export default VideoArea2