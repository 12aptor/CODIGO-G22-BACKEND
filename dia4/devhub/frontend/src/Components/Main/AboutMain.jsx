import React from 'react'
import Breadcrumb from '../Breadcrumb/Breadcrumb'
import AboutArea from '../About/AboutArea'
import VideoArea2 from '../Video Area/VideoArea2'
import CallToAction from "../Call To Action/CallToAction"
const AboutMain = () => {
  return (
    <main className='about-main'>
        <Breadcrumb topic={"About"} topicSpan={"About"}/>
        <AboutArea/>
        <VideoArea2/>
        <CallToAction/>
    </main>
  )
}

export default AboutMain