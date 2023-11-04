import React from 'react'

const SearchBar = () => {
  return (
    <div className="jm-browse-job-sidebar-widget mb-35">
        <h3 className="jm-browse-sidebar-widget-title">Keywords</h3>
        <form action="#">
            <input className="search_keyword input-width" name="search_location" type="text" placeholder="Job Keywords..."/>
        </form>
    </div>
  )
}

export default SearchBar