import React from 'react'
import Breadcrumb from '../Breadcrumb/Breadcrumb'
import WorkArea from '../Work Area/WorkArea'
import Category2 from '../Category Area/Category2'

const ServiceMain = () => {
  return (
    <main>
        <Breadcrumb topic={"Service"} topicSpan={"Services"}/>
        <WorkArea/>
        <Category2/>
    </main>
  )
}

export default ServiceMain