import React, { useState } from 'react';
import { Link } from 'react-router-dom'
import { Modal } from 'react-bootstrap';

const BlogVideoModal = () => {
    const [showModal, setShowModal] = useState(false);

    const handleCloseModal = () => {
      setShowModal(false);
    };
  
    const handleOpenModal = () => {
      setShowModal(true);
    };
  return (
    <div className="jm-blog-item-2 mb-40">
        <div className="jm-blog-item-img-2 w_img p-rel">
            <Link to="/blogDetailsPage"><img src="assets/img/blog/blog-list-2.jpg" alt=""/></Link>
            <div  className="jm-blog-item-play">
                <div role='button' className="jm-play-btn popup-video" onClick={handleOpenModal}><i className="fa-solid fa-play"></i></div>
            </div>
        </div>
        <div className="jm-blog-item-content-2">
            <div className="jm-blog-item-content-meta-2">
                <div className="jm-date-2">
                    <Link to="#"><i className="fa-thin fa-calendar"></i>Dec-03-2018</Link>
                </div>
                <div className="jm-comment-2">
                    <Link to="#"><i className="fa-thin fa-comment"></i>2 Comments</Link>
                </div>
            </div>
            <div className="jm-blog-item-content-info-2">
                <h4 className="title"><Link to="/blogDetailsPage">How WordPress Recruiter Land Your Dream Job</Link></h4>
                <p>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form Lorem ipsum dolor sit amet consectetur.</p>
            </div>
        </div>
        <div className="jm-blog-item-bottom-2">
            <div className="jm-blog-item-admin-2">
                <div className="jm-admin-img-2">
                    <img src="assets/img/blog/admin-2.jpg" alt=""/>
                </div>
                <div className="jm-admin-info-2">
                    <h5 className="title"><Link to="#">Nancy</Link></h5>
                    <span>3 days ago</span>
                </div>
            </div>
            <div className="jm-blog-item-btn-2">
                <Link to="/blogDetailsPage" className="jm-blog-btn-2">Read More <i className="fa-thin fa-arrow-right-long"></i></Link>
            </div>
        </div>
        <Modal show={showModal} onHide={handleCloseModal} size='lg' centered>
          <Modal.Body>
            <iframe
              width="100%"
              height="400"
              src="https://www.youtube.com/embed/8pcvWIfJvvQ"
              title="Video"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </Modal.Body>
        </Modal>
    </div>
  )
}

export default BlogVideoModal