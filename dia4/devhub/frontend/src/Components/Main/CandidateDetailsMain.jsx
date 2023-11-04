import React from 'react'
import Breadcrumb from '../Breadcrumb/Breadcrumb'
import SingleCandidate from '../Candidates/SingleCandidate'

const CandidateDetailsMain = () => {
  return (
    <main>
        <Breadcrumb topic={"Candidates"} topicSpan={"Candidates Details"}/>
        <SingleCandidate/>
    </main>
  )
}

export default CandidateDetailsMain