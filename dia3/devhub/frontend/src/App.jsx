import { BrowserRouter as Router,Routes,Route,useLocation } from "react-router-dom"
import ErrorPage from "./Pages/ErrorPage"
import CandidatePage from "./Pages/CandidatePage"
import CandidateListPage from "./Pages/CandidateListPage"
import CandidateDetailsPage from "./Pages/CandidateDetailsPage"
import JobListPage from "./Pages/JobListPage"
import JobDetailsPage from "./Pages/JobDetailsPage"
import CompanyDetailsPage from "./Pages/CompanyDetailsPage"
import PostJobPage from "./Pages/PostJobPage"
import AddResumePage from "./Pages/AddResumePage"
import { useEffect } from "react"

function App() {
  const ScrollToTop = () => {
    const { pathname } = useLocation();
  
    useEffect(() => {
      window.scrollTo(0, 0);
    }, [pathname]);
  
    return null;
  };
  return (
   <Router>
    <ScrollToTop/>
      <Routes>
          <Route path="/" element={<JobListPage/>}/>
          <Route path="/jobDetailsPage" element={<JobDetailsPage/>}/>
          <Route path="/companyDetailsPage" element={<CompanyDetailsPage/>}/>
          <Route path="/postJobPage" element={<PostJobPage/>}/>
          <Route path="/candidatePage" element={<CandidatePage/>}/>
          <Route path="/addResumePage" element={<AddResumePage/>}/>
          <Route path="/candidateListPage" element={<CandidateListPage/>}/>
          <Route path="/candidateDetailsPage" element={<CandidateDetailsPage/>}/>
          <Route path="*" element={<ErrorPage/>}/>
      </Routes>
   </Router>
  )
}

export default App
