import React from 'react'
import Breadcrumb from '../Breadcrumb/Breadcrumb'
import CompanyDetails from '../Jobs/CompanyDetails'

const CompanyDetailsMain = () => {
  return (
    <main>
        <Breadcrumb topic={'Employer Details'} topicSpan={'Employer Details'}/>
        <CompanyDetails/>
    </main>
  )
}

export default CompanyDetailsMain