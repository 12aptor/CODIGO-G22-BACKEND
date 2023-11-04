import React from 'react'
import Breadcrumb from '../Breadcrumb/Breadcrumb'
import JobSearch from '../Job Search/JobSearch'

const CandidatePageMain = () => {
  return (
    <main>
        <Breadcrumb topic={"Candidate"} topicSpan={"Candidate Grid"}/>
        <JobSearch/>
    </main>
  )
}

export default CandidatePageMain