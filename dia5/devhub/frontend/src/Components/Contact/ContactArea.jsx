import React, { useState } from 'react';
import { toast } from 'react-toastify';

const ContactArea = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
  
    const { name, email, subject, message } = formData;
  
    if (!name || !email || !subject || !message) {
      toast.error('Please fill in all fields.');
      return;
    }
  };

  return (
    <section className="jm-contact-area pt-95 pb-100">
      <div className="container">
      <div className="row align-items-center mb-25">
          <div className="col-xl-6 col-lg-9">
            <div className="jm-section-title mb-10">
              <span className="subtitle">Contact with us</span>
              <h2 className="title">We Are Best About This Job Solution.</h2>
            </div>
          </div>
          <div className="col-xl-6 col-lg-9">
            <div className="jm-section-title mb-10">
              <p className="text">
                There are many variations of passages of Lorem Ipsum Fasts There are many
                variations of passages of Lorem Ipsum Fastsby injected humour, by injected humour,
                or randomised coved ceilings.
              </p>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-xl-8 col-lg-7">
            <div className="jm-contact-wrap mb-50 mb-lg-0">
            <form className="jm-contact-form" onSubmit={handleSubmit}>
                <div className="row">
                  <div className="col-xl-6 col-lg-6">
                    <input
                      type="text"
                      name="name"
                      placeholder="Your Name"
                      value={formData.name}
                      onChange={handleChange}
                    />
                  </div>
                  <div className="col-xl-6 col-lg-6">
                    <input
                      type="email"
                      name="email"
                      placeholder="Your Email Address"
                      value={formData.email}
                      onChange={handleChange}
                    />
                  </div>
                  <div className="col-12">
                    <input
                      type="text"
                      name="subject"
                      placeholder="Subject"
                      value={formData.subject}
                      onChange={handleChange}
                    />
                  </div>
                  <div className="col-12">
                    <textarea
                      name="message"
                      cols="30"
                      rows="10"
                      placeholder="Write here your message"
                      value={formData.message}
                      onChange={handleChange}
                    ></textarea>
                  </div>
                  <div className="col-12">
                    <button type="submit" className="jm-theme-btn">
                      Send Message
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </div>
          <div className="col-xl-4 col-lg-5">
            <div className="jm-contact-map ml-40">
              <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d118930.0954048538!2d-157.8691130847656!3d21.328179205925203!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x7c00183b8cc3464d%3A0x4b28f55ff3a7976c!2z4Ka54Kao4Kay4KeB4Kay4KeBLCDgprngpr7gppPgpq_gprzgpr7gpocsIOCmruCmvuCmsOCnjeCmleCmv-CmqCDgpq_gp4HgppXgp43gpqTgprDgpr7gprfgp43gpp_gp43gprA!5e0!3m2!1sbn!2sbd!4v1653500685513!5m2!1sbn!2sbd"></iframe>
            </div>
          </div>        
          </div>
      </div>
    </section>
  );
};

export default ContactArea;

   