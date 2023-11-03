import React from 'react'
import Breadcrumb from '../Breadcrumb/Breadcrumb'
import PostJobArea from '../Jobs/PostJobArea'

const PostJobMain = () => {
  return (
    <main>
        <Breadcrumb topic={'Post Job'} topicSpan={'Post A Job'}/>
        <PostJobArea/>
    </main>
  )
}

export default PostJobMain