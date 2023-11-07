import React from 'react'
import Breadcrumb from '../Breadcrumb/Breadcrumb'
import BrowseJobsList from '../Browse Jobs/BrowseJobsList'

const JobListMain = () => {
  return (
    <main>
        <Breadcrumb topic={"Jobs"} topicSpan={"Jobs List"}/>
        <BrowseJobsList/>
    </main>
  )
}

export default JobListMain