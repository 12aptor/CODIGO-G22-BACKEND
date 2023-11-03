import React from 'react'
import Banner2 from '../Banner/Banner2'
import JobSearchTab from '../Job Search/JobSearchTab'
import Category2 from '../Category Area/Category2'
import FeaturedJobs from '../Jobs/FeaturedJobs'
import WorkArea from '../Work Area/WorkArea'
import FeaturedCandidate from '../Candidates/FeaturedCandidate'
import VideoArea2 from '../Video Area/VideoArea2'
import PriceArea2 from '../Price Area/PriceArea2'
import BlogArea from '../Blog Area/BlogArea'
import JobSearchHero from '../Job Search/JobSearchHero'

const HomePageMain2 = () => {
  return (
    <main className='homepage-2-main'>
        <Banner2/>
        <JobSearchHero/>
        <JobSearchTab/>
        <Category2/>
        <FeaturedJobs/>
        <WorkArea/>
        <FeaturedCandidate/>
        <VideoArea2/>
        <PriceArea2/>
        <BlogArea/>
    </main>
  )
}

export default HomePageMain2