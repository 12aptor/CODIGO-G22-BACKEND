import React from 'react'
import Breadcrumb from '../Breadcrumb/Breadcrumb'
import ErrorArea from '../Error/ErrorArea'

const ErrorMain = () => {
  return (
    <main>
        <Breadcrumb topic={"404"} topicSpan={"404"}/>
        <ErrorArea/>
    </main>
  )
}

export default ErrorMain