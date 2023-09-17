import React from 'react'
import Header from '../../Global/Header'
import Home from './Home/Home'
import About from './About/About'
import Skills from './Skills/Skills'
import RecentProjects from './Projects/RecentProjects'
import Experience from './Experience/Experience'
import Testimonials from './Testimonials/Testimonials'

const Main = () => {
    document.body.scrollTop = 0; // For Safari
    document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera

    return (
        <>
            <Header />
            <div className="relative flex flex-col gap-5 px-7 sm:px-10 md:px-14 3xl:px-24">
                <Home />
                <About />
                <Skills />
                <RecentProjects />
                <Experience />
                {/* <Testimonials /> */}
            </div>
        </>
    )
}

export default Main