import React, { useContext } from 'react';
import VideoModal from '../Modal/VideoModal';
import { JobContext } from '../../Context/JobContext';
const JobVideoModal = () => {
  const {handleOpenModal} = useContext(JobContext)
  return (
    <div className="jm-sidebar-job-video mb-15">
        <img src="assets/img/services/service-details-4.jpg" alt="img"/>
        <div className="jm-side-video-pop popup-video" role='button' onClick={handleOpenModal}><i className="fa-thin fa-play"></i></div> 
        <VideoModal/>
    </div>
  )
}

export default JobVideoModal