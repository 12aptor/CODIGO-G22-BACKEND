import React from 'react'
import SearchForm from "../Components/Search Form/SearchForm";
import SidePanel from "../Components/Side Panel/SidePanel";
import Header2 from "../Components/Header/Header2";
import Footer from '../Components/Footer/Footer';
import AddResumeMain from '../Components/Main/AddResumeMain';

const AddResumePage = () => {
  return (
    <>
        <SearchForm/>
        <SidePanel/>
        <Header2/>
        <AddResumeMain/>
        <Footer/>
    </>  
    )
}

export default AddResumePage