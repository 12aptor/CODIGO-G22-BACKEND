import React from 'react'
import Breadcrumb from '../Breadcrumb/Breadcrumb'
import Category3 from '../Category Area/Category3'
import CallToAction from '../Call To Action/CallToAction'

const JobCategoryMain = () => {
  return (
    <main>
        <Breadcrumb topic={'Jobs'} topicSpan={'Jobs By Category'}/>
        <Category3/>
        <CallToAction/>
    </main>
  )
}

export default JobCategoryMain