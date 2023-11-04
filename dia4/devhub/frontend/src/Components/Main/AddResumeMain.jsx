import React from 'react'
import Breadcrumb from '../Breadcrumb/Breadcrumb'
import AddResumeArea from '../Jobs/AddResumeArea'

const AddResumeMain = () => {
  return (
    <main>
        <Breadcrumb topic={'Add Resume'} topicSpan={'Add Your Resume'}/>
        <AddResumeArea/>
    </main>
  )
}

export default AddResumeMain