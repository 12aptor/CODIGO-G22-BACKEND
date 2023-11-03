import React, { createContext, useEffect, useState } from 'react';
import { jobs } from '../Data/JobsData';

const JobContext = createContext();

const JobContextProvider = ({ children }) => {
  // Search Form
  const [isFormOpen, setIsFormOpen] = useState(false);

  const handleOpenForm = () => {
    setIsFormOpen(true);
  };

  const handleCloseForm = () => {
    setIsFormOpen(false);
  };
  // SidePanel
  const [sidePanelOpen, setSidePanelOpen] = useState(false);

  const handleOpen = () => {
    setSidePanelOpen(true);
  };

  const handleClose = () => {
    setSidePanelOpen(false);
  };
  
  // Sticky Navbar
  const [isSticky, setIsSticky] = useState(false);

  useEffect(() => {
    let timeoutId;

    const handleScroll = () => {
      clearTimeout(timeoutId);
      timeoutId = setTimeout(() => {
        setIsSticky(window.scrollY > 0);
      }, 200); // Delay of 200 milliseconds
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
      clearTimeout(timeoutId);
    };
  }, []);
// Jobs Filter
const [filteredJobs, setFilteredJobs] = useState(jobs);

  const filterJobsByTime = (selectedTimes) => {
    if (selectedTimes.length === 0) {
      setFilteredJobs(jobs);
    } else {
      const filtered = jobs.filter((job) => selectedTimes.includes(job.jobTime));
      setFilteredJobs(filtered);
    }
  };
  const [selectedTimes, setSelectedTimes] = useState([]);

  const handleJobTimeSelect = (event) => {
    const { value, checked } = event.target;
    let updatedTimes = [...selectedTimes];

    if (checked) {
      // Add the selected time to the array
      updatedTimes.push(value);
    } else {
      // Remove the selected time from the array
      updatedTimes = updatedTimes.filter((time) => time !== value);
    }

    setSelectedTimes(updatedTimes);
    filterJobsByTime(updatedTimes);
  };
  // Modal 
  const [showModal, setShowModal] = useState(false);

  const handleCloseModal = () => {
    setShowModal(false);
  };

  const handleOpenModal = () => {
    setShowModal(true);
  };
  //Employer Filter
  const [selectedJobType, setSelectedJobType] = useState('');

  const handleJobTypeChange = (event) => {
    setSelectedJobType(event.target.value);
  };

  const filteredEmployer = jobs.filter(
    (job) => selectedJobType === '' || job.jobTime === selectedJobType
  );


  return (
    <JobContext.Provider value={{ 
      isFormOpen, 
      handleOpenForm, 
      handleCloseForm,
      isSticky, 
      filteredJobs, 
      filterJobsByTime,
      handleJobTimeSelect,
      showModal,
      handleCloseModal,
      handleOpenModal,
      handleJobTypeChange,
      filteredEmployer,
      selectedJobType,
      sidePanelOpen,
      handleOpen,
      handleClose,
      }}>
      {children}
    </JobContext.Provider>
  );
};

export { JobContext, JobContextProvider };
