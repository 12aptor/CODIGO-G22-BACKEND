import React from 'react'
import Breadcrumb from '../Breadcrumb/Breadcrumb'
import Blog2 from '../Blog Area/Blog2'
const BlogMain = () => {
  return (
    <main>
        <Breadcrumb topic={'Blog'} topicSpan={'Blog Grid'}/>
        <Blog2/>
    </main>
  )
}

export default BlogMain