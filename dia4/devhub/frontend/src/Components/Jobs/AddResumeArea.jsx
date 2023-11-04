import React, { useState } from 'react';
import { toast } from 'react-toastify';

const AddResumeArea = () => {
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [professionalTitle, setProfessionalTitle] = useState('');
  const [location, setLocation] = useState('');
  const [date, setDate] = useState('');
  const [videoURL, setVideoURL] = useState('');
  const [resumeCategory, setResumeCategory] = useState('');
  const [skills, setSkills] = useState('');
  const [linkedinUsername, setLinkedinUsername] = useState('');
  const [facebookUsername, setFacebookUsername] = useState('');
  const [resumeContent, setResumeContent] = useState('');
  const [photoFile, setPhotoFile] = useState(null);
  const [institutionName, setInstitutionName] = useState('');
  const [qualification, setQualification] = useState('');
  const [startDate, setStartDate] = useState('');
  const [endDate, setEndDate] = useState('');
  const [notes, setNotes] = useState('');
  const [employerName, setEmployerName] = useState('');
  const [jobTitle, setJobTitle] = useState('');
  const [experienceStartDate, setExperienceStartDate] = useState('');
  const [experienceEndDate, setExperienceEndDate] = useState('');
  const [experienceNotes, setExperienceNotes] = useState('');
  const [resumeFile, setResumeFile] = useState(null);

  const handleFormSubmit = (e) => {
    e.preventDefault();

    if (
      !fullName ||
      !email ||
      !professionalTitle ||
      !location ||
      !date ||
      !videoURL ||
      !resumeCategory ||
      !skills ||
      !linkedinUsername ||
      !facebookUsername ||
      !resumeContent ||
      !photoFile ||
      !institutionName ||
      !qualification ||
      !startDate ||
      !endDate ||
      !notes ||
      !employerName ||
      !jobTitle ||
      !experienceStartDate ||
      !experienceEndDate ||
      !experienceNotes ||
      !resumeFile
    ) {
        toast.error('Please fill all the required fields');
    } else {
        toast.success('Job posted successfully');
    }
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
        <div className="jm-post-job-wrapper mb-40">
          <h4 className="jm-job-acc-title">Create your resume and put it online.</h4>
          <div className="row">
            <div className="col-xl-6 col-md-6">
              <input
                type="text"
                placeholder="Your Full Name"
                value={fullName}
                onChange={(e) => setFullName(e.target.value)}
              />
            </div>
            <div className="col-xl-6 col-md-6">
              <input
                type="text"
                placeholder="Your Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div className="col-xl-6 col-md-6">
              <input
                type="text"
                placeholder="Professional Title"
                value={professionalTitle}
                onChange={(e) => setProfessionalTitle(e.target.value)}
              />
            </div>
            <div className="col-xl-6 col-md-6">
              <input
                type="text"
                placeholder="Location"
                value={location}
                onChange={(e) => setLocation(e.target.value)}
              />
            </div>
            <div className="col-xl-6 col-md-6">
              <input
                type="text"
                placeholder="Date"
                value={date}
                onChange={(e) => setDate(e.target.value)}
              />
            </div>
            <div className="col-xl-6 col-md-6">
              <input
                type="text"
                placeholder="Video URL"
                value={videoURL}
                onChange={(e) => setVideoURL(e.target.value)}
              />
            </div>
            <div className="col-xl-6 col-md-6">
              <select
                className="jm-job-select"
                value={resumeCategory}
                onChange={(e) => setResumeCategory(e.target.value)}
              >
                <option>Resume Category</option>
                <option>HTML</option>
                <option>TEXT</option>
              </select>
            </div>
            <div className="col-xl-6 col-md-6">
              <select
                className="jm-job-select"
                value={skills}
                onChange={(e) => setSkills(e.target.value)}
              >
                <option>Your Skills</option>
                <option>Web Developer</option>
                <option>UI Designer</option>
                <option>Frontend Coder</option>
              </select>
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
                placeholder="Facebook Username"
                value={facebookUsername}
                onChange={(e) => setFacebookUsername(e.target.value)}
              />
            </div>
            <div className="col-xl-12">
              <textarea
                placeholder="Resume Content"
                value={resumeContent}
                onChange={(e) => setResumeContent(e.target.value)}
              ></textarea>
            </div>
            <div className="col-xl-12">
              <div className="choose-file">
                <label htmlFor="upload">
                  Your Photo <span>(Optional)</span>
                </label>{' '}
                <br />
                <input
                  type="file"
                  id="upload"
                  onChange={(e) => setPhotoFile(e.target.files[0])}
                />{' '}
                <br />
                <span className="jm-file-size">Maximum file size: 2 MB</span>
              </div>
            </div>
          </div>
        </div>
        <div className="jm-post-job-wrapper mb-40">
            <div className="row">
            <div className="col-xl-6">
                <h4 className="jm-job-acc-title">Education</h4>
                <input
                type="text"
                placeholder="Institution Name"
                value={institutionName}
                onChange={(e) => setInstitutionName(e.target.value)}
                />
                <input
                type="text"
                placeholder="Qualification"
                value={qualification}
                onChange={(e) => setQualification(e.target.value)}
                />
                <input
                type="text"
                placeholder="Start Date"
                value={startDate}
                onChange={(e) => setStartDate(e.target.value)}
                />
                <input
                type="text"
                placeholder="End Date"
                value={endDate}
                onChange={(e) => setEndDate(e.target.value)}
                />
                <textarea
                placeholder="Notes"
                value={notes}
                onChange={(e) => setNotes(e.target.value)}
                ></textarea>
            </div>

            <div className="col-xl-6">
                <h4 className="jm-job-acc-title">Work Experience</h4>
                <input
                type="text"
                placeholder="Employer Name"
                value={employerName}
                onChange={(e) => setEmployerName(e.target.value)}
                />
                <input
                type="text"
                placeholder="Job Title"
                value={jobTitle}
                onChange={(e) => setJobTitle(e.target.value)}
                />
                <input
                type="text"
                placeholder="Start Date"
                value={experienceStartDate}
                onChange={(e) => setExperienceStartDate(e.target.value)}
                />
                <input
                type="text"
                placeholder="End Date"
                value={experienceEndDate}
                onChange={(e) => setExperienceEndDate(e.target.value)}
                />
                <textarea
                placeholder="Notes"
                value={experienceNotes}
                onChange={(e) => setExperienceNotes(e.target.value)}
                ></textarea>
            </div>

            <div className="col-xl-12">
                <div className="choose-file">
                <label htmlFor="resume-upload">
                    Upload Resume <span>(Optional)</span>
                </label>
                <br />
                <input
                    type="file"
                    id="resume-upload"
                    onChange={(e) => setResumeFile(e.target.files[0])}
                />
                <br />
                <span className="jm-file-size">Maximum file size: 2 MB</span>
                </div>
            </div>

            <div className="col-xl-12">
            <div className="jm-info-buttons mt-25">
                <button
                className="jm-post-job-btn jm-theme-btn"
                type="submit"
                onClick={handleFormSubmit}
                >
                Submit
                </button>
            </div>
            </div>
             </div>
        </div>
    </div>
    </div>
  )}
  export default AddResumeArea;
