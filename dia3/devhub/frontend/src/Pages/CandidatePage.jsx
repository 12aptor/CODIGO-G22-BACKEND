import React from 'react'
import SearchForm from '../Components/Search Form/SearchForm'
import SidePanel from '../Components/Side Panel/SidePanel'
import Header2 from '../Components/Header/Header2'
import CandidatePageMain from '../Components/Main/CandidatePageMain'
import Footer from '../Components/Footer/Footer'

const CandidatePage = () => {
  return (
    <main>
        <SearchForm/>
        <SidePanel/>
        <Header2/>
        <CandidatePageMain/>
        <Footer/>
    </main>
  )
}

export default CandidatePage