import React, { useState } from 'react';
import { toast } from 'react-toastify';

const PostJobArea = () => {
  const [jobTitle, setJobTitle] = useState('');
  const [emailUrl, setEmailUrl] = useState('');
  const [jobLocation, setJobLocation] = useState('');
  const [jobType, setJobType] = useState('');
  const [jobCategory, setJobCategory] = useState('');
  const [expectedSalary, setExpectedSalary] = useState('');
  const [previousExperience, setPreviousExperience] = useState('');
  const [jobDescription, setJobDescription] = useState('');
  const [companyName, setCompanyName] = useState('');
  const [companyWebsite, setCompanyWebsite] = useState('');
  const [companyVideoUrl, setCompanyVideoUrl] = useState('');
  const [linkedinUsername, setLinkedinUsername] = useState('');
  const [twitterUsername, setTwitterUsername] = useState('');
  const [facebookUsername, setFacebookUsername] = useState('');
  const [pinterestUsername, setPinterestUsername] = useState('');
  const [instagramUsername, setInstagramUsername] = useState('');
  const [companyDescription, setCompanyDescription] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    // Perform form validation
    if (
      !jobTitle ||
      !emailUrl ||
      !jobLocation ||
      !jobType ||
      !jobCategory ||
      !expectedSalary ||
      !previousExperience ||
      !jobDescription ||
      !companyName ||
      !companyWebsite ||
      !companyDescription
    ) {
      toast.error('Please fill all the required fields');
      return;
    }

    // Handle form submission
    // Add your logic to submit the form data

    // Reset form fields
    setJobTitle('');
    setEmailUrl('');
    setJobLocation('');
    setJobType('');
    setJobCategory('');
    setExpectedSalary('');
    setPreviousExperience('');
    setJobDescription('');
    setCompanyName('');
    setCompanyWebsite('');
    setCompanyVideoUrl('');
    setLinkedinUsername('');
    setTwitterUsername('');
    setFacebookUsername('');
    setPinterestUsername('');
    setInstagramUsername('');
    setCompanyDescription('');

    toast.success('Job posted successfully');
  };

  return (
    <div className="jm-post-job-area pt-95 pb-60">
      <div className="container">
        <div className="row align-items-center justify-content-center text-center">
          <div className="col-xl-8">
            <div className="jm-create-new-section mb-20">
              <h4 className="jm-have-account-title">Have an account?</h4>
              <p className="jm-job-sign-text d-inline-block">
                <a href="#" className="jm-job-acc mr-15">
                  Sign Up
                </a>
                If you don't have any account. Please create a new
              </p>
            </div>
          </div>
        </div>
       
          <form onSubmit={handleSubmit}> 
          <div className="jm-post-job-wrapper mb-40">
            <h4 className="jm-job-acc-title">Job informations</h4>
                <div className="row">
                    <div className="col-xl-12">
                        <input
                        type="text"
                        placeholder="Job Title"
                        value={jobTitle}
                        onChange={(e) => setJobTitle(e.target.value)}
                        />
                    </div>
                    <div className="col-xl-6 col-md-6">
                        <input
                        type="text"
                        placeholder="Application email/URL"
                        value={emailUrl}
                        onChange={(e) => setEmailUrl(e.target.value)}
                        />
                    </div>
                    <div className="col-xl-6 col-md-6">
                        <input
                        type="text"
                        placeholder="Job Location"
                        value={jobLocation}
                        onChange={(e) => setJobLocation(e.target.value)}
                        />
                    </div>
                    <div className="col-xl-6 col-md-6">
                        <select
                        className="jm-job-select"
                        value={jobType}
                        onChange={(e) => setJobType(e.target.value)}
                        >
                        <option>Job Types</option>
                        <option>Full Time</option>
                        <option>Part Time</option>
                        <option>Internship</option>
                        <option>Temporary</option>
                        </select>
                    </div>
                    <div className="col-xl-6 col-md-6">
                        <select
                        className="jm-job-select"
                        value={jobCategory}
                        onChange={(e) => setJobCategory(e.target.value)}
                        >
                        <option>Job Categories</option>
                        <option>Development</option>
                        <option>IT Sector</option>
                        <option>Corporate Job</option>
                        </select>
                    </div>
                    <div className="col-xl-6 col-md-6">
                        <input
                        type="text"
                        placeholder="Expected Salary"
                        value={expectedSalary}
                        onChange={(e) => setExpectedSalary(e.target.value)}
                        />
                    </div>
                    <div className="col-xl-6 col-md-6">
                        <input
                        type="text"
                        placeholder="Previous Experience"
                        value={previousExperience}
                        onChange={(e) => setPreviousExperience(e.target.value)}
                        />
                    </div>
                    <div className="col-xl-12">
                        <textarea
                        placeholder="Job description"
                        value={jobDescription}
                        onChange={(e) => setJobDescription(e.target.value)}
                        ></textarea>
                    </div>
                    <div className="col-xl-12">
                        <div className="choose-file">
                        <label htmlFor="upload">Featured Image <span>(Optional)</span></label> <br/>
                        <input type="file" id="upload"/>
                        </div>
                    </div>
                </div> 
            </div>
            <div className="jm-post-job-wrapper mb-40">
              <h4 className="jm-job-acc-title">Company informations</h4>
              <div className="row">
                <div className="col-xl-6 col-md-6">
                  <input
                    type="text"
                    placeholder="Company Name"
                    value={companyName}
                    onChange={(e) => setCompanyName(e.target.value)}
                  />
                </div>
                <div className="col-xl-6 col-md-6">
                  <input
                    type="text"
                    placeholder="Company Website"
                    value={companyWebsite}
                    onChange={(e) => setCompanyWebsite(e.target.value)}
                  />
                </div>
                <div className="col-xl-6 col-md-6">
                  <input
                    type="text"
                    placeholder="Company Video URL"
                    value={companyVideoUrl}
                    onChange={(e) => setCompanyVideoUrl(e.target.value)}
                  />
                </div>
                <div className="col-xl-6 col-md-6">
                  <input
                    type="text"
                    placeholder="Linkedin Username"
                    value={linkedinUsername}
                    onChange={(e) => setLinkedinUsername(e.target.value)}
                  />
                </div>
                <div className="col-xl-6 col-md-6">
                  <input
                    type="text"
                    placeholder="Twitter Username"
                    value={twitterUsername}
                    onChange={(e) => setTwitterUsername(e.target.value)}
                  />
                </div>
                <div className="col-xl-6 col-md-6">
                  <input
                    type="text"
                    placeholder="Facebook Username"
                    value={facebookUsername}
                    onChange={(e) => setFacebookUsername(e.target.value)}
                  />
                </div>
                <div className="col-xl-6 col-md-6">
                  <input
                    type="text"
                    placeholder="Pinterest Username"
                    value={pinterestUsername}
                    onChange={(e) => setPinterestUsername(e.target.value)}
                  />
                </div>
                <div className="col-xl-6 col-md-6">
                  <input
                    type="text"
                    placeholder="Instagram Username"
                    value={instagramUsername}
                    onChange={(e) => setInstagramUsername(e.target.value)}
                  />
                </div>
                <div className="col-xl-12">
                  <textarea
                    placeholder="Company description"
                    value={companyDescription}
                    onChange={(e) => setCompanyDescription(e.target.value)}
                  ></textarea>
                </div>
                <div className="col-xl-12">
                  <div className="choose-file">
                    <label htmlFor="upload1">Company Logo <span>(Optional)</span></label> <br/>
                    <input type="file" id="upload1"/> <br/>
                    <span className="jm-file-size">Maximum file size: 2 MB</span>
                  </div>
                </div>
              </div>
              <div className="col-xl-12">
                <div className="jm-info-buttons mt-25">
                  <button type="submit" className="jm-post-job-btn jm-theme-btn">
                    Post A Job
                  </button>
                </div>
              </div>
            </div>
          </form>
       
      </div>
    </div>
  );
};

export default PostJobArea;
