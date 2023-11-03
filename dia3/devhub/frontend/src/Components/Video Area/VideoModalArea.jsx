import React, { useContext } from 'react';
import { JobContext } from '../../Context/JobContext';
import VideoModal from '../Modal/VideoModal';

const VideoModalArea = () => {
  const {handleOpenModal} = useContext(JobContext)

  return (
    <div className="jm-video-icon-3">
      <div role='button' className="jm-play-btn popup-video" onClick={handleOpenModal}>
        <i className="fa-solid fa-play"></i>
      </div>
      <VideoModal/>
    </div>
  );
};

export default VideoModalArea;
