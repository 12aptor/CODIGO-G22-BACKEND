import React from 'react'
import Breadcrumb from '../Breadcrumb/Breadcrumb'
import ContactArea from '../Contact/ContactArea'

const ContactMain = () => {
  return (
    <main>
        <Breadcrumb topic={'Contact'} topicSpan={'Contact'}/>
        <ContactArea/>
    </main>
  )
}

export default ContactMain