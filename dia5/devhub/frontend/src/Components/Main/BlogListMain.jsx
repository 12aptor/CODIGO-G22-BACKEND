import React from 'react'
import Breadcrumb from '../Breadcrumb/Breadcrumb'
import BlogList from '../Blog Area/BlogList'

const BlogListMain = () => {
  return (
    <main>
        <Breadcrumb topic={'Blog'} topicSpan={'Blog List'}/>
        <BlogList/>
    </main>
  )
}

export default BlogListMain