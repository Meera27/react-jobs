import React from 'react'
import Hero from '../components/Hero'
import Homecard from '../components/Homecards'
import JobListings from '../components/JobListings'
import ViewAllJobs from '../components/ViewAllJobs'

const HomePage = () => {
  return (
    <>
      <Hero />
      <Homecard />
      <JobListings isHome = {true}/>
      <ViewAllJobs />
    </>
  )
}

export default HomePage
