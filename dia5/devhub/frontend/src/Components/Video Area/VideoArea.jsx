import React, { useContext } from 'react';
import { JobContext } from '../../Context/JobContext';
import VideoModal from '../Modal/VideoModal';

const VideoArea = () => {
  const {handleOpenModal} = useContext(JobContext)
    return (
      <div className="jm-video-area">
        <div className="container-fluid p-0">
          <div className="jm-video-wrap bg-default">
            <div className="jm-video-icon mb-30">
              <div role='button' className="jm-play-btn" onClick={handleOpenModal}>
                <i className="fa-solid fa-play"></i>
              </div>
            </div>
            <div className="jm-video-text">
              <h2 className="title">VIDEO</h2>
            </div>
          </div>
        </div>
        <VideoModal/>
      </div>
    );
  };
  

export default VideoArea