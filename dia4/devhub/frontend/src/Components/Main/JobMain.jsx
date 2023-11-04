import React from 'react'
import Breadcrumb from '../Breadcrumb/Breadcrumb'
import BrowseJobsGrid from '../Browse Jobs/BrowseJobsGrid'

const JobMain = () => {
  return (
    <main>
        <Breadcrumb topic={"Jobs"} topicSpan={"Jobs Grid"}/>
        <BrowseJobsGrid/>
    </main>
  )
}

export default JobMain