import React from 'react'
import Breadcrumb from '../Breadcrumb/Breadcrumb'
import BlogDetails from '../Blog Area/BlogDetails'

const BlogDetailsMain = () => {
  return (
    <main>
        <Breadcrumb topic={"Blog"} topicSpan={"Blog Details"}/>
        <BlogDetails/>
    </main>
  )
}

export default BlogDetailsMain