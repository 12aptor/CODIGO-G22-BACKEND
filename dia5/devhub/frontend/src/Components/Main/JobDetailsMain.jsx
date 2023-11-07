import React from 'react'
import Breadcrumb from '../Breadcrumb/Breadcrumb'
import SingleJobDetails from '../Jobs/SingleJobDetails'

const JobDetailsMain = () => {
  return (
    <main>
        <Breadcrumb topic={'Job Details'} topicSpan={'Job Details'}/>
        <SingleJobDetails/>
    </main>
  )
}

export default JobDetailsMain