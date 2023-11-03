import React from 'react'
import Breadcrumb from '../Breadcrumb/Breadcrumb'
import EmployerList from '../Jobs/EmployerList'

const EmployerListMain = () => {
  return (
    <main>
        <Breadcrumb topic={'Employer'} topicSpan={'Employer List'}/>
        <EmployerList/>
    </main>
  )
}

export default EmployerListMain