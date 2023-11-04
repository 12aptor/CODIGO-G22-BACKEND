import React from 'react'
import Breadcrumb from '../Breadcrumb/Breadcrumb'
import ServiceDetails from '../Service/ServiceDetails'
import VideoArea from '../Video Area/VideoArea'

const ServiceDetailsMain = () => {
  return (
    <main className='service-details-main'>
        <Breadcrumb topic={"Service Details"} topicSpan={"Service Details"}/>
        <ServiceDetails/>
        <VideoArea/>
    </main>
  )
}

export default ServiceDetailsMain