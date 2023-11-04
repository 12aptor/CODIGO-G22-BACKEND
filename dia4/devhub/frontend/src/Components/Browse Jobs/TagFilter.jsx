import React from 'react'
import { Link } from 'react-router-dom'
const TagFilter = () => {
  return (
    <div className="jm-browse-job-sidebar-widget mb-30">
        <h3 className="jm-browse-sidebar-widget-title">Filter by tag:</h3>
        <div className="jm-browse-sidebar-widget-tag">
            <Link href="#">Development</Link>
            <Link href="#">UI/UX</Link>
            <Link href="#">Devops</Link>
            <Link href="#">Design</Link>
            <Link href="#">Mobile App</Link>
            <Link href="#">Programing</Link>
            <Link href="#">HTML</Link>
            <Link href="#">C++</Link>
        </div>
    </div>
  )
}

export default TagFilter